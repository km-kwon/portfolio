import React from "react";
import SceneCanvas from "../SceneCanvas";
import HeroBackground from "./HeroBackground";

/**
 * Lazy-load entry point for the Hero 3D scene.
 *
 * Bundle isolation: this file (and everything it transitively imports —
 * three, @react-three/fiber, the shader strings) is intended to be reached
 * ONLY via React.lazy(() => import("./HeroBackgroundCanvas")). That keeps
 * the heavy 3D chunk out of the initial JS payload; the consumer renders
 * HeroFallback synchronously while this chunk loads in the background.
 */
const HeroBackgroundCanvas: React.FC = () => (
  <SceneCanvas
    className="absolute inset-0 w-full h-full"
  >
    <HeroBackground />
  </SceneCanvas>
);

export default HeroBackgroundCanvas;
