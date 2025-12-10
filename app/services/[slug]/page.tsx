import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetail from "./ServiceDetail";
import { getServiceBySlug, SERVICES } from "@/constants/services";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  // Await params in Next.js 15+
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/our-services" },
    { label: service.title },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <ServiceDetail service={service} breadcrumbs={breadcrumbs} />
      </main>
      <Footer />
    </>
  );
}

