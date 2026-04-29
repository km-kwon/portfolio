import React, { Suspense, useEffect, useRef, useState } from "react";
import type { ReactNode, CSSProperties } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { CanvasProps } from "@react-three/fiber";

interface SceneCanvasProps {
  children?: ReactNode;
  /** Rendered in place of the canvas when 3D is disabled (reduced-motion, etc). */
  fallback?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Override gl props if a specific scene needs e.g. premultipliedAlpha. */
  gl?: CanvasProps["gl"];
}

const ENABLED_3D = import.meta.env.VITE_ENABLE_3D !== "false";

const useReducedMotion = (): boolean => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
};

const useIsLowEndDevice = (): boolean => {
  const [low] = useState(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const cores = navigator.hardwareConcurrency ?? 8;
    return isMobile || cores < 4;
  });
  return low ?? false;
};

/**
 * Minimal in-canvas FPS watcher — replaces drei's <PerformanceMonitor>
 * to keep the 3D bundle under budget. Samples N consecutive frames; if
 * the rolling average drops below `threshold`, fires once and stops.
 */
const FpsWatcher: React.FC<{
  threshold: number;
  windowSize: number;
  onLow: (fps: number) => void;
}> = ({ threshold, windowSize, onLow }) => {
  const samplesRef = useRef<number[]>([]);
  const firedRef = useRef(false);

  useFrame((_, delta) => {
    if (firedRef.current || delta <= 0) return;
    const fps = 1 / delta;
    const s = samplesRef.current;
    s.push(fps);
    if (s.length > windowSize) s.shift();
    if (s.length === windowSize) {
      const avg = s.reduce((a, b) => a + b, 0) / windowSize;
      if (avg < threshold) {
        firedRef.current = true;
        onLow(avg);
      }
    }
  });

  return null;
};

const SceneCanvas: React.FC<SceneCanvasProps> = ({
  children,
  fallback = null,
  className,
  style,
  gl,
}) => {
  const reducedMotion = useReducedMotion();
  const isLowEnd = useIsLowEndDevice();
  const [dprCeiling, setDprCeiling] = useState<number>(2);

  if (!ENABLED_3D) return null;
  if (reducedMotion) return <>{fallback}</>;

  const dpr: [number, number] = isLowEnd ? [1, 1] : [1, dprCeiling];

  return (
    <div className={className} style={style}>
      <Canvas dpr={dpr} gl={{ antialias: true, alpha: true, ...gl }}>
        <FpsWatcher
          threshold={45}
          windowSize={60}
          onLow={(fps) => {
            if (dprCeiling !== 1) {
              setDprCeiling(1);
              if (import.meta.env.DEV) {
                console.info("[SceneCanvas] avg FPS<45, demoting dpr to [1,1]", { fps });
              }
            }
          }}
        />
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
};

export default SceneCanvas;
