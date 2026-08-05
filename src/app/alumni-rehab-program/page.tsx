import "./page.css";
import type { Metadata } from "next";
import AlumniRehabProgram from "@/components/pages/AlumniRehabProgram";
import { fetchPageData } from "@/lib/wordpress";

export const revalidate = 60;

const IDENTITY = {"path":"/alumni-rehab-program","slug":"alumni-rehab-program"};

export async function generateMetadata(): Promise<import("next").Metadata> {
  const data = await fetchPageData(IDENTITY);
  return {
    title: data?.seo.title || "Alumni Rehab Program At District Behavioral Health",
    description: data?.seo.description || "",
    ...(data?.seo.canonical ? { alternates: { canonical: data.seo.canonical } } : {}),
    ...(data?.seo.robots ? { robots: data.seo.robots } : {}),
  };
}

export default async function Page() {
  const [data] = await Promise.all([
    fetchPageData(IDENTITY),
  ]);
  return <AlumniRehabProgram {...(data?.fields ?? {})} />;
}
