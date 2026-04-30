import type { PointerEvent } from "react";
import {
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

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export const useTilt = () => {
  const prefersReducedMotion = useReducedMotion();
  const rotateXTarget = useMotionValue(0);
  const rotateYTarget = useMotionValue(0);

  const rotateX = useSpring(rotateXTarget, SPRING);
  const rotateY = useSpring(rotateYTarget, SPRING);

  const resetTilt = () => {
    rotateXTarget.set(0);
    rotateYTarget.set(0);
  };

  const updatePointerPosition = (event: PointerEvent<HTMLElement>) => {
    if (prefersReducedMotion || !canUsePointerTilt()) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;

    rotateXTarget.set(-clamp(y, -1, 1) * MAX_ROTATE);
    rotateYTarget.set(clamp(x, -1, 1) * MAX_ROTATE);
  };

  return {
    tiltHandlers: {
      onPointerEnter: updatePointerPosition,
      onPointerMove: updatePointerPosition,
      onPointerLeave: resetTilt,
    },
    tiltStyle: prefersReducedMotion
      ? {}
      : {
          rotateX,
          rotateY,
        },
    highlightStyle: {
      background:
        "linear-gradient(115deg, transparent 0%, transparent 40%, rgba(255,255,255,0.075) 48%, rgba(32,201,151,0.055) 54%, transparent 68%)",
    },
    isTiltDisabled: prefersReducedMotion,
  };
};
