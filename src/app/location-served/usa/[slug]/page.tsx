import "./page.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import LocationServedUsaCaNewportBeach from "@/components/templates/LocationServedUsaCaNewportBeach";
import LocationServedUsaPsilocybinAddictionTreatment from "@/components/templates/LocationServedUsaPsilocybinAddictionTreatment";
import Cro2NationalRehabNationalRehab from "@/components/templates/Cro2NationalRehabNationalRehab";
import LocationServedUsa from "@/components/templates/LocationServedUsa";
import { fetchPageData } from "@/lib/wordpress";

export const revalidate = 60;
export const dynamicParams = true;

const TEMPLATES: Record<string, ComponentType<Record<string, string>>> = {
  "cro1-geo+geo": LocationServedUsaCaNewportBeach,
  "cro1-national-rehab+national-rehab": LocationServedUsa,
  "blog+cro1": LocationServedUsaPsilocybinAddictionTreatment,
  "cro2-national-rehab+national-rehab": Cro2NationalRehabNationalRehab,
};

const PREFIX = "/location-served/usa";
const FALLBACK_SLUGS = ["virtual-iop","pet-friendly-rehab","couples-rehab","nitazene-addiction-treatment","ketamine-addiction-treatment","xanax-addiction-treatment","benzo-addiction-treatment","fentanyl-addiction-treatment","acute-stress-disorder","separation-anxiety-disorder","gad","crack-cocaine","neurodevelopment-disorder","sober-living","drug-rehab","php-drug-rehab","iop-drug-rehab","outpatient-drug-rehab","clonazepam-addiction-treatment","clonidine-addiction-treatment","codeine-addiction-treatment","buprenorphine-addiction-treatment","buspar-addiction-treatment","butalbital-addiction-treatment","bath-salts-addiction-treatment","amphetamines-addiction-treatment","ativan-addiction-treatment","ambien-addiction-treatment","opioids-addiction-treatment","heroin-addiction-treatment","addiction","lgbtq-drug-rehab","marijuana-addiction-treatment","kratom-addiction-treatment","cocaine-addiction-treatment","meth-addiction-treatment","emdr-therapy","dbt-therapy","cbt-therapy","mat-therapy","dual-diagnosis-treatment","psycho-dynamic","dissociative-identity","social","antisocial-personality","family","motivational","act","ifs","panic-disorder","trauma","cpt","schizophrenia","schizoaffective-disorder","depression","anxiety","ptsd","bipolar","obsessive-compulsive","mental-health","7-oh","residential-substance-use","intensive-inpatient","medical-detox","alcohol-disorder","trauma-bonding","hyper-independence","roofie","track-marks","anavar-oxandrolone","dmt","diphenhydramine-benadryl","zoloft","mixing","magic-mushrooms","vs","ativan-lorazepam","poppers","lsd","dxm","alcohol","adderall-addiction-treatment","tn","fl","psychotic-disorder-treatment","mood-disorder-treatment","paraphrenia-treatment","substance-induced-psychotic-disorder-treatment","brief-psychotic-disorder-treatment","delusional-disorder-treatment","avoidant-personality-disorder-treatment","histrionic-personality-disorder-treatment","narcissistic-personality-disorder-treatment","seasonal-affective-disorder-treatment","persistent-depressive-disorder-treatment","major-depressive-disorder-treatment","disruptive-mood-dysregulation-disorder-treatment","agoraphobia-disorder-treatment","adhd","premenstrual-dysphoric-disorder","adjustment","borderline-personality-disorder","personality-disorder"] as string[];

// Slugs are not unique across the page tree, so the route param alone cannot identify the page.
// The prefix is fixed for this route, which makes prefix + slug an unambiguous path.
const identityFor = (slug: string) => ({ path: `${PREFIX}/${slug}`, slug });

export async function generateStaticParams() {
  const wpUrl = process.env.WORDPRESS_URL;
  if (!wpUrl) return FALLBACK_SLUGS.map((slug) => ({ slug }));
  try {
    const res = await fetch(
      `${wpUrl}/wp-json/builder/v1/pages?path=%2Flocation-served%2Fusa`,
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
  const Template = TEMPLATES[(data.templates?.slugs ?? []).slice().sort().join("+")] ?? LocationServedUsa;
  return <Template {...data.fields} __present={(data.present ?? []).join(",")} />;
}
