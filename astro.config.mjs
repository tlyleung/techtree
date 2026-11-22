// @ts-check
import { defineConfig } from "astro/config";

// The site is served from the custom domain's root, so no `base` is needed.
export default defineConfig({
  site: "https://technologytree.org",
  trailingSlash: "ignore",
});
