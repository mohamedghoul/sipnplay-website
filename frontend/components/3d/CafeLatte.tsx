import { Canvas } from "@react-three/fiber";
import { useFBX } from "@react-three/drei";

export default function CafeLatte() {
  const cafeLatte = useFBX("/assets/3d/cafelatte.fbx");

  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <mesh
        position={[0, -2, 0]}
        rotation={[0.5, 0, 0]}
        scale={[0.5, 0.5, 0.1]}
      >
        <primitive object={cafeLatte} scale={0.1} rotation={[0, 0.01, 0]} />
      </mesh>
    </Canvas>
  );
}