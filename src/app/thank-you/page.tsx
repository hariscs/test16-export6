import "./page.css";
import type { Metadata } from "next";
import ThankYou from "@/components/pages/ThankYou";
import { fetchPageData } from "@/lib/wordpress";

export const revalidate = 60;

const IDENTITY = {"path":"/thank-you","slug":"thank-you"};

export async function generateMetadata(): Promise<import("next").Metadata> {
  const data = await fetchPageData(IDENTITY);
  return {
    title: data?.seo.title || "Thank You Page | District Behavioral Health",
    description: data?.seo.description || "While you wait, explore our facilities, see what your care experience will look like, and learn what happens next.",
    ...(data?.seo.canonical ? { alternates: { canonical: data.seo.canonical } } : {}),
    ...(data?.seo.robots ? { robots: data.seo.robots } : {}),
  };
}

export default async function Page() {
  const [data] = await Promise.all([
    fetchPageData(IDENTITY),
  ]);
  return <ThankYou {...(data?.fields ?? {})} />;
}
