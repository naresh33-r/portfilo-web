import { motion } from "framer-motion";
import { ReactNode } from "react";

type TransitionType = "fade" | "slideUp" | "slideRight" | "scale" | "rotate" | "flip" | "zoom";

const variants: Record<TransitionType, { initial: object; animate: object; exit: object }> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  },
  slideRight: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 60 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  },
  rotate: {
    initial: { opacity: 0, rotate: -3, scale: 0.95 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 3, scale: 0.95 },
  },
  flip: {
    initial: { opacity: 0, rotateY: 10, scale: 0.95 },
    animate: { opacity: 1, rotateY: 0, scale: 1 },
    exit: { opacity: 0, rotateY: -10, scale: 0.95 },
  },
  zoom: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  },
};

interface PageTransitionProps {
  children: ReactNode;
  type?: TransitionType;
}

const PageTransition = ({ children, type = "fade" }: PageTransitionProps) => {
  const v = variants[type];

  return (
    <motion.div
      initial={v.initial as any}
      animate={v.animate as any}
      exit={v.exit as any}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
