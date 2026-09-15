import { site, projects } from "@/data/site";
export const dynamic = "force-static";
export default function sitemap() {
  return [
    "",
    "/research",
    "/build",
    "/writing",
    "/music",
    "/about",
    ...projects.map((p) => `/research/${p.slug}`),
  ].map((path) => ({ url: `${site.url}${path}/` }));
}
