import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent, RefObject } from "react";
import {
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

/**
 * CSS 3D tilt — pure transform + Framer Motion, no R3F.
 *
 * Disabled automatically on:
 *   - touch / coarse-pointer devices  (hover: hover) and (pointer: fine)
 *   - prefers-reduced-motion: reduce
 *   - explicit `disabled` flag (e.g., card not focused in a stack)
 *
 * Usage pattern: attach `ref` and event handlers to the card root, set
 * `perspective` on that root via inline style, and bind `rotateX/rotateY`
 * to a motion.div wrapping the card content. The glossy highlight uses
 * `highlightX/Y/Opacity` with `useMotionTemplate` for a radial-gradient bg.
 */

interface UseTiltOptions {
  /** Max rotation per axis, degrees. Default 8 (subtle). */
  maxRotate?: number;
  /** CSS perspective in px on the parent. Default 1000. */
  perspective?: number;
  springStiffness?: number;
  springDamping?: number;
  /** External disable — keeps motion values pinned to 0 and no-ops handlers. */
  disabled?: boolean;
}

interface UseTiltReturn {
  ref: RefObject<HTMLElement | null>;
  perspective: number;
  enabled: boolean;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  highlightX: MotionValue<string>;
  highlightY: MotionValue<string>;
  highlightOpacity: MotionValue<number>;
  onMouseMove: (e: MouseEvent<HTMLElement>) => void;
  onMouseLeave: () => void;
}

export const useTilt = (options: UseTiltOptions = {}): UseTiltReturn => {
  const {
    maxRotate = 8,
    perspective = 1000,
    springStiffness = 250,
    springDamping = 22,
    disabled = false,
  } = options;

  const ref = useRef<HTMLElement | null>(null);
  const [capable, setCapable] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const hover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setCapable(hover.matches && !reduce.matches);
    update();

    hover.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      hover.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  const enabled = capable && !disabled;

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const opacity = useMotionValue(0);

  const springConfig = {
    stiffness: springStiffness,
    damping: springDamping,
    mass: 0.6,
  };
  const sx = useSpring(px, springConfig);
  const sy = useSpring(py, springConfig);
  const sOpacity = useSpring(opacity, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(sy, (v) => -v * maxRotate);
  const rotateY = useTransform(sx, (v) => v * maxRotate);
  const highlightX = useTransform(sx, (v) => `${50 + v * 40}%`);
  const highlightY = useTransform(sy, (v) => `${50 + v * 40}%`);

  // Recenter when disabled toggles on (e.g., card loses focus)
  useEffect(() => {
    if (!enabled) {
      px.set(0);
      py.set(0);
      opacity.set(0);
    }
  }, [enabled, px, py, opacity]);

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (!enabled || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      px.set(nx);
      py.set(ny);
      opacity.set(1);
    },
    [enabled, px, py, opacity]
  );

  const onMouseLeave = useCallback(() => {
    px.set(0);
    py.set(0);
    opacity.set(0);
  }, [px, py, opacity]);

  return {
    ref,
    perspective,
    enabled,
    rotateX,
    rotateY,
    highlightX,
    highlightY,
    highlightOpacity: sOpacity,
    onMouseMove,
    onMouseLeave,
  };
};
