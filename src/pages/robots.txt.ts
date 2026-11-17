import type { APIRoute } from "astro";
import { siteConfig } from "../config/site";

export const GET: APIRoute = () => {
    const { demo, business } = siteConfig;
    const siteUrl = business.siteUrl.replace(/\/+$/, "");

    const body = demo.enabled
        ? "User-agent: *\nDisallow: /\n"
        : `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap-index.xml\n`;

    return new Response(body, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
};
