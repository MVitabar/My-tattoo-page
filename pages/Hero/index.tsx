import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/gallery-section";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

export default function Hero() {
  return <div>
    <HeroSection />
    <AboutSection />
    <GallerySection />
    <ServicesSection />
    <ContactSection />
    <Footer />
  </div>;
}
