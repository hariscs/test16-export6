import "./page.css";
import type { Metadata } from "next";
import ReviewUsCallSupportCenter from "@/components/pages/ReviewUsCallSupportCenter";
import { fetchPageData } from "@/lib/wordpress";

export const revalidate = 60;

const IDENTITY = {"path":"/review-us/call-support-center","slug":"call-support-center"};

export async function generateMetadata(): Promise<import("next").Metadata> {
  const data = await fetchPageData(IDENTITY);
  return {
    title: data?.seo.title || "| District Behavioral Health",
    description: data?.seo.description || "Submit Review Screenshots To Your Staff Representative or to the phone/email below:",
    ...(data?.seo.canonical ? { alternates: { canonical: data.seo.canonical } } : {}),
    ...(data?.seo.robots ? { robots: data.seo.robots } : {}),
  };
}

export default async function Page() {
  const [data] = await Promise.all([
    fetchPageData(IDENTITY),
  ]);
  return <ReviewUsCallSupportCenter {...(data?.fields ?? {})} />;
}
