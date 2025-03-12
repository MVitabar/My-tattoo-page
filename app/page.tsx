"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import MyGallerySection from "@/components/gallery-section"
import ContactForm from "@/components/contact-form"

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";
import Footer from "@/components/Footer"

export default function Home() {
  // Animación de fade-in para toda la página
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div
      className={`min-h-screen bg-black text-white transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <Header />
      <HeroSection />
      <AboutSection />
      <MyGallerySection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
