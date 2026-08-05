import "./page.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import LocationServedUsaCaNewportBeach from "@/components/templates/LocationServedUsaCaNewportBeach";
import LocationServedUsa from "@/components/templates/LocationServedUsa";
import LocationServedUsaPsilocybinAddictionTreatment from "@/components/templates/LocationServedUsaPsilocybinAddictionTreatment";
import Cro2NationalRehabNationalRehab from "@/components/templates/Cro2NationalRehabNationalRehab";
import Quiz from "@/components/templates/Quiz";
import { fetchPageData } from "@/lib/wordpress";

export const revalidate = 60;
export const dynamicParams = true;

const TEMPLATES: Record<string, ComponentType<Record<string, string>>> = {
  "cro1-geo+geo": LocationServedUsaCaNewportBeach,
  "cro1-national-rehab+national-rehab": LocationServedUsa,
  "blog+cro1": LocationServedUsaPsilocybinAddictionTreatment,
  "cro2-national-rehab+national-rehab": Cro2NationalRehabNationalRehab,
};

const PREFIX = "/quiz";
const FALLBACK_SLUGS = ["ptsd-checklist-civilian","bipolar-disorder","bipolar-disorder-dsm5","am-i-alcoholic","am-i-addicted","depression-rating-scale-phq-9","generalized-anxiety-disorder-screening","anxiety-worry-7"] as string[];

// Slugs are not unique across the page tree, so the route param alone cannot identify the page.
// The prefix is fixed for this route, which makes prefix + slug an unambiguous path.
const identityFor = (slug: string) => ({ path: `${PREFIX}/${slug}`, slug });

export async function generateStaticParams() {
  const wpUrl = process.env.WORDPRESS_URL;
  if (!wpUrl) return FALLBACK_SLUGS.map((slug) => ({ slug }));
  try {
    const res = await fetch(
      `${wpUrl}/wp-json/builder/v1/pages?path=%2Fquiz`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return FALLBACK_SLUGS.map((slug) => ({ slug }));
    const pages = (await res.json()) as { slug: string }[];
    return pages.map((p) => ({ slug: p.slug }));
  } catch {
    return FALLBACK_SLUGS.map((slug) => ({ slug }));
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchPageData(identityFor(slug));
  if (!data) return {};
  return {
    title: data.seo.title || undefined,
    description: data.seo.description || undefined,
    ...(data.seo.canonical ? { alternates: { canonical: data.seo.canonical } } : {}),
    ...(data.seo.robots ? { robots: data.seo.robots } : {}),
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [data] = await Promise.all([
    fetchPageData(identityFor(slug), { present: true }),
  ]);
  if (!data) notFound();
  const Template = TEMPLATES[(data.templates?.slugs ?? []).slice().sort().join("+")] ?? Quiz;
  return <Template {...data.fields} />;
}
