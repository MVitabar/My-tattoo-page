"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContatoPage() {
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
            src="https://images.unsplash.com/photo-1581299894341-367e6517569c?q=80&w=1974&auto=format&fit=crop"
            alt="Contato"
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
              ENTRE EM <span className="text-red-500">CONTATO</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-8">
              Agende sua sessão ou tire suas dúvidas sobre tatuagens
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              className={`transition-all duration-700 transform ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl font-bold mb-8">Informações de Contato</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <MapPin className="text-red-500 mt-1 group-hover:animate-bounce" size={24} />
                  <div>
                    <h3 className="font-bold text-xl">Localização</h3>
                    <p className="text-zinc-300">Siderópolis, Santa Catarina</p>
                    <p className="text-zinc-400 text-sm italic">Estúdio privado</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <a
                    href="https://wa.me/5553999202033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group hover:text-red-500 transition-colors"
                  >
                    <Phone className="text-red-500 mt-1 group-hover:animate-bounce" size={24} />
                    <div>
                      <h3 className="font-bold text-xl">WhatsApp</h3>
                      <p className="text-zinc-300">+55 53 99920-2033</p>
                      <p className="text-zinc-400 text-sm">Clique para iniciar uma conversa</p>
                    </div>
                  </a>
                </div>

                <div className="flex items-start gap-4 group">
                  <a
                    href="mailto:vitabarmartin@gmail.com"
                    className="flex items-start gap-4 group hover:text-red-500 transition-colors"
                  >
                    <Mail className="text-red-500 mt-1 group-hover:animate-bounce" size={24} />
                    <div>
                      <h3 className="font-bold text-xl">Email</h3>
                      <p className="text-zinc-300">vitabarmartin@gmail.com</p>
                      <p className="text-zinc-400 text-sm">Respondo em até 24 horas</p>
                    </div>
                  </a>
                </div>

                <div className="flex items-start gap-4 group">
                  <a
                    href="https://www.instagram.com/martin.vitabar.tattoo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group hover:text-red-500 transition-colors"
                  >
                    <Instagram className="text-red-500 mt-1 group-hover:animate-bounce" size={24} />
                    <div>
                      <h3 className="font-bold text-xl">Instagram</h3>
                      <p className="text-zinc-300">@martin.vitabar.tattoo</p>
                      <p className="text-zinc-400 text-sm">Siga para ver trabalhos recentes</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-8 text-lightText">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                HORÁRIO DE <span className="text-red-500">ATENDIMENTO</span>
              </h2>
              <div className="space-y-2 p-4">
                <p className="text-lightText text-lg md:text-xl leading-relaxed text-center">
                  Trabalhamos exclusivamente com agendamento prévio para garantir um atendimento personalizado 
                  e dedicado a cada cliente.
                </p>
              </div>
            </div>
            </div>

            <div
              className={`transition-all duration-700 delay-300 transform ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl font-bold mb-8">Agende sua Sessão</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            COMO <span className="text-red-500">CHEGAR</span>
          </h2>
          <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1238206612998!2d-49.42681252770116!3d-28.59606201187244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95219c3c695c9ff1%3A0x48b6f889aebf7cb8!2sR.%20Melvin%20Jones%2C%2050%2C%20Sider%C3%B3polis%20-%20SC%2C%2088860-000!5e0!3m2!1ses-419!2sbr!4v1741957465065!5m2!1ses-419!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
          <p className="text-center text-zinc-300 mt-4">Rua Melvin Jones, 50 - Siderópolis, SC</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">
            DÚVIDAS <span className="text-red-500">FREQUENTES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Como agendar uma sessão?</h3>
              <p className="text-zinc-300">
                Você pode agendar através do formulário nesta página, pelo WhatsApp ou Instagram. Respondo o mais breve
                possível para confirmar sua data. pelo WhatsApp ou Instagram. Respondo o mais breve possível para
                confirmar sua data.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">É necessário pagar adiantado?</h3>
              <p className="text-zinc-300">
                Sim, solicito um depósito para reservar sua data. Este valor é descontado do preço final da tatuagem e
                garante seu compromisso com o agendamento.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Posso levar acompanhante?</h3>
              <p className="text-zinc-300">
                Sim, você pode trazer um acompanhante. Por questões de espaço e para manter um ambiente tranquilo,
                limitamos a um acompanhante por cliente.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Quais formas de pagamento?</h3>
              <p className="text-zinc-300">
                Aceito pagamentos em dinheiro, PIX, transferência bancária e cartões de crédito/débito. Também ofereço
                opções de parcelamento para trabalhos maiores.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

