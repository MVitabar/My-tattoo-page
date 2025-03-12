import { useState, useEffect } from "react";
import { Instagram, Mail, Phone, MapPin, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-2 shadow-lg" : "bg-black/70 backdrop-blur-sm py-4"
      } border-b border-zinc-800`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold tracking-tighter">
            MARTIN VITABAR
            <span className="text-red-500 ml-1">TATTOO</span>
          </h1>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:flex gap-8">
          <a href="#inicio" className="hover:text-red-500 transition-colors relative group">
            Início
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#sobre-mim" className="hover:text-red-500 transition-colors relative group">
            Sobre Mim
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#galeria" className="hover:text-red-500 transition-colors relative group">
            Galeria
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#servicos" className="hover:text-red-500 transition-colors relative group">
            Serviços
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contato" className="hover:text-red-500 transition-colors relative group">
            Contato
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 py-4 animate-fadeIn">
          <nav className="flex flex-col items-center gap-4">
            <a href="#inicio" className="hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Início
            </a>
            <a href="#sobre-mim" className="hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Sobre Mim
            </a>
            <a href="#galeria" className="hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Galeria
            </a>
            <a href="#servicos" className="hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Serviços
            </a>
            <a href="#contato" className="hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
