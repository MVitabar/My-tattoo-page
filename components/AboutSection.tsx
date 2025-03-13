import Image from "next/image";
import { useState, useEffect } from "react";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import ContactForm from "./contact-form";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("sobre-mim");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar al cargar

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="sobre-mim" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl text-lightText md:text-4xl font-bold mb-16 text-center transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          SOBRE <span className="text-red-500">MIM</span>
        </h2>

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
            <h3 className="text-2xl font-bold mb-4">Martin Vitabar</h3>
            <p className="text-zinc-300 mb-6">
              Com mais de 10 anos de experiência na arte da tatuagem, sou especializado em estilos realistas, blackwork
              e neotradicional. Cada design que crio é único e personalizado, adaptado às histórias e personalidades dos
              meus clientes.
            </p>
            <p className="text-zinc-300 mb-6">
              Minha paixão pela arte começou desde cedo, e encontrei na tatuagem a forma perfeita de expressar minha
              criatividade enquanto crio peças significativas que meus clientes levarão para sempre.
            </p>
            <p className="text-lightText mb-8">

              Trabalho com os mais altos padrões de higiene e segurança, utilizando equipamentos de primeira qualidade e
              técnicas avançadas para garantir resultados excepcionais.
            </p>

            <div className="flex gap-4 text-lightText">
              <a
                href="https://www.instagram.com/martin.vitabar.tattoo/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-800 hover:bg-red-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={24} />
              </a>
              <a
                href="mailto:contato@martinvitabar.com"
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
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
