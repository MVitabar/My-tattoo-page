"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Header";
import Hero from "@/components/HeroSection";
import GallerySection from "@/components/gallery-section";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <GallerySection />
      <ServicesSection />
      
      <ContactSection />
      <Footer />
    </main>
  );
}
