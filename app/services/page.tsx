"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicosPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      title: "Realismo",
      description:
        "Especializado em criar tatuagens com um nível de detalhe e precisão fotográfica, perfeitas para retratos e elementos da natureza.",
      image: "/assets/realismo1.jpg",
      features: [
        "Alta definição de detalhes",
        "Sombreamento suave e gradual",
        "Perfeito para retratos e animais",
        "Técnicas avançadas de profundidade",
      ],
    },
    {
      title: "Preto e Cinza",
      description:
        "Designs impactantes utilizando variações de preto e cinza, criando profundidade e contraste únicos.",
      image: "/assets/tattoo1.jpg",
      features: [
        "Linhas precisas e definidas",
        "Sombreamento detalhado",
        "Contrastes fortes",
        "Designs duradouros",
      ],
    },
    {
      title: "Colorido",
      description:
        "Tatuagens vibrantes e expressivas com uma paleta de cores rica e diversificada.",
      image: "/assets/colorido2.jpg", // Changed from realismo2.jpg to colorido2.jpg
      features: [
        "Cores vibrantes e duradouras",
        "Designs expressivos",
        "Técnicas de saturação avançadas",
        "Versatilidade de estilos",
      ],
    },
    {
      title: "Cover-ups",
      description:
        "Transformação de tatuagens antigas ou indesejadas em novas obras de arte.",
      image: "/assets/realismo4.jpg",
      features: [
        "Avaliação personalizada",
        "Designs estratégicos",
        "Técnicas especiais de cobertura",
        "Transformação completa",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/profile.png"
            alt="Serviços de tatuagem"
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
              MEUS <span className="text-red-500">SERVIÇOS</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-8">
              Conheça os estilos e serviços que ofereço para criar sua tatuagem perfeita
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index !== services.length - 1 ? "mb-24" : ""
              } transition-all duration-700 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-zinc-300 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span className="text-zinc-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
                      <Link href="/contato">Agendar Consulta</Link>
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-zinc-300 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-red-500 mr-2">•</span>
                          <span className="text-zinc-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-red-500 hover:bg-red-600 text-white">
                      <Link href="/contato">Agendar Consulta</Link>
                    </Button>
                  </div>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">
            PROCESSO DE <span className="text-red-500">TRABALHO</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/20">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
                <span className="font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Consulta</h3>
              <p className="text-zinc-300 text-center">
                Conversamos sobre suas ideias, referências e expectativas. Analisamos o local da tatuagem e discutimos
                tamanho, estilo e detalhes do design.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/20">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
                <span className="font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Design</h3>
              <p className="text-zinc-300 text-center">
                Crio um esboço personalizado baseado em nossas conversas. Você pode solicitar ajustes até que o design
                esteja exatamente como deseja.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/20">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
                <span className="font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Sessão</h3>
              <p className="text-zinc-300 text-center">
                Realizo a tatuagem com máxima atenção aos detalhes, garantindo seu conforto durante todo o processo e um
                resultado final excepcional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">
            PERGUNTAS <span className="text-red-500">FREQUENTES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Quanto tempo dura uma sessão?</h3>
              <p className="text-zinc-300">
                O tempo varia conforme o tamanho e complexidade da tatuagem. Sessões típicas duram de 2 a 5 horas, com
                pausas para seu conforto.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Qual o valor de uma tatuagem?</h3>
              <p className="text-zinc-300">
                O preço depende do tamanho, complexidade, localização e tempo necessário. Após a consulta, forneço um
                orçamento detalhado.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Como devo me preparar?</h3>
              <p className="text-zinc-300">
                Descanse bem, alimente-se adequadamente, hidrate-se e evite álcool 24h antes. Use roupas confortáveis
                que permitam acesso à área a ser tatuada.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Como cuidar da tatuagem?</h3>
              <p className="text-zinc-300">
                Forneço instruções detalhadas de cuidados pós-tatuagem, incluindo limpeza, hidratação e proteção solar
                para garantir a melhor cicatrização.
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
            Entre em contato para agendar sua consulta e transformar suas ideias em arte na pele
          </p>
          <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-white">
            <Link href="/contact">Agende sua sessão</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

