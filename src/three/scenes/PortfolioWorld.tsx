import React, { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useThemeColors } from "../useThemeColors";

const anchors = [
  new THREE.Vector3(-1.8, 0.52, 0),
  new THREE.Vector3(0, -0.1, 0.42),
  new THREE.Vector3(1.72, 0.4, -0.08),
];

const baselineAnchors = [
  new THREE.Vector3(-2.65, -0.82, -0.25),
  new THREE.Vector3(2.55, -0.82, -0.25),
];

const panels = [
  {
    title: "Interface",
    position: [-1.45, 0.28, 0.25],
    rotation: [0.05, 0.42, -0.05],
    color: "#38d9a9",
  },
  {
    title: "Performance",
    position: [0.05, -0.16, 0.48],
    rotation: [-0.08, -0.1, 0.03],
    color: "#f8fafc",
  },
  {
    title: "Security",
    position: [1.48, 0.2, 0.18],
    rotation: [0.06, -0.46, 0.05],
    color: "#5eead4",
  },
] as const;

const archivePanels = [
  { angle: 0, label: "PROJECTS", color: "#20c997" },
  { angle: Math.PI * 0.5, label: "SKILLS", color: "#f8fafc" },
  { angle: Math.PI, label: "BLOG", color: "#5eead4" },
  { angle: Math.PI * 1.5, label: "LAB", color: "#a5b4fc" },
] as const;

const createLine = (
  points: THREE.Vector3[],
  color: string | THREE.Color,
  opacity: number
) => {
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
    depthWrite: false,
  });
  const line = new THREE.Line(geometry, material);
  line.renderOrder = 2;
  return line;
};

const seededNoise = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

const WorldPanel: React.FC<{
  position: readonly [number, number, number];
  rotation: readonly [number, number, number];
  color: string | THREE.Color;
  surfaceColor: THREE.Color;
  lineColor: THREE.Color;
  index: number;
}> = ({ position, rotation, color, surfaceColor, lineColor, index }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.elapsedTime;
    groupRef.current.position.y = position[1] + Math.sin(t * 0.7 + index) * 0.06;
    groupRef.current.rotation.y = rotation[1] + Math.sin(t * 0.35 + index) * 0.08;
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <mesh renderOrder={3}>
        <boxGeometry args={[0.92, 1.26, 0.045]} />
        <meshStandardMaterial
          color={surfaceColor}
          emissive={color}
          emissiveIntensity={0.16}
          metalness={0.45}
          roughness={0.28}
          transparent
          opacity={0.72}
        />
      </mesh>
      <lineSegments renderOrder={4}>
        <edgesGeometry args={[new THREE.BoxGeometry(0.94, 1.28, 0.055)]} />
        <lineBasicMaterial color={lineColor} transparent opacity={0.5} />
      </lineSegments>
      {[0, 1, 2, 3].map((lineIndex) => (
        <mesh
          key={lineIndex}
          position={[-0.16 + lineIndex * 0.07, 0.32 - lineIndex * 0.18, 0.04]}
          renderOrder={5}
        >
          <boxGeometry args={[0.46 - lineIndex * 0.055, 0.018, 0.012]} />
          <meshBasicMaterial
            color={lineIndex === 0 ? color : "#cbd5e1"}
            transparent
            opacity={lineIndex === 0 ? 0.82 : 0.34}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
};

const SignalField: React.FC = () => {
  const colors = useThemeColors(0.06);
  const positions = useMemo(() => {
    const data = new Float32Array(240 * 3);
    for (let i = 0; i < 240; i += 1) {
      data[i * 3] = (seededNoise(i + 1) - 0.5) * 7;
      data[i * 3 + 1] = (seededNoise(i + 101) - 0.5) * 3.6;
      data[i * 3 + 2] = (seededNoise(i + 201) - 0.5) * 2.2;
    }
    return data;
  }, []);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.elapsedTime * 0.025;
    pointsRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.18) * 0.03;
  });

  return (
    <points ref={pointsRef} renderOrder={1}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={colors.accent.current}
        size={0.012}
        transparent
        opacity={0.48}
        depthWrite={false}
      />
    </points>
  );
};

const CoreSystem: React.FC = () => {
  const colors = useThemeColors(0.06);
  const coreRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!coreRef.current) return;
    const t = clock.elapsedTime;
    coreRef.current.rotation.y = t * 0.28;
    coreRef.current.rotation.z = Math.sin(t * 0.22) * 0.12;
  });

  return (
    <group ref={coreRef} position={[0, -0.08, 0.08]}>
      <mesh renderOrder={6}>
        <icosahedronGeometry args={[0.28, 1]} />
        <meshStandardMaterial
          color={colors.bg.current}
          emissive={colors.accent.current}
          emissiveIntensity={0.34}
          metalness={0.72}
          roughness={0.18}
          transparent
          opacity={0.9}
        />
      </mesh>
      {[0.52, 0.78, 1.04].map((radius, index) => (
        <mesh
          key={radius}
          rotation={[
            Math.PI / 2 + index * 0.36,
            index * 0.44,
            index * 0.18,
          ]}
          renderOrder={3}
        >
          <torusGeometry args={[radius, 0.0045, 8, 120]} />
          <meshBasicMaterial
            color={index === 1 ? colors.primary.current : colors.accent.current}
            transparent
            opacity={0.2 - index * 0.035}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
};

const ArchiveOrbit: React.FC = () => {
  const colors = useThemeColors(0.06);
  const orbitRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!orbitRef.current) return;
    orbitRef.current.rotation.y = clock.elapsedTime * 0.12;
  });

  return (
    <group ref={orbitRef} position={[0, -0.08, -0.12]}>
      {archivePanels.map((panel, index) => {
        const radius = 2.55;
        const x = Math.cos(panel.angle) * radius;
        const z = Math.sin(panel.angle) * radius * 0.36;
        const y = index % 2 === 0 ? 0.72 : -0.48;

        return (
          <group
            key={panel.label}
            position={[x, y, z]}
            rotation={[0.02, -panel.angle + Math.PI / 2, 0]}
          >
            <mesh renderOrder={2}>
              <boxGeometry args={[0.78, 0.46, 0.026]} />
              <meshStandardMaterial
                color={colors.bg.current}
                emissive={panel.color}
                emissiveIntensity={0.13}
                metalness={0.35}
                roughness={0.24}
                transparent
                opacity={0.62}
              />
            </mesh>
            <lineSegments renderOrder={4}>
              <edgesGeometry args={[new THREE.BoxGeometry(0.8, 0.48, 0.032)]} />
              <lineBasicMaterial color={panel.color} transparent opacity={0.48} />
            </lineSegments>
            <mesh position={[-0.16, 0.08, 0.03]} renderOrder={5}>
              <boxGeometry args={[0.34, 0.018, 0.01]} />
              <meshBasicMaterial color={panel.color} transparent opacity={0.78} />
            </mesh>
            <mesh position={[0.02, -0.08, 0.03]} renderOrder={5}>
              <boxGeometry args={[0.5, 0.012, 0.01]} />
              <meshBasicMaterial color="#cbd5e1" transparent opacity={0.3} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

const PortfolioWorld: React.FC = () => {
  const colors = useThemeColors(0.06);
  const rootRef = useRef<THREE.Group>(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const flowLine = useMemo(() => createLine(anchors, "#20c997", 0.62), []);
  const baseline = useMemo(
    () => createLine(baselineAnchors, "#f1f3f5", 0.24),
    []
  );

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      mouseRef.current.set(
        (event.clientX / window.innerWidth - 0.5) * 2,
        (event.clientY / window.innerHeight - 0.5) * 2
      );
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      flowLine.geometry.dispose();
      (flowLine.material as THREE.Material).dispose();
      baseline.geometry.dispose();
      (baseline.material as THREE.Material).dispose();
    };
  }, [baseline, flowLine]);

  useFrame(({ clock }) => {
    if (!rootRef.current) return;
    const t = clock.elapsedTime;
    rootRef.current.rotation.y = mouseRef.current.x * 0.12 + Math.sin(t * 0.18) * 0.08;
    rootRef.current.rotation.x = -mouseRef.current.y * 0.06;
    rootRef.current.position.y = Math.sin(t * 0.28) * 0.05;
    (flowLine.material as THREE.LineBasicMaterial).color.copy(colors.accent.current);
    (baseline.material as THREE.LineBasicMaterial).color.copy(colors.primary.current);
  });

  return (
    <>
      <ambientLight intensity={0.9} />
      <pointLight position={[2.5, 2.4, 2.8]} intensity={3.4} color={colors.accent.current} />
      <pointLight position={[-2.2, -1.2, 2.2]} intensity={1.6} color={colors.primary.current} />
      <SignalField />
      <group ref={rootRef} position={[0, 0.04, 0]} scale={[1.14, 1.14, 1.14]}>
        <primitive object={flowLine} />
        <primitive object={baseline} />
        <CoreSystem />
        <ArchiveOrbit />
        {anchors.map((anchor, index) => (
          <mesh key={index} position={anchor} renderOrder={5}>
            <sphereGeometry args={[index === 1 ? 0.09 : 0.065, 24, 24]} />
            <meshStandardMaterial
              color={index === 1 ? colors.primary.current : colors.accent.current}
              emissive={index === 1 ? colors.primary.current : colors.accent.current}
              emissiveIntensity={index === 1 ? 0.6 : 0.35}
              metalness={0.2}
              roughness={0.24}
            />
          </mesh>
        ))}
        <mesh position={[0, -0.1, -0.04]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.34, 0.006, 8, 120]} />
          <meshBasicMaterial color={colors.accent.current} transparent opacity={0.28} />
        </mesh>
        <mesh position={[0, -0.1, -0.08]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.08, 0.004, 8, 140]} />
          <meshBasicMaterial color={colors.primary.current} transparent opacity={0.12} />
        </mesh>
        {panels.map((panel, index) => (
          <WorldPanel
            key={panel.title}
            position={panel.position}
            rotation={panel.rotation}
            color={index === 1 ? colors.primary.current : colors.accent.current}
            surfaceColor={colors.bg.current}
            lineColor={colors.accent.current}
            index={index}
          />
        ))}
      </group>
    </>
  );
};

export default PortfolioWorld;
