import { Canvas } from "@react-three/fiber";
import { useFBX } from "@react-three/drei";

export default function Sandwich() {
  const sandwich = useFBX("/assets/3d/sandwich.fbx");

  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <mesh
        position={[0, -1, 0]}
        rotation={[0.5, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
      >
        <primitive object={sandwich} scale={0.1} rotation={[0, 0.01, 0]} />
      </mesh>
    </Canvas>
  );
}
