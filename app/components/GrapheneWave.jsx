"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

export default function GrapheneWave() {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(
        window.scrollY / (document.body.scrollHeight - window.innerHeight)
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, -2.5, 1], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <HexMesh scroll={scrollY} />
        <CameraZ scroll={scrollY} />
      </Canvas>
    </div>
  );
}

// Moves camera Z from 1 → 0 as you scroll
function CameraZ({ scroll }) {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.z = 1 - scroll; // top: z=1, bottom: z=0
    camera.updateProjectionMatrix();
  });

  return null;
}

function HexMesh({ scroll }) {
  const meshRef = useRef();

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const radius = 0.1;
    const rows = 25;
    const cols = 50;

    const vertices = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x =
          col * radius * Math.sqrt(3) +
          (row % 2) * (radius * Math.sqrt(3)) / 2;
        const y = row * radius * 1.5;
        vertices.push(x - cols * radius, y - rows * radius * 0.75, 0);
      }
    }

    geom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    return geom;
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position.array;

    // Wave amplitude decreases as you scroll up
    const amplitude = 0.1 * (1 - scroll); // full wave at scroll=0, flat at scroll=1

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      positions[i + 2] =
        Math.sin(x * 5 + time * 3) * amplitude +
        Math.cos(y * 5 + time * 2) * amplitude;
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial color="#4f46e5" size={0.03} />
    </points>
  );
}
