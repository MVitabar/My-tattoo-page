import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl text-white font-bold">
              MARTIN VITABAR
              <span className="text-red-500 ml-1">TATTOO</span>
            </h2>
            <p className="text-zinc-400 mt-2">Arte que permanece na sua pele</p>
          </div>

          <div className="flex gap-4 text-lightText">
            <a
              href="https://www.instagram.com/martin.vitabar.tattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 hover:bg-red-500 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:contato@martinvitabar.com"
              className="bg-zinc-800 hover:bg-red-500 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+123456789"
              className="bg-zinc-800 hover:bg-red-500 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-lightText text-sm">
          <p>© {new Date().getFullYear()} Martin Vitabar Tattoo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
