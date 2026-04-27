import React from "react";

/**
 * Static CSS fallback for HeroBackground.
 * Used by SceneCanvas when prefers-reduced-motion is set, or when 3D is
 * disabled via VITE_ENABLE_3D=false. Pure CSS — zero JS/GPU cost.
 *
 * Theme switching is handled automatically since the radial-gradients reference
 * design tokens (`--accent-subtle`, `--bg-soft`, `--bg`) which already swap
 * via the html[data-theme="light"] selector.
 */
const HeroFallback: React.FC = () => (
  <div
    aria-hidden
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(ellipse 60% 50% at 25% 20%, var(--accent-subtle), transparent 60%)," +
        "radial-gradient(ellipse 70% 60% at 80% 90%, var(--bg-soft), transparent 70%)",
    }}
  />
);

export default HeroFallback;
