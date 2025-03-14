"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Update the galleryImages array to match the main gallery categories
const galleryImages = [
  // Realismo images
  {
    id: 1,
    src: "/assets/realismo1.jpg",
    alt: "Tatuagem realista",
    category: "realismo",
  },
  {
    id: 2,
    src: "/assets/realismo2.jpg",
    alt: "Tatuagem realista",
    category: "realismo",
  },
  {
    id: 3,
    src: "/assets/realismo3.jpg",
    alt: "Tatuagem realista",
    category: "realismo",
  },
  {
    id: 4,
    src: "/assets/realismo4.jpg",
    alt: "Tatuagem realista",
    category: "realismo",
  },
  // Preto e cinza images
  {
    id: 5,
    src: "/assets/tattoo1.jpg",
    alt: "Tatuagem preto e cinza",
    category: "preto-e-cinza",
  },
  {
    id: 6,
    src: "/assets/tattoo2.jpg",
    alt: "Tatuagem preto e cinza",
    category: "preto-e-cinza",
  },
  {
    id: 7,
    src: "/assets/tattoo3.jpg",
    alt: "Tatuagem preto e cinza",
    category: "preto-e-cinza",
  },
  // Colorido images
  {
    id: 8,
    src: "/assets/tattoo4.jpg",
    alt: "Tatuagem colorida",
    category: "colorido",
  },
  {
    id: 9,
    src: "/assets/tattoo5.jpg",
    alt: "Tatuagem colorida",
    category: "colorido",
  },
  {
    id: 10,
    src: "/assets/tattoo6.jpg",
    alt: "Tatuagem colorida",
    category: "colorido",
  }
]

export default function GaleriaPage() {
  const [activeFilter, setActiveFilter] = useState("todos")
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string
    alt: string
  }>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredImages = activeFilter === "todos"
    ? [
        ...galleryImages.filter(img => img.category === "realismo").slice(0, 3),
        ...galleryImages.filter(img => img.category === "colorido").slice(0, 3),
        ...galleryImages.filter(img => img.category === "preto-e-cinza").slice(0, 3)
      ]
    : galleryImages.filter((img) => img.category === activeFilter)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/realismo1.jpg"
            alt="Galeria de tatuagens"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              MEU <span className="text-red-500">PORTFÓLIO</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-8">
              Conheça alguns dos meus trabalhos em diferentes estilos
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div
            className={`flex justify-center mb-12 transition-all duration-700 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveFilter("todos")}
                className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === "todos" ? "bg-red-500 text-white" : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
              >
                Destaques
              </button>
              <button
                onClick={() => setActiveFilter("preto-e-cinza")}
                className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === "preto-e-cinza" ? "bg-red-500 text-white" : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
              >
                Preto e Cinza
              </button>
              <button
                onClick={() => setActiveFilter("realismo")}
                className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === "realismo" ? "bg-red-500 text-white" : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
              >
                Realismo
              </button>
              <button
                onClick={() => setActiveFilter("colorido")}
                className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === "colorido" ? "bg-red-500 text-white" : "bg-zinc-800 text-white hover:bg-zinc-700"
                }`}
              >
                Colorido
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer group transition-all duration-700 transform ${
                  isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${100 + index * 50}ms` }}
                onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium px-4 py-2 bg-red-500/80 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Ver detalhe
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <p className="text-center text-zinc-400 mt-8 animate-pulse">
              Não há imagens disponíveis para esta categoria.
            </p>
          )}

          {/* Modal para ver imagem ampliada */}
          {selectedImage && (
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn">
              <button
                className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors transform hover:rotate-90 duration-300"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <div className="relative max-w-4xl max-h-[80vh] w-full animate-scaleIn">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  width={800}
                  height={1200}
                  className="object-contain mx-auto max-h-[80vh]"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            SIGA MEU <span className="text-red-500">INSTAGRAM</span>
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-8">
            Acompanhe meu trabalho diário e veja mais exemplos de tatuagens no meu perfil do Instagram
          </p>
          <a
            href="https://www.instagram.com/martin.vitabar.tattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Instagram size={24} />
            <span>@martin.vitabar.tattoo</span>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            PRONTO PARA <span className="text-red-500">SUA TATUAGEM?</span>
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-8">
            Entre em contato para discutirmos suas ideias e criarmos uma arte única para você
          </p>
          <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-white">
            <Link href="/contact">Agende sua sessão</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

