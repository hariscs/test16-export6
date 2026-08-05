import "./page.css";
import type { Metadata } from "next";
import Reviews from "@/components/pages/Reviews";
import { fetchPageData } from "@/lib/wordpress";

export const revalidate = 60;

const IDENTITY = {"path":"/reviews","slug":"reviews"};

export async function generateMetadata(): Promise<import("next").Metadata> {
  const data = await fetchPageData(IDENTITY);
  return {
    title: data?.seo.title || "| District Behavioral Health",
    description: data?.seo.description || "Reviews",
    ...(data?.seo.canonical ? { alternates: { canonical: data.seo.canonical } } : {}),
    ...(data?.seo.robots ? { robots: data.seo.robots } : {}),
  };
}

export default async function Page() {
  const [data] = await Promise.all([
    fetchPageData(IDENTITY),
  ]);
  return <Reviews {...(data?.fields ?? {})} />;
}
