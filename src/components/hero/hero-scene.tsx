"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function ParticleField({ count = 900 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const rand = mulberry32(1337);
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const lime = new THREE.Color("#A6D63A");
    const cyan = new THREE.Color("#22d3ee");
    const white = new THREE.Color("#e2e8f0");

    for (let i = 0; i < count; i++) {
      const r = 4 + rand() * 9;
      const theta = rand() * Math.PI * 2;
      const y = (rand() - 0.5) * 9;
      positions[i * 3] = Math.cos(theta) * r;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * r;

      const pick = rand();
      const c = pick < 0.45 ? lime : pick < 0.7 ? cyan : white;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, [count]);

  useFrame((state, delta) => {
    const points = ref.current;
    if (!points) return;
    points.rotation.y += delta * 0.045;
    const mx = state.pointer.x * 0.35;
    const my = state.pointer.y * 0.25;
    points.rotation.x += (my - points.rotation.x) * 0.03;
    points.rotation.z += (mx - points.rotation.z) * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Rig() {
  useFrame((state) => {
    state.camera.position.x += (state.pointer.x * 0.6 - state.camera.position.x) * 0.04;
    state.camera.position.y += (2.2 + state.pointer.y * 0.4 - state.camera.position.y) * 0.04;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 2.2, 9], fov: 55 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ParticleField />
        <Rig />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-[#081826] via-transparent to-[#081826]/70" />
    </div>
  );
}
