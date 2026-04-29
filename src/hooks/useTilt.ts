import type { MouseEvent } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const MAX_ROTATE = 8;
const SPRING = {
  stiffness: 240,
  damping: 24,
  mass: 0.55,
};

const canUsePointerTilt = () => {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
};

export const useTilt = () => {
  const prefersReducedMotion = useReducedMotion();
  const rotateXTarget = useMotionValue(0);
  const rotateYTarget = useMotionValue(0);
  const highlightX = useMotionValue(50);
  const highlightY = useMotionValue(35);

  const rotateX = useSpring(rotateXTarget, SPRING);
  const rotateY = useSpring(rotateYTarget, SPRING);
  const background = useMotionTemplate`radial-gradient(circle at ${highlightX}% ${highlightY}%, rgba(255,255,255,0.34), rgba(255,255,255,0.1) 24%, rgba(255,255,255,0) 58%)`;

  const resetTilt = () => {
    rotateXTarget.set(0);
    rotateYTarget.set(0);
    highlightX.set(50);
    highlightY.set(35);
  };

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion || !canUsePointerTilt()) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;

    rotateXTarget.set(-y * MAX_ROTATE);
    rotateYTarget.set(x * MAX_ROTATE);
    highlightX.set(((x + 1) / 2) * 100);
    highlightY.set(((y + 1) / 2) * 100);
  };

  return {
    tiltHandlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: resetTilt,
    },
    tiltStyle: prefersReducedMotion
      ? {}
      : {
          rotateX,
          rotateY,
        },
    highlightStyle: {
      background,
    },
    isTiltDisabled: prefersReducedMotion,
  };
};
