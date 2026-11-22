import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { eraSchema, techSchema } from "./lib/schema.ts";

// Eras (history) and date bands (future), in src/content/eras.yaml.
const eras = defineCollection({
  loader: file("src/content/eras.yaml"),
  schema: eraSchema,
});

// One Markdown file per technology; the file name is its id. The schema is
// shared with scripts/lint.ts and is strict: unknown keys fail the build.
// Prerequisite ids are checked by the lint, which the build runs first.
const tech = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/tech" }),
  schema: techSchema,
});

export const collections = { eras, tech };
