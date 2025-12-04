"use client";

import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <Container maxWidth="md" className="flex-1 py-12">
        <Box className="max-w-2xl mx-auto">
          <Typography
            variant="h3"
            component="h1"
            className="mb-6 font-bold text-gray-900 dark:text-white text-center"
          >
            Contact Us
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <Stack spacing={3}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                fullWidth
                multiline
                rows={6}
                variant="outlined"
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                className="mt-4"
              >
                Send Message
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

