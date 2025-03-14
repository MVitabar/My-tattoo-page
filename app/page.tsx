"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Header";
import Hero from "@/components/HeroSection";
import GallerySection from "@/components/gallery-section";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import FeedbackSection from "@/components/FeedbackSection";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <AboutSection />
      <GallerySection />
      <ServicesSection />
      <FeedbackSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
