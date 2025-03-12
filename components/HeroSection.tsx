import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?q=80&w=2376&auto=format&fit=crop"
          alt="Arte de tatuagem"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div
          className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            ARTE QUE PERMANECE
            <span className="block text-red-500 mt-2">NA SUA PELE</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-8">
            Designs únicos e personalizados que contam sua história
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
              Agende sua sessão
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="border-2 border-white hover:text-white hover:border-red-800 hover:bg-red-800 transition-colors"
            >
              Ver portfólio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
