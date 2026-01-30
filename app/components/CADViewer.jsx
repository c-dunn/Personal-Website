"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

export default function CADViewer({ model }) {
  return (
    <div className="w-full h-[500px] bg-[#101828] rounded-lg">
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Model url={model} />

        <OrbitControls
          enableRotate={true}
          enableZoom={true}
          enablePan={false}
          minDistance={0}   // 🔒 closest zoom
          maxDistance={.2}   // 🔒 farthest zoom
        />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1} />;
}
