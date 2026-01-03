import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GallerySection from "./GallerySection";
import { getGalleryImages } from "@/lib/gallery";

export default function GalleryPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Gallery" },
  ];

  // Get images from public folder directories
  const galleryImages = getGalleryImages();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <GallerySection breadcrumbs={breadcrumbs} galleryImages={galleryImages} />
      </main>
      <Footer />
    </>
  );
}

