'use client';

import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function WhatsAppButton() {
  const phoneNumber = '5553999202033';
  const message = 'Olá! Gostaria de agendar uma sessão de tatuagem.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg',
        'transform-gpu transition-all duration-300 hover:scale-110 hover:bg-green-600',
        'focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
        'md:bottom-8 md:right-8 md:h-16 md:w-16',
        'print:hidden' // Ocultar al imprimir
      )}
      aria-label="Enviar mensagem no WhatsApp"
      title="Fale conosco pelo WhatsApp"
    >
      <Phone className="h-6 w-6 md:h-7 md:w-7" />
      <span className="sr-only">WhatsApp</span>
      
      {/* Efecto de pulso */}
      <span className="absolute -z-10 h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
    </a>
  );
}
