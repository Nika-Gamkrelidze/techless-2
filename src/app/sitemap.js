import { SITE } from "@/data/site";
import { SERVICES } from "@/data/services";

export const dynamic = "force-static";

export default function sitemap() {
  const paths = ["/", "/services/", "/contact/", ...SERVICES.map((s) => `/services/${s.slug}/`)];
  return paths.map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
