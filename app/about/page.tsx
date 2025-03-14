"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Instagram, Mail, Phone, Award, Clock, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SobrePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/profile.png"
            alt="Martin Vitabar Tatuador"
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
              SOBRE <span className="text-red-500">MIM</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              className={`relative h-[500px] rounded-lg overflow-hidden transition-all duration-700 transform ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <Image
                src="/assets/profile.png"
                alt="Martin Vitabar Tatuador"
                fill
                className="object-cover"
              />
            </div>

            <div
              className={`transition-all duration-700 delay-300 transform ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl font-bold mb-6">Martin Vitabar</h2>
              <p className="text-zinc-300 mb-6">
                Com mais de 10 anos de experiência na arte da tatuagem, sou especializado em estilos realistas,
                blackwork e neotradicional. Cada design que crio é único e personalizado, adaptado às histórias e
                personalidades dos meus clientes.
              </p>
              <p className="text-zinc-300 mb-6">
                Minha paixão pela arte começou desde cedo, e encontrei na tatuagem a forma perfeita de expressar minha
                criatividade enquanto crio peças significativas que meus clientes levarão para sempre.
              </p>
              <p className="text-zinc-300 mb-8">
                Trabalho com os mais altos padrões de higiene e segurança, utilizando equipamentos de primeira qualidade
                e técnicas avançadas para garantir resultados excepcionais.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/martin.vitabar.tattoo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-800 hover:bg-red-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="mailto:vitabarmartin@gmail.com"
                  className="bg-zinc-800 hover:bg-red-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://wa.me/5553999202033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-800 hover:bg-red-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Phone size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">
            MINHA <span className="text-red-500">JORNADA</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">2010</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Início da Carreira</h3>
                  <p className="text-zinc-300">
                    Comecei minha jornada como aprendiz em um estúdio local, onde aprendi as técnicas fundamentais da
                    tatuagem.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">2013</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Especialização em Realismo</h3>
                  <p className="text-zinc-300">
                    Participei de workshops com artistas renomados e me especializei em técnicas de tatuagem realista.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">2016</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Estúdio Próprio</h3>
                  <p className="text-zinc-300">
                    Abri meu próprio estúdio, criando um espaço onde pudesse expressar minha arte com total liberdade
                    criativa.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">2020</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reconhecimento Internacional</h3>
                  <p className="text-zinc-300">
                    Participei de convenções internacionais de tatuagem e tive meu trabalho publicado em revistas
                    especializadas.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/assets/realismo1.jpg"
                  alt="Trabalho de tatuagem realista"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/assets/realismo2.jpg"
                  alt="Trabalho de tatuagem blackwork"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/assets/realismo3.jpg"
                  alt="Trabalho de tatuagem neotradicional"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/assets/realismo4.jpg"  
                  alt="Trabalho de tatuagem detalhada"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">
            MEUS <span className="text-red-500">VALORES</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/20">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Qualidade</h3>
              <p className="text-zinc-300 text-center">
                Compromisso com a excelência em cada traço, garantindo resultados excepcionais.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/20">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Personalização</h3>
              <p className="text-zinc-300 text-center">
                Cada tatuagem é única, criada especificamente para refletir a personalidade do cliente.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/20">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Criatividade</h3>
              <p className="text-zinc-300 text-center">
                Abordagem inovadora para transformar ideias em arte permanente na pele.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg hover:bg-zinc-700 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/20">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Dedicação</h3>
              <p className="text-zinc-300 text-center">
                Tempo e atenção necessários para criar cada peça com o máximo de detalhe e cuidado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            PRONTO PARA <span className="text-red-500">COMEÇAR?</span>
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto mb-8">
            Se você está pensando em fazer uma tatuagem, entre em contato para discutirmos suas ideias e criarmos algo
            único juntos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-white">
              <Link href="/contact">Agende sua sessão</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-zinc-800 hover:bg-zinc-700 text-white border-2 border-red-500 hover:border-red-600 transition-colors"
            >
              <Link href="/gallery">Ver portfólio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

