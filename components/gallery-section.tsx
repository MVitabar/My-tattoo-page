"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, Instagram } from "lucide-react"

// Dados de exemplo para a galeria com imagens de Unsplash
const galleryImages = [
  // Preto e Cinza
  {
    id: 1,
    src: "/assets/tattoo1.jpg",
    alt: "Tatuagem em preto e cinza",
    category: "preto-e-cinza",
  },
  {
    id: 2,
    src: "/assets/tattoo2.jpg",
    alt: "Tatuagem em preto e cinza",
    category: "preto-e-cinza",
  },
  {
    id: 3,
    src: "/assets/tattoo3.jpg",
    alt: "Tatuagem em preto e cinza",
    category: "preto-e-cinza",
  },
  {
    id: 4,
    src: "/assets/tattoo4.jpg",
    alt: "Tatuagem em preto e cinza",
    category: "preto-e-cinza",
  },
  {
    id: 5,
    src: "/assets/tattoo5.jpg",
    alt: "Tatuagem em preto e cinza",
    category: "preto-e-cinza",
  },
  {
    id: 6,
    src: "/assets/tattoo6.jpg",
    alt: "Tatuagem em preto e cinza",
    category: "preto-e-cinza",
  },
  // Realismo
  {
    id: 7,
    src: "/assets/realismo1.jpg",
    alt: "Tatuagem realista",
    category: "realismo",
  },
  {
    id: 8,
    src: "/assets/realismo2.jpg",
    alt: "Tatuagem realista",
    category: "realismo",
  },
  {
    id: 9,
    src: "/assets/realismo3.jpg",
    alt: "Tatuagem realista",
    category: "realismo",
  },
  {
    id: 10,
    src: "/assets/realismo4.jpg",
    alt: "Tatuagem realista",
    category: "realismo",
  },
  // Colorido
  {
    id: 11,
    src: "/assets/colorido1.jpg",
    alt: "Tatuagem colorida",
    category: "colorido",
  },
  {
    id: 12,
    src: "/assets/colorido2.jpg",
    alt: "Tatuagem colorida",
    category: "colorido",
  },
  {
    id: 13,
    src: "/assets/colorido3.jpg",
    alt: "Tatuagem colorida",
    category: "colorido",
  }
]

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("todos")
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string
    alt: string
  }>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  const handleScroll = useCallback(() => {
    if (!mounted) return

    const element = document.getElementById("galeria")
    if (element) {
      const position = element.getBoundingClientRect()
      if (position.top < window.innerHeight * 0.75) {
        setIsVisible(true)
      }
    }
  }, [mounted])

  useEffect(() => {
    setMounted(true)
    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  const filteredImages = activeFilter === "todos" 
    ? [
        ...galleryImages.filter(img => img.category === "preto-e-cinza").slice(0, 3),
        ...galleryImages.filter(img => img.category === "realismo").slice(0, 3),
        ...galleryImages.filter(img => img.category === "colorido").slice(0, 3)
      ]
    : galleryImages.filter((img) => img.category === activeFilter)

  return (
    <section id="galeria" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl text-lightText md:text-4xl font-bold mb-16 text-center transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          MEU <span className="text-red-500">PORTFÓLIO</span>
        </h2>

        <div
          className={`flex justify-center mb-12 transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveFilter("todos")}
              className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeFilter === "todos" ? "bg-red-500 text-white" : "bg-zinc-800 text-white hover:bg-zinc-700"
              }`}
            >
              Todos
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer group transition-all duration-700 transform ${
                isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
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

        <div
          className={`mt-12 text-center transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <a
            href="https://www.instagram.com/martin.vitabar.tattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-500 hover:text-white hover:bg-red-500 px-4 py-2 rounded-full transition-all duration-300"
          >
            <Instagram size={20} />
            <span>Ver mais trabalhos no Instagram</span>
          </a>
        </div>
      </div>
    </section>
  )
}
