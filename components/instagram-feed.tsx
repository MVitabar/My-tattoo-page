"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"

interface InstagramPost {
  id: string
  media_url: string
  permalink: string
  caption?: string
  thumbnail_url?: string
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Detectar cuando el componente está en el viewport
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("instagram-feed")
      if (element) {
        const position = element.getBoundingClientRect()
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Verificar al cargar

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cargar imágenes de Unsplash en lugar de Instagram
  useEffect(() => {
    // Simulamos el carregamento de dados do Instagram com imagens do Unsplash
    const mockPosts: InstagramPost[] = [
      {
        id: "1",
        media_url: "https://images.unsplash.com/photo-1590246814883-57004d01fae7?q=80&w=2070&auto=format&fit=crop",
        permalink: "https://www.instagram.com/p/C3_Xt-5OIrR/",
        caption: "Tatuagem realista",
      },
      {
        id: "2",
        media_url: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1974&auto=format&fit=crop",
        permalink: "https://www.instagram.com/p/C3_XsYzOXnA/",
        caption: "Design blackwork",
      },
      {
        id: "3",
        media_url: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1974&auto=format&fit=crop",
        permalink: "https://www.instagram.com/p/C3_XrJJOQVl/",
        caption: "Estilo neotradicional",
      },
      {
        id: "4",
        media_url: "https://images.unsplash.com/photo-1542727365-19732a80dcfd?q=80&w=1974&auto=format&fit=crop",
        permalink: "https://www.instagram.com/p/C3_XqBIOdCQ/",
        caption: "Detalhe realista",
      },
    ]

    // Simulamos um tempo de carregamento
    setTimeout(() => {
      setPosts(mockPosts)
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-4">Não foi possível carregar as publicações do Instagram</p>
        <a
          href="https://www.instagram.com/martin.vitabar.tattoo/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition-colors"
        >
          <Instagram size={20} />
          <span>Visitar Instagram</span>
        </a>
      </div>
    )
  }

  return (
    <div id="instagram-feed" className="mt-12">
      <h3
        className={`text-2xl font-bold mb-6 text-center transition-all duration-700 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        Instagram
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {posts.map((post, index) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative aspect-square overflow-hidden rounded-lg group transition-all duration-700 transform ${
              isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <Image
              src={post.media_url || post.thumbnail_url || "/placeholder.svg"}
              alt={post.caption || "Publicação do Instagram"}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <Instagram size={24} className="text-white mx-auto mb-2" />
                <span className="text-white text-sm bg-red-500/80 px-3 py-1 rounded-full">Ver post</span>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div
        className={`mt-6 text-center transition-all duration-700 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        <a
          href="https://www.instagram.com/martin.vitabar.tattoo/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-red-500 hover:text-white hover:bg-red-500 px-4 py-2 rounded-full transition-all duration-300"
        >
          <Instagram size={20} />
          <span>Ver mais no Instagram</span>
        </a>
      </div>
    </div>
  )
}

