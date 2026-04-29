import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Theme-aware color refs that smoothly lerp on theme change.
 *
 * Why refs (not state): shader uniforms must be mutated in place. Re-renders
 * don't propagate into a shaderMaterial — the uniform `value` reference must
 * be the same object whose `.r/.g/.b` we update each frame.
 *
 * Usage:
 *   const colors = useThemeColors();           // inside <Canvas> only
 *   const uniforms = useMemo(() => ({
 *     uAccent: { value: colors.accent.current },
 *     uBg:     { value: colors.bg.current },
 *   }), []);
 */

export interface ThemeColorRefs {
  primary: React.MutableRefObject<THREE.Color>;
  accent: React.MutableRefObject<THREE.Color>;
  bg: React.MutableRefObject<THREE.Color>;
}

const FALLBACKS = {
  primary: "#F1F3F5",
  accent: "#20C997",
  bg: "#1A1D23",
} as const;

const readCssColor = (varName: string, fallback: string): string => {
  if (typeof window === "undefined") return fallback;
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
  return raw || fallback;
};

const readTargets = () => ({
  primary: readCssColor("--fg", FALLBACKS.primary),
  accent: readCssColor("--accent", FALLBACKS.accent),
  bg: readCssColor("--bg", FALLBACKS.bg),
});

export const useThemeColors = (lerpFactor = 0.05): ThemeColorRefs => {
  const initial = readTargets();

  const targetPrimary = useRef(new THREE.Color(initial.primary));
  const targetAccent = useRef(new THREE.Color(initial.accent));
  const targetBg = useRef(new THREE.Color(initial.bg));

  const primary = useRef(new THREE.Color(initial.primary));
  const accent = useRef(new THREE.Color(initial.accent));
  const bg = useRef(new THREE.Color(initial.bg));

  useEffect(() => {
    if (typeof window === "undefined") return;

    const update = () => {
      const next = readTargets();
      targetPrimary.current.set(next.primary);
      targetAccent.current.set(next.accent);
      targetBg.current.set(next.bg);

      if (import.meta.env.DEV) {
        console.info("[useThemeColors] target updated", {
          theme: document.documentElement.getAttribute("data-theme") ?? "dark",
          accent: "#" + targetAccent.current.getHexString(),
          bg: "#" + targetBg.current.getHexString(),
        });
      }
    };

    update();

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.attributeName === "data-theme" || m.attributeName === "class") {
          update();
          break;
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  useFrame(() => {
    primary.current.lerp(targetPrimary.current, lerpFactor);
    accent.current.lerp(targetAccent.current, lerpFactor);
    bg.current.lerp(targetBg.current, lerpFactor);
  });

  return { primary, accent, bg };
};
