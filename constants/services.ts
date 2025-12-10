export interface Service {
  slug: string;
  title: string;
  shortTitle: string; // For hero section split title
  description: string;
  longDescription: string;
  subheading: string;
  benefits: string[];
  heroImage: string;
  galleryImages: string[];
  area: string;
}

export const SERVICES: Service[] = [
  {
    slug: "roof-gutter-cleaning",
    title: "Roof & Gutter Cleaning",
    shortTitle: "Roof &",
    description: "Clogged gutters can cause water to back up into your roof, walls, and foundation. Our professional cleaning removes leaves, needles, and debris to keep your drainage system flowing properly and prevent structural damage.",
    longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective roof and gutter cleaning services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. We understand that your roof and gutters are critical components of your home's protection system, and we treat them with the care and professionalism they deserve.",
    subheading: "Serving the Greater Seattle & Portland Area",
    benefits: [
      "Experienced professionals with 40+ years of expertise",
      "Complete roof & gutter care — cleaning, inspection, moss removal, and minor repairs",
      "No-mess guarantee — we leave your home clean and tidy",
      "Flexible scheduling to fit your routine"
    ],
    heroImage: "/homepage1.png",
    galleryImages: [
      "/home-about-img1.png",
      "/home-about-imp2.png",
      "/homepage1.png"
    ],
    area: "Greater Seattle & Portland Area"
  },
  {
    slug: "window-washing",
    title: "Window Washing",
    shortTitle: "Window",
    description: "Crystal clear windows enhance your property's appearance and let in more natural light. Our professional window cleaning service removes dirt, grime, and streaks for spotless results every time.",
    longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective window washing services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. We don't use any chemicals or soaps to clean windows, ensuring a streak-free, crystal-clear finish that enhances your property's appearance.",
    subheading: "Serving the Greater Seattle & Portland Area",
    benefits: [
      "Streak-free, crystal-clear results every time",
      "Chemical-free cleaning methods for safety",
      "Professional equipment and techniques",
      "Flexible scheduling to fit your routine"
    ],
    heroImage: "/home-about-img1.png",
    galleryImages: [
      "/home-about-img1.png",
      "/home-about-imp2.png",
      "/homepage1.png"
    ],
    area: "Greater Seattle & Portland Area"
  },
  {
    slug: "pressure-cleaning",
    title: "Pressure Cleaning",
    shortTitle: "Pressure",
    description: "Restore your property's exterior surfaces to like-new condition. Our pressure cleaning service effectively removes mold, mildew, dirt, and stains from driveways, walkways, decks, and siding.",
    longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective pressure cleaning services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our pressure washing service restores surfaces to their original beauty, removing dirt, grime, and stains with precision and care.",
    subheading: "Serving the Greater Seattle & Portland Area",
    benefits: [
      "Restores surfaces to like-new condition",
      "Removes mold, mildew, dirt, and stains",
      "Safe for driveways, walkways, decks, and siding",
      "Flexible scheduling to fit your routine"
    ],
    heroImage: "/home-about-imp2.png",
    galleryImages: [
      "/home-about-img1.png",
      "/home-about-imp2.png",
      "/homepage1.png"
    ],
    area: "Greater Seattle & Portland Area"
  },
  {
    slug: "christmas-lighting-decoration",
    title: "Christmas & Lighting Decoration",
    shortTitle: "Christmas & Lighting",
    description: "Transform your property into a winter wonderland with our professional holiday lighting installation. We handle design, installation, maintenance, and removal for a hassle-free festive season.",
    longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective Christmas lighting and decoration services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Nothing we love more than helping a family with a Christmas tree or a holiday look that will be cherished for years to come.",
    subheading: "Serving the Greater Seattle & Portland Area",
    benefits: [
      "Complete design, installation, and removal service",
      "Beautiful, safe, and eye-catching displays",
      "Professional installation and maintenance",
      "Flexible scheduling to fit your routine"
    ],
    heroImage: "/homepage1.png",
    galleryImages: [
      "/home-about-img1.png",
      "/home-about-imp2.png",
      "/homepage1.png"
    ],
    area: "Greater Seattle & Portland Area"
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find(service => service.slug === slug);
}

