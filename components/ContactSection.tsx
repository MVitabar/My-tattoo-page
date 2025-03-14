import { useState, useEffect } from "react";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./contact-form";
import Link from "next/link";
import MapModal from "./MapModal";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("contato");
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
    <section id="contato" className="relative w-full py-20 bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4 max-w-full">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-16 text-center text-lightText transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          AGENDE SUA <span className="text-red-500">SESSÃO</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl text-lightText font-bold mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              {/* Location link stays as anchor for smooth scroll */}
              <button 
                onClick={() => setIsMapOpen(true)}
                className="flex items-start gap-4 group hover:opacity-80 transition-opacity w-full text-left"
              >
                <MapPin className="text-red-500 mt-1 group-hover:animate-bounce" />
                <div>
                  <h4 className="font-bold text-lightText ">Localização</h4>
                  <p className="text-lightText">Rua Melvin Jones, 50 - Siderópolis, SC</p>
                </div>
              </button>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/5553999202033" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:opacity-80 transition-opacity"
              >
                <Phone className="text-red-500 mt-1 group-hover:animate-bounce" />
                <div>
                  <h4 className="font-bold text-lightText ">Telefone</h4>
                  <p className="text-lightText">(53) 99920-2033</p>
                </div>
              </a>

              {/* Email - Link to contact page */}
              <Link 
                href="/contact"
                className="flex items-start gap-4 group hover:opacity-80 transition-opacity"
              >
                <Mail className="text-red-500 mt-1 group-hover:animate-bounce" />
                <div>
                  <h4 className="font-bold text-lightText ">Email</h4>
                  <p className="text-lightText">vitabarmartin@gmail.com</p>
                </div>
              </Link>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/martin.vitabar.tattoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:opacity-80 transition-opacity"
              >
                <Instagram className="text-red-500 mt-1 group-hover:animate-bounce" />
                <div>
                  <h4 className="font-bold text-lightText ">Instagram</h4>
                  <p className="text-lightText">@martin.vitabar.tattoo</p>
                </div>
              </a>
            </div>

            <div className="mt-8 text-lightText">
              <h2 className="text-3xl text-lightText md:text-4xl font-bold mb-8 text-center">
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
            <ContactForm />
          </div>
        </div>
      </div>

      <MapModal 
        isOpen={isMapOpen} 
        onClose={() => setIsMapOpen(false)} 
      />

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-3xl text-lightText font-bold mb-8 text-center">
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
  );
}
