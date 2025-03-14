import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Logo and Brand Section */}
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo.jpg"
              alt="TOP SECRET TATTOO Logo"
              width={60}
              height={60}
              className="object-contain rounded-full"
            />
            <span className="text-2xl text-lightText font-bold">
              TOP SECRET <span className="text-red-500">TATTOO</span>
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-red-500" />
                <a 
                  href="https://wa.me/5553999202033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors"
                >
                  (53) 99920-2033
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-red-500" />
                <Link 
                  href="/contact"
                  className="hover:text-red-500 transition-colors"
                >
                  vitabarmartin@gmail.com
                </Link>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-red-500" />
                <span>Rua Melvin Jones, 50 - Siderópolis, SC</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="space-y-2">
              <Link href="/" className="block hover:text-red-500 transition-colors">
                Início
              </Link>
              <Link href="/gallery" className="block hover:text-red-500 transition-colors">
                Galeria
              </Link>
              <Link href="/services" className="block hover:text-red-500 transition-colors">
                Serviços
              </Link>
              <Link href="/contact" className="block hover:text-red-500 transition-colors">
                Contato
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/martin.vitabar.tattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} TOP SECRET TATTOO. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
