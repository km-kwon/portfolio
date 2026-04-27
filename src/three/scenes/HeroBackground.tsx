import React, { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useThemeColors } from "../useThemeColors";
import { fragmentShader, vertexShader } from "../shaders/gradientMesh.glsl";

/**
 * Fullscreen gradient mesh for the Hero background.
 *
 * Must be mounted inside a <Canvas> (uses useFrame / useThree).
 * The plane is a [2,2] NDC quad — vertex shader bypasses camera transforms,
 * so this component is camera-agnostic.
 *
 * Uniform identity contract: useMemo deps reference the stable refs returned
 * by useThemeColors (their `.current` THREE.Color is mutated in place each
 * frame via lerp). Re-creating `uniforms` would break the lerp link.
 */
const HeroBackground: React.FC = () => {
  const colors = useThemeColors();
  const size = useThree((s) => s.size);
  const mouseTargetRef = useRef(new THREE.Vector2(0.5, 0.5));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uAspect: { value: size.width / Math.max(size.height, 1) },
      uBg: { value: colors.bg.current },
      uAccent: { value: colors.accent.current },
      uPrimary: { value: colors.primary.current },
    }),
    // refs from useThemeColors are stable across renders; deps included for
    // lint correctness but useMemo effectively runs once.
    [colors.bg, colors.accent, colors.primary, size.width, size.height]
  );

  // Keep aspect uniform live without re-creating the uniforms object
  useEffect(() => {
    uniforms.uAspect.value = size.width / Math.max(size.height, 1);
  }, [size.width, size.height, uniforms]);

  // Window-level pointer tracking — wrapper has pointer-events:none so the
  // canvas itself never receives events.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = (e: MouseEvent) => {
      mouseTargetRef.current.set(
        e.clientX / window.innerWidth,
        1.0 - e.clientY / window.innerHeight
      );
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  useFrame((_, delta) => {
    // Cap delta so a hidden tab doesn't produce a huge time jump on resume
    const dt = Math.min(delta, 0.1);
    uniforms.uTime.value += dt;
    uniforms.uMouse.value.lerp(mouseTargetRef.current, 0.04);
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};

export default HeroBackground;
