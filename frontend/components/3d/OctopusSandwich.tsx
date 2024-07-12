import { Canvas } from "@react-three/fiber";
import { useFBX } from "@react-three/drei";

export default function OctopusSandwich() {
  const sandwich = useFBX("/assets/3d/octosandwich.fbx");

  return (
    <Canvas>
      <ambientLight intensity={5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh
        position={[0, -1, 0]}
        rotation={[0.5, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
      >
        <primitive object={sandwich} scale={1} rotation={[0, 0.01, 0]} />
      </mesh>
    </Canvas>
  );
}
