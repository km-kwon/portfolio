import React, { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useThemeColors } from "../useThemeColors";
import { fragmentShader, vertexShader } from "../shaders/gradientMesh.glsl";

const panelConfigs = [
  {
    position: [1.35, 0.42, 0.28],
    rotation: [0.14, -0.38, 0.04],
    scale: [1.25, 0.62, 1],
  },
  {
    position: [0.92, -0.2, 0.18],
    rotation: [-0.08, -0.22, -0.02],
    scale: [1.0, 0.5, 1],
  },
  {
    position: [1.72, -0.48, 0.08],
    rotation: [0.08, -0.5, 0.08],
    scale: [0.78, 0.38, 1],
  },
] as const;

const nodePositions = [
  [-1.05, 0.48, 0.08],
  [-0.46, 0.1, 0.16],
  [0.08, 0.35, 0.12],
  [0.58, -0.08, 0.22],
  [1.05, 0.18, 0.18],
  [1.58, -0.24, 0.12],
] as const;

const dataLinePoints = nodePositions.map(([x, y, z]) => new THREE.Vector3(x, y, z));

const FloatingPanel: React.FC<{
  position: readonly [number, number, number];
  rotation: readonly [number, number, number];
  scale: readonly [number, number, number];
  index: number;
}> = ({ position, rotation, scale, index }) => {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * 0.55 + index) * 0.035;
    ref.current.rotation.z = rotation[2] + Math.sin(t * 0.35 + index) * 0.018;
  });

  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      <mesh renderOrder={3}>
        <planeGeometry args={[1.45, 0.82]} />
        <meshBasicMaterial
          color="#1f2937"
          transparent
          opacity={0.28}
          depthWrite={false}
          depthTest={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <lineSegments renderOrder={4}>
        <edgesGeometry args={[new THREE.PlaneGeometry(1.45, 0.82)]} />
        <lineBasicMaterial
          color="#20c997"
          transparent
          opacity={0.42}
          depthWrite={false}
          depthTest={false}
        />
      </lineSegments>
      {[0, 1, 2].map((row) => (
        <mesh key={row} position={[-0.18 + row * 0.18, 0.16 - row * 0.16, 0.01]} renderOrder={5}>
          <boxGeometry args={[0.58 - row * 0.08, 0.018, 0.01]} />
          <meshBasicMaterial
            color={row === 0 ? "#38d9a9" : "#94a3b8"}
            transparent
            opacity={row === 0 ? 0.7 : 0.34}
            depthWrite={false}
            depthTest={false}
          />
        </mesh>
      ))}
    </group>
  );
};

const SystemGallery: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(dataLinePoints);
    return geometry;
  }, []);
  const dataLine = useMemo(() => {
    const material = new THREE.LineBasicMaterial({
      color: "#38d9a9",
      transparent: true,
      opacity: 0.52,
      depthWrite: false,
      depthTest: false,
    });
    const line = new THREE.Line(lineGeometry, material);
    line.renderOrder = 4;
    return line;
  }, [lineGeometry]);

  useEffect(
    () => () => {
      lineGeometry.dispose();
      (dataLine.material as THREE.Material).dispose();
    },
    [dataLine, lineGeometry]
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.18) * 0.06;
    groupRef.current.position.y = Math.sin(t * 0.24) * 0.025;
  });

  return (
    <group ref={groupRef} position={[0.22, -0.02, 0]} scale={[1.32, 1.32, 1.32]}>
      <primitive object={dataLine} />

      {nodePositions.map(([x, y, z], index) => (
        <mesh key={`${x}-${y}-${z}`} position={[x, y, z]} renderOrder={5}>
          <sphereGeometry args={[index === 3 ? 0.045 : 0.03, 18, 18]} />
          <meshBasicMaterial
            color={index === 3 ? "#f8fafc" : "#20c997"}
            transparent
            opacity={index === 3 ? 0.86 : 0.62}
            depthWrite={false}
            depthTest={false}
          />
        </mesh>
      ))}

      {panelConfigs.map((config, index) => (
        <FloatingPanel key={index} {...config} index={index} />
      ))}
    </group>
  );
};

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
    // eslint-disable-next-line react-hooks/immutability
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
    // eslint-disable-next-line react-hooks/immutability
    uniforms.uTime.value += dt;
    uniforms.uMouse.value.lerp(mouseTargetRef.current, 0.04);
  });

  return (
    <>
      <mesh frustumCulled={false} renderOrder={0}>
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
      <SystemGallery />
    </>
  );
};

export default HeroBackground;
