import React from "react";
import SceneCanvas from "../SceneCanvas";
import HeroFallback from "./HeroFallback";
import PortfolioWorld from "./PortfolioWorld";

const PortfolioWorldCanvas: React.FC = () => (
  <SceneCanvas
    className="absolute inset-0 h-full w-full"
    fallback={<HeroFallback />}
  >
    <PortfolioWorld />
  </SceneCanvas>
);

export default PortfolioWorldCanvas;
