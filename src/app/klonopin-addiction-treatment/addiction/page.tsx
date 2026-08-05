import "./page.css";
import type { Metadata } from "next";
import KlonopinAddictionTreatmentAddiction from "@/components/pages/KlonopinAddictionTreatmentAddiction";
import { fetchPageData } from "@/lib/wordpress";

export const revalidate = 60;

const IDENTITY = {"path":"/klonopin-addiction-treatment/addiction","slug":"addiction"};

export async function generateMetadata(): Promise<import("next").Metadata> {
  const data = await fetchPageData(IDENTITY);
  return {
    title: data?.seo.title || "| District Behavioral Health",
    description: data?.seo.description || "",
    ...(data?.seo.canonical ? { alternates: { canonical: data.seo.canonical } } : {}),
    ...(data?.seo.robots ? { robots: data.seo.robots } : {}),
  };
}

export default async function Page() {
  const [data] = await Promise.all([
    fetchPageData(IDENTITY),
  ]);
  return <KlonopinAddictionTreatmentAddiction {...(data?.fields ?? {})} />;
}
