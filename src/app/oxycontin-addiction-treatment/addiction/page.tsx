import "./page.css";
import type { Metadata } from "next";
import OxycontinAddictionTreatmentAddiction from "@/components/pages/OxycontinAddictionTreatmentAddiction";
import { fetchPageData } from "@/lib/wordpress";

export const revalidate = 60;

const IDENTITY = {"path":"/oxycontin-addiction-treatment/addiction","slug":"addiction"};

export async function generateMetadata(): Promise<import("next").Metadata> {
  const data = await fetchPageData(IDENTITY);
  return {
    title: data?.seo.title || "OxyContin Addiction: Oxycodone Use And Treatment",
    description: data?.seo.description || "",
    ...(data?.seo.canonical ? { alternates: { canonical: data.seo.canonical } } : {}),
    ...(data?.seo.robots ? { robots: data.seo.robots } : {}),
  };
}

export default async function Page() {
  const [data] = await Promise.all([
    fetchPageData(IDENTITY),
  ]);
  return <OxycontinAddictionTreatmentAddiction {...(data?.fields ?? {})} />;
}
