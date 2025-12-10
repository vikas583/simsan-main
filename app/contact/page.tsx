import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import HeroBanner from "@/components/HeroBanner";
import Box from "@mui/material/Box";

export default function ContactPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact Us" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <HeroBanner
          title="Get In Touch With us"
          breadcrumbs={breadcrumbs}
          backgroundImage="/home-about-imp2.png"
          minHeight="260px"
        />

        {/* Contact Us Section */}
        <ContactUs />

        {/* Google Map Section */}
        <Box className="w-full bg-white py-8 md:py-12">
          <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
            <Box
              className="w-full rounded-lg overflow-hidden shadow-lg"
              sx={{
                height: { xs: "400px", sm: "500px", md: "600px", lg: "700px" },
                position: "relative",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83327.225609682!2d-123.224926!3d49.2604404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map - Vancouver, BC"
              />
            </Box>
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
}

