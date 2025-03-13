import { useState, useEffect } from "react";
import Image from "next/image";

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("servicos");
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

  const services = [
    {
      title: "Designs Personalizados",
      description: "Criações únicas adaptadas às suas ideias e preferências.",
      icon: "https://images.unsplash.com/photo-1581299894341-367e6517569c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Realismo",
      description: "Tatuagens com um nível de detalhe e precisão fotográfica.",
      icon: "https://images.unsplash.com/photo-1612459284970-e8f84c153d61?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Blackwork",
      description: "Designs impactantes utilizando apenas tinta preta.",
      icon: "https://images.unsplash.com/photo-1542727365-19732a80dcfd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neotradicional",
      description: "Uma interpretação moderna do estilo tradicional com cores vibrantes.",
      icon: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-16 text-center text-lightText transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          MEUS <span className="text-red-500">SERVIÇOS</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 mb-4 mx-auto overflow-hidden rounded-full">
                <Image
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-gray-300">{service.title}</h3>
              <p className="text-lightText text-center">{service.description}</p>

            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3
            className={`text-2xl font-bold mb-6 transition-all duration-700 transform text-gray-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Processo de Trabalho
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`bg-zinc-900 p-6 rounded-lg transition-all duration-700 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
                <span className="font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-300">Consulta</h4>
              <p className="text-lightText">Discutimos suas ideias e expectativas para criar o design perfeito.</p>

            </div>
            <div
              className={`bg-zinc-900 p-6 rounded-lg transition-all duration-700 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
                <span className="font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-300">Design</h4>
              <p className="text-lightText">Crio um esboço personalizado baseado em nossas conversas.</p>

            </div>
            <div
              className={`bg-zinc-900 p-6 rounded-lg transition-all duration-700 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
                <span className="font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-300">Sessão</h4>
              <p className="text-lightText">Realizo a tatuagem com máxima atenção aos detalhes e conforto.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
