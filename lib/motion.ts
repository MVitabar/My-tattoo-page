import { Variants, Transition } from 'framer-motion';

// Configuración de transiciones comunes
export const transition: Transition = {
  type: 'spring',
  damping: 20,
  stiffness: 100,
  mass: 0.5
};

// Animaciones de entrada

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay = 0): Variants => ({
  hidden: {
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      ...transition,
      delay: delay * 0.1,
    },
  },
});

export const slideIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay = 0): Variants => ({
  hidden: {
    y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    x: direction === 'left' ? '100%' : direction === 'right' ? '-100%' : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      ...transition,
      delay: delay * 0.1,
    },
  },
});

export const zoomIn = (delay = 0): Variants => ({
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ...transition,
      delay: delay * 0.1,
    },
  },
});

// Animaciones de escalado

export const scaleIn = (delay = 0): Variants => ({
  hidden: { scale: 0.9, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ...transition,
      delay: delay * 0.1,
    },
  },
});

// Animaciones de rotación

export const rotateIn = (delay = 0): Variants => ({
  hidden: { rotate: -180, opacity: 0 },
  show: {
    rotate: 0,
    opacity: 1,
    transition: {
      ...transition,
      delay: delay * 0.1,
    },
  },
});

// Animaciones de escalonado

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.1): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Animaciones de texto

export const textVariant = (delay = 0): Variants => ({
  hidden: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay: delay * 0.1,
    },
  },
});

// Animaciones de botones

export const buttonHover = {
  scale: 1.05,
  transition: { ...transition, type: 'spring', stiffness: 400, damping: 10 },
};

export const buttonTap = {
  scale: 0.95,
  transition: { ...transition, type: 'spring', stiffness: 400, damping: 10 },
};

// Animaciones de menú

export const menuSlide = {
  initial: { x: '100%' },
  enter: { 
    x: '0', 
    transition: { 
      ...transition,
      type: 'spring',
      stiffness: 300,
      damping: 30,
    } 
  },
  exit: { 
    x: '100%', 
    transition: { 
      ...transition,
      type: 'spring',
      stiffness: 300,
      damping: 30,
    } 
  },
};

// Animaciones de elementos de lista

export const listItem = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ...transition,
      delay: delay * 0.1,
    },
  },
});

// Animaciones de tarjetas

export const cardHover = {
  y: -10,
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  transition: {
    ...transition,
    type: 'spring',
    stiffness: 300,
    damping: 15,
  },
};

// Animaciones de carga

export const loadingContainer = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const loadingCircle = {
  start: {
    y: '0%',
  },
  end: {
    y: '100%',
  },
};

// Efecto de máquina de escribir
export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: i * 0.1,
    },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

// Exportar todas las animaciones
export default {
  fadeIn,
  slideIn,
  zoomIn,
  scaleIn,
  rotateIn,
  staggerContainer,
  textVariant,
  buttonHover,
  buttonTap,
  menuSlide,
  listItem,
  cardHover,
  loadingContainer,
  loadingCircle,
  textContainer,
  textVariant2,
  transition,
};
