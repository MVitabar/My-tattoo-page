'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonHover, buttonTap, scaleIn, fadeIn } from '@/lib/animations';

type FloatingWhatsAppButtonProps = {
  phoneNumber: string;
  message?: string;
  className?: string;
  showLabel?: boolean;
  labelText?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  animationType?: 'pulse' | 'bounce' | 'none';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  buttonColor?: string;
  textColor?: string;
  showOnMobile?: boolean;
};

export function FloatingWhatsAppButton({
  phoneNumber = '5553999202033',
  message = 'Olá! Gostaria de agendar uma sessão de tatuagem.',
  className,
  showLabel = true,
  labelText = 'Agende sua sessão',
  position = 'bottom-right',
  animationType = 'pulse',
  size = 'md',
  icon,
  buttonColor = '#25D366',
  textColor = '#FFFFFF',
  showOnMobile = true,
}: FloatingWhatsAppButtonProps) {
  // Formate o número de telefone removendo caracteres não numéricos
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  
  // Crie a URL do WhatsApp
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;

  // Estilos de posicionamiento
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6',
  };

  // Tamaños del botón
  const sizeClasses = {
    sm: 'h-12 w-12 text-lg',
    md: 'h-14 w-14 text-xl',
    lg: 'h-16 w-16 text-2xl',
  };

  // Tamaños del ícono
  const iconSize = {
    sm: 20,
    md: 24,
    lg: 28,
  };

  // Animaciones del botón
  type ButtonAnimationType = 'pulse' | 'bounce' | 'none';
  
  const buttonAnimation: Record<ButtonAnimationType, any> = {
    pulse: {
      scale: 1.1,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 10,
        repeat: Infinity,
        repeatType: 'reverse' as const,
      },
    },
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5, 
        repeat: Infinity,
        repeatType: 'loop' as const,
      } 
    },
    none: {}
  };
  
  // Obtener la animación del botón según el tipo
  const getButtonAnimation = (type: ButtonAnimationType = 'none') => {
    return buttonAnimation[type] || {};
  };

  return (
    <AnimatePresence>
      <motion.div 
        className={cn(
          'fixed z-50 flex items-center gap-3 transition-all duration-300',
          positionClasses[position],
          !showOnMobile && 'hidden md:flex',
          className
        )}
        initial="hidden"
        animate="show"
        variants={fadeIn('up', 1)}
      >
        {showLabel && (
          <motion.div
            variants={fadeIn(position.includes('right') ? 'left' : 'right', 2)}
            className={cn(
              'hidden md:block',
              'px-4 py-2 rounded-full shadow-lg',
              'bg-white dark:bg-gray-800 text-gray-800 dark:text-white',
              'text-sm font-medium whitespace-nowrap',
              'transition-all duration-300',
              'border border-gray-200 dark:border-gray-700',
              'hover:shadow-xl',
              position.includes('right') ? 'mr-2' : 'ml-2'
            )}
            whileHover={{ y: -2 }}
          >
            {labelText}
          </motion.div>
        )}
        
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'relative flex items-center justify-center',
            'rounded-full shadow-xl',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500',
            'transition-all duration-300',
            sizeClasses[size],
            'print:hidden' // Ocultar al imprimir
          )}
          style={{
            backgroundColor: buttonColor,
            color: textColor,
          }}
          aria-label="Enviar mensagem no WhatsApp"
          title="Fale conosco pelo WhatsApp"
          whileHover={buttonHover}
          whileTap={buttonTap}
          variants={scaleIn(0.5)}
          {...(animationType !== 'none' ? buttonAnimation[animationType] : {})}
        >
          {icon || <MessageCircle size={iconSize[size]} />}
          
          {/* Efecto de pulso */}
          {animationType === 'pulse' && (
            <motion.span
              className="absolute inset-0 -z-10 rounded-full opacity-0"
              style={{ backgroundColor: buttonColor }}
              initial={{ opacity: 0.7, scale: 1 }}
              animate={{ 
                opacity: 0, 
                scale: 1.5,
                transition: { 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: 'loop' as const,
                } 
              }}
            />
          )}
          
          {/* Contador de notificaciones (opcional) */}
          <motion.span 
            className={cn(
              'absolute -top-1 -right-1',
              'flex items-center justify-center',
              'h-5 w-5 md:h-6 md:w-6',
              'bg-red-500 text-white',
              'rounded-full text-xs font-bold',
              'border-2 border-white dark:border-gray-900'
            )}
            initial="hidden"
            animate="show"
            variants={scaleIn(1)}
          >
            1
          </motion.span>
        </motion.a>
      </motion.div>
    </AnimatePresence>
  );
}

export default FloatingWhatsAppButton;
