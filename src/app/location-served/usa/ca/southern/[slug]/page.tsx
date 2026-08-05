import "./page.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import LocationServedUsa from "@/components/templates/LocationServedUsa";
import LocationServedUsaPsilocybinAddictionTreatment from "@/components/templates/LocationServedUsaPsilocybinAddictionTreatment";
import Cro2NationalRehabNationalRehab from "@/components/templates/Cro2NationalRehabNationalRehab";
import LocationServedUsaCaSouthern from "@/components/templates/LocationServedUsaCaSouthern";
import { fetchPageData } from "@/lib/wordpress";

export const revalidate = 60;
export const dynamicParams = true;

const TEMPLATES: Record<string, ComponentType<Record<string, string>>> = {
  "cro1-geo+geo": LocationServedUsaCaSouthern,
  "cro1-national-rehab+national-rehab": LocationServedUsa,
  "blog+cro1": LocationServedUsaPsilocybinAddictionTreatment,
  "cro2-national-rehab+national-rehab": Cro2NationalRehabNationalRehab,
};

const PREFIX = "/location-served/usa/ca/southern";
const FALLBACK_SLUGS = ["php-drug-rehab","virtual-iop","sober-living","drug-rehab","iop-drug-rehab","outpatient-drug-rehab","adhd","premenstrual-dysphoric-disorder","adjustment","borderline-personality-disorder","personality-disorder","neurodevelopment-disorder"] as string[];

// Slugs are not unique across the page tree, so the route param alone cannot identify the page.
// The prefix is fixed for this route, which makes prefix + slug an unambiguous path.
const identityFor = (slug: string) => ({ path: `${PREFIX}/${slug}`, slug });

export async function generateStaticParams() {
  const wpUrl = process.env.WORDPRESS_URL;
  if (!wpUrl) return FALLBACK_SLUGS.map((slug) => ({ slug }));
  try {
    const res = await fetch(
      `${wpUrl}/wp-json/builder/v1/pages?path=%2Flocation-served%2Fusa%2Fca%2Fsouthern`,
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
  const Template = TEMPLATES[(data.templates?.slugs ?? []).slice().sort().join("+")] ?? LocationServedUsaCaSouthern;
  return <Template {...data.fields} __present={(data.present ?? []).join(",")} />;
}
