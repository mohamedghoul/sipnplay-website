"use client";
import { Canvas } from "@react-three/fiber";

export default function Menu3D() {
  return (
    <div>
      <Canvas>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
}
