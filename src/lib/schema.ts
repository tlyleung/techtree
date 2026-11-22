// The technology schema, shared by the site build (src/content.config.ts)
// and the lint (scripts/lint.ts), so a file that passes one passes the other.
// Objects are strict: an unknown or misspelt key fails the build.
import { z } from "astro/zod";

const date = z.coerce.date();
const year = z.number().int();

export const FORECAST_SOURCES = ["metaculus", "manifold", "survey", "kurzweil", "maintainer", "other"] as const;

const snapshot = z.strictObject({
  retrieved: date,
  low: year.optional(),
  median: year,
  high: year.optional(),
});

const forecast = z.strictObject({
  source: z.enum(FORECAST_SOURCES),
  name: z.string().optional(), // display name, e.g. a survey's title; required for survey and other
  primary: z.boolean().default(false), // the primary forecast sets the node's position
  url: z.url().optional(),
  citation: z.string().optional(), // for books and papers, e.g. "The Singularity Is Nearer (2024), ch. 2"
  retrieved: date.optional(),
  low: year.optional(), // 25th percentile or lower bound
  median: year,
  high: year.optional(), // 75th percentile or upper bound
  definition_notes: z.string().optional(), // how the source's question differs from our definition
  history: z.array(snapshot).default([]),
}).superRefine((f, ctx) => {
  if ((f.source === "survey" || f.source === "other") && !f.name)
    ctx.addIssue({ code: "custom", message: `a ${f.source} forecast needs a name` });
  if (!f.url && !f.citation) ctx.addIssue({ code: "custom", message: "a forecast needs a url or a citation" });
  if (f.source === "maintainer" && (f.low === undefined || f.high === undefined))
    ctx.addIssue({ code: "custom", message: "a maintainer estimate must be a range (low and high)" });
  if (f.low !== undefined && f.low > f.median) ctx.addIssue({ code: "custom", message: "forecast low is after its median" });
  if (f.high !== undefined && f.high < f.median) ctx.addIssue({ code: "custom", message: "forecast high is before its median" });
});

const milestone = z.strictObject({
  date: date.optional(),
  text: z.string(),
  status: z.enum(["done", "pending"]),
  demonstrates: z.boolean().default(false), // this milestone is the node's first demonstration
  sources: z.array(z.url()).default([]),
}).superRefine((m, ctx) => {
  if (m.status === "done" && !m.date) ctx.addIssue({ code: "custom", message: `done milestone needs a date: ${m.text}` });
  if (m.status === "done" && !m.sources.length) ctx.addIssue({ code: "custom", message: `done milestone needs a source: ${m.text}` });
});

const trlLevel = z.number().int().min(1).max(9);

export const techSchema = z.strictObject({
  name: z.string(),
  kind: z.enum(["history", "future"]),
  era: z.string().optional(), // history only: an era id from src/content/eras.yaml
  year: year.optional(), // history only: year of first demonstration (negative = BCE)
  definition: z.string().optional(), // future: the checkable test for first demonstration
  requires: z.array(z.string()).default([]), // ids (file names) of prerequisites
  icon: z.strictObject({
    prompt: z.string().nullable(), // for the later medallion phase
    image: z.string().nullable().default(null),
  }),
  trl: z.strictObject({ level: trlLevel, as_of: date, rationale: z.string() }).optional(),
  trl_history: z.array(z.strictObject({ level: trlLevel, as_of: date })).default([]),
  milestones: z.array(milestone).default([]),
  forecasts: z.array(forecast).default([]),
}).superRefine((t, ctx) => {
  const need = (ok: unknown, message: string) => { if (!ok) ctx.addIssue({ code: "custom", message }); };
  if (t.kind === "history") {
    need(t.era, "a history technology needs an era");
    need(t.year !== undefined, "a history technology needs a year");
  } else {
    need(!t.era && t.year === undefined, "a future technology has no era or year; its date band comes from its primary forecast");
    need(t.definition, "a future technology needs a definition (its first-demonstration test)");
    need(t.trl, "a future technology needs a trl");
    need(t.requires.length, "a future technology needs at least one prerequisite");
    // Its definition marks roughly TRL 7, and meeting it moves it to history (docs/trl-rubric.md).
    need(!t.trl || t.trl.level <= 6, "a future technology scores TRL 1–6; at 7 or above its definition is met and it belongs in history");
    const primary = t.forecasts.filter((f) => f.primary);
    need(primary.length === 1, "a future technology needs exactly one primary forecast");
    if (primary[0]) need(primary[0].low !== undefined && primary[0].high !== undefined, "the primary forecast must be a range (low and high)");
    // A sourced, done first demonstration means the technology is history now.
    need(!t.milestones.some((m) => m.demonstrates && m.status === "done"),
      "its first demonstration is done: move it to history (kind: history, with era and year from that milestone)");
  }
  need(t.milestones.filter((m) => m.demonstrates).length <= 1, "only one milestone can be the first demonstration");
});

export type Tech = z.infer<typeof techSchema>;

export const eraSchema = z.strictObject({
  id: z.string(),
  name: z.string(),
  from: year.nullable(),
  to: year.nullable(),
  future: z.boolean().default(false), // a date band after the "today" line
});

export type Era = z.infer<typeof eraSchema>;

/** The median of a technology's primary forecast. */
export const primaryMedian = (t: Tech) => t.forecasts.find((f) => f.primary)?.median;

/** The date band a future technology falls in, by its primary forecast's median. */
export function bandFor(median: number, eras: Era[]): Era | undefined {
  return eras.find((e) => e.future && (e.from === null || median >= e.from) && (e.to === null || median < e.to));
}
