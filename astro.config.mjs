import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import expressiveCode from "astro-expressive-code";

export default defineConfig({
  site: "https://kernox.me",
  integrations: [expressiveCode(), mdx(), sitemap(), tailwind(), pagefind()]
});