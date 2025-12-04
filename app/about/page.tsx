import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About | SimSanFraser",
  description: "Learn more about SimSanFraser",
};

export default function AboutPage() {
  return (
    <Box className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <Container maxWidth="lg" className="flex-1 py-12">
        <Box className="max-w-3xl mx-auto">
          <Typography
            variant="h3"
            component="h1"
            className="mb-6 font-bold text-gray-900 dark:text-white"
          >
            About SimSanFraser
          </Typography>
          <Typography
            variant="body1"
            className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            SimSanFraser is a modern web application built with the latest
            technologies and best practices for 2025.
          </Typography>
          <Typography
            variant="body1"
            className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            This project showcases:
          </Typography>
          <Box component="ul" className="list-disc pl-6 mb-4 space-y-2">
            <Typography
              component="li"
              className="text-gray-700 dark:text-gray-300"
            >
              Next.js 16 with App Router for optimal SSR performance
            </Typography>
            <Typography
              component="li"
              className="text-gray-700 dark:text-gray-300"
            >
              Tailwind CSS v4 for utility-first styling
            </Typography>
            <Typography
              component="li"
              className="text-gray-700 dark:text-gray-300"
            >
              Material-UI v7 with full SSR support
            </Typography>
            <Typography
              component="li"
              className="text-gray-700 dark:text-gray-300"
            >
              TypeScript for type safety
            </Typography>
            <Typography
              component="li"
              className="text-gray-700 dark:text-gray-300"
            >
              Modern project structure following 2025 best practices
            </Typography>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

