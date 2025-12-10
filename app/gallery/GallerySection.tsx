"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import HeroBanner, { BreadcrumbItem } from "@/components/HeroBanner";
import { colors } from "@/lib/colors";
import { SERVICES } from "@/constants/services";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

// Sample gallery images - in production, these would come from a CMS or API
const galleryImages: GalleryImage[] = [
  // Roof & Gutter Cleaning
  { id: "1", src: "/home-about-img1.png", alt: "Roof cleaning before and after", category: "roof-gutter-cleaning" },
  { id: "2", src: "/home-about-imp2.png", alt: "Gutter cleaning service", category: "roof-gutter-cleaning" },
  { id: "3", src: "/homepage1.png", alt: "Professional roof maintenance", category: "roof-gutter-cleaning" },
  { id: "4", src: "/home-about-img1.png", alt: "Moss removal from roof", category: "roof-gutter-cleaning" },
  { id: "5", src: "/home-about-imp2.png", alt: "Clean gutters after service", category: "roof-gutter-cleaning" },
  { id: "6", src: "/homepage1.png", alt: "Roof inspection and cleaning", category: "roof-gutter-cleaning" },
  
  // Window Washing
  { id: "7", src: "/home-about-img1.png", alt: "Window washing service", category: "window-washing" },
  { id: "8", src: "/home-about-imp2.png", alt: "Crystal clear windows", category: "window-washing" },
  { id: "9", src: "/homepage1.png", alt: "Professional window cleaning", category: "window-washing" },
  
  // Pressure Cleaning
  { id: "10", src: "/home-about-img1.png", alt: "Pressure washing driveway", category: "pressure-cleaning" },
  { id: "11", src: "/home-about-imp2.png", alt: "Deck pressure cleaning", category: "pressure-cleaning" },
  { id: "12", src: "/homepage1.png", alt: "Siding pressure washing", category: "pressure-cleaning" },
  
  // Christmas & Lighting Decoration
  { id: "13", src: "/home-about-img1.png", alt: "Christmas lighting installation", category: "christmas-lighting-decoration" },
  { id: "14", src: "/home-about-imp2.png", alt: "Holiday decoration service", category: "christmas-lighting-decoration" },
  { id: "15", src: "/homepage1.png", alt: "Festive lighting display", category: "christmas-lighting-decoration" },
];

const filterOptions = [
  { id: "all", label: "All", slug: "all" },
  ...SERVICES.map(service => ({ id: service.slug, label: service.title, slug: service.slug }))
];

export default function GallerySection({ breadcrumbs }: { breadcrumbs: BreadcrumbItem[] }) {
  const [activeFilter, setActiveFilter] = useState<string>("roof-gutter-cleaning");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    if (direction === "prev") {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
      setSelectedImage(filteredImages[prevIndex]);
    } else {
      const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(filteredImages[nextIndex]);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
        setSelectedImage(filteredImages[prevIndex]);
      } else if (e.key === "ArrowRight") {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
        setSelectedImage(filteredImages[nextIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, filteredImages]);

  return (
    <>
      {/* Hero Section */}
      <HeroBanner
        title="Our Work Gallery"
        breadcrumbs={breadcrumbs}
        backgroundImage="/home-about-imp2.png"
        minHeight="260px"
      />

      {/* Filter Buttons Section */}
      <Box className="bg-white py-8 md:py-12">
        <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
          <Box className="flex flex-wrap justify-center gap-3 md:gap-4">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.slug)}
                className={`px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base lg:text-lg transition-all duration-200 ${
                  activeFilter === filter.slug
                    ? "text-white"
                    : "bg-transparent border-2 text-gray-600 hover:border-gray-400"
                }`}
                style={{
                  backgroundColor: activeFilter === filter.slug ? colors.primary : "transparent",
                  borderColor: activeFilter === filter.slug ? colors.primary : "#e5e7eb",
                }}
              >
                {filter.label}
              </button>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Image Gallery Grid */}
      <Box className="bg-white py-8 md:py-12 lg:py-16">
        <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
          <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredImages.map((image) => (
              <Box
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100"
                onClick={() => handleImageClick(image)}
                sx={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "75%", // 4:3 aspect ratio
                  height: 0,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                  />
                </Box>
                
                {/* Hover Overlay with Zoom Icon */}
                <Box
                  className="absolute inset-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center z-10"
                >
                  <Box
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="md:w-8 md:h-8"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Box
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:opacity-70 transition-opacity z-10"
            aria-label="Close"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Navigation Buttons */}
          {filteredImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                className="absolute left-4 md:left-8 text-white hover:opacity-70 transition-opacity z-10"
                aria-label="Previous image"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                className="absolute right-4 md:right-8 text-white hover:opacity-70 transition-opacity z-10"
                aria-label="Next image"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}

          {/* Image */}
          <Box
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              priority
            />
          </Box>
        </Box>
      )}
    </>
  );
}

