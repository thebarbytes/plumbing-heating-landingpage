import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/config/site.ts";

export default defineConfig({
    site: siteConfig.business.siteUrl,
    output: "static",
    integrations: [
        sitemap({
            filter: (page) => !page.includes("/404"),
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
