import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GallerySection from "./GallerySection";

export default function GalleryPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Gallery" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <GallerySection breadcrumbs={breadcrumbs} />
      </main>
      <Footer />
    </>
  );
}

