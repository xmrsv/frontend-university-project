import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  compressHTML: true,
  output: "server",
  adapter: netlify({
    dist: new URL("./dist/", import.meta.url),
  }),
});
