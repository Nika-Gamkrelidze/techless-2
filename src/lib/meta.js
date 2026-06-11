import { SITE } from "@/data/site";

// Builds the per-page metadata object: canonical URL + Open Graph + Twitter.
// `title: null` means "use the site default title" (home page).
export function pageMeta({ title = null, description, path }) {
  const fullTitle = title ? `${title} — ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
  return {
    // `title: null` would suppress the tag entirely, so only set it when given;
    // pages without one inherit the layout default.
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title: fullTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
    },
  };
}
