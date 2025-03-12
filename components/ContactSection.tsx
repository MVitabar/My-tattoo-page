import { useState, useEffect } from "react";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./contact-form";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);

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
    <section id="contato" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-16 text-center transition-all duration-700 transform ${
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
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <MapPin className="text-red-500 mt-1 group-hover:animate-bounce" />
                <div>
                  <h4 className="font-bold">Localização</h4>
                  <p className="text-zinc-300">Rua Principal 123, Cidade</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <Phone className="text-red-500 mt-1 group-hover:animate-bounce" />
                <div>
                  <h4 className="font-bold">Telefone</h4>
                  <p className="text-zinc-300">+123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <Mail className="text-red-500 mt-1 group-hover:animate-bounce" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-zinc-300">contato@martinvitabar.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <Instagram className="text-red-500 mt-1 group-hover:animate-bounce" />
                <div>
                  <h4 className="font-bold">Instagram</h4>
                  <p className="text-zinc-300">@martin.vitabar.tattoo</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Horário</h3>
              <div className="space-y-2">
                <div className="flex justify-between hover:bg-zinc-800 p-2 rounded transition-colors">
                  <span>Segunda - Sexta</span>
                  <span>10:00 - 20:00</span>
                </div>
                <div className="flex justify-between hover:bg-zinc-800 p-2 rounded transition-colors">
                  <span>Sábado</span>
                  <span>11:00 - 18:00</span>
                </div>
                <div className="flex justify-between hover:bg-zinc-800 p-2 rounded transition-colors">
                  <span>Domingo</span>
                  <span>Fechado</span>
                </div>
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
    </section>
  );
}
