import { defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

// Eras in display order (by `from`); `from`/`to` are years, negative = BCE.
const eras = defineCollection({
  loader: file("src/content/eras.yaml"),
  schema: z.object({
    name: z.string(),
    from: z.number().nullable(),
    to: z.number().nullable(),
  }),
});

// One Markdown file per technology; the file name is its id. Future-only
// fields from the draft schema in PLAN.md (TRL, milestones, forecasts) are
// added in Phase 2.
const tech = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/tech" }),
  schema: z.object({
    name: z.string(),
    kind: z.enum(["history", "future"]),
    era: reference("eras"),
    year: z.number().int(), // year it first appeared; rough until sourced
    requires: z.array(reference("tech")).default([]),
    icon: z.object({
      prompt: z.string().nullable(), // for the later medallion phase
      image: z.string().nullable().default(null),
    }),
  }),
});

export const collections = { eras, tech };
