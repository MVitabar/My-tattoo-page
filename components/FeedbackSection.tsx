import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Image from "next/image";
import AutoplayPlugin from 'embla-carousel-autoplay';

interface Feedback {
  name: string;
  message: string;
  rating: number;
  location: string;
  image: string;
}

export default function FeedbackSection() {
  const [isVisible, setIsVisible] = useState(false);

  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    rootNode: (emblaRoot: any) => emblaRoot.parentElement,
  };

  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      containScroll: 'trimSnaps',
      slidesToScroll: 1,
      align: 'center',
      duration: 50, // Smooth transition duration
    }, 
    [AutoplayPlugin(autoplayOptions)]
  );

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("feedbacks");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const feedbacks: Feedback[] = [
    {
      name: "João Silva",
      message: "Trabalho incrível! O Martin é muito talentoso e profissional. A tatuagem ficou exatamente como eu queria.",
      rating: 5,
      location: "Criciúma, SC",
      image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=150&h=150&fit=crop"
    },
    {
      name: "Maria Santos",
      message: "Ambiente super acolhedor e higiênico. O resultado superou minhas expectativas!",
      rating: 5,
      location: "Siderópolis, SC",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "Pedro Oliveira",
      message: "Excelente atendimento e trabalho impecável. Recomendo fortemente!",
      rating: 5,
      location: "Içara, SC",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      name: "Ana Costa",
      message: "Profissionalismo e dedicação em cada detalhe. Já estou planejando a próxima!",
      rating: 5,
      location: "Urussanga, SC",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop"
    },
    {
      name: "Lucas Mendes",
      message: "O melhor trabalho em realismo que já vi. Valeu muito a pena!",
      rating: 5,
      location: "Nova Veneza, SC",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Carolina Lima",
      message: "Muito satisfeita com o resultado. O Martin é muito atencioso e perfeccionista.",
      rating: 5,
      location: "Cocal do Sul, SC",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      name: "Rafael Santos",
      message: "Trabalho excepcional em preto e cinza. Superou todas as expectativas!",
      rating: 5,
      location: "Morro da Fumaça, SC",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
    },
    {
      name: "Juliana Pereira",
      message: "Arte incrível e atendimento impecável. Recomendo demais!",
      rating: 5,
      location: "Forquilhinha, SC",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
    }
  ];

  return (
    <section id="feedbacks" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-lightText md:text-4xl font-bold mb-16 text-center">
          O QUE NOSSOS <span className="text-red-500">CLIENTES DIZEM</span>
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {[...feedbacks, ...feedbacks].map((feedback, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <div
                    className={`bg-black p-6 rounded-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/20 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={feedback.image}
                          alt={feedback.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          {Array.from({ length: feedback.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-lightText mb-4 italic">"{feedback.message}"</p>
                    <div className="mt-auto">
                      <p className="font-bold text-white">{feedback.name}</p>
                      <p className="text-sm text-zinc-400">{feedback.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}