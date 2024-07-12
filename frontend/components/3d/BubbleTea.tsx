import { Canvas } from "@react-three/fiber";
import { useFBX } from "@react-three/drei";

export default function BubbleTea() {
  const bubbleTea = useFBX("/assets/3d/bubbletea.fbx");

  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <mesh
        position={[0, -2, 0]}
        rotation={[0, 0, 0.5]}
        scale={[0.5, 0.5, 0.1]}
      >
        <primitive object={bubbleTea} scale={0.1} rotation={[0, 0.01, 0]} />
      </mesh>
    </Canvas>
  );
}