import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/drum_set.glb");
  return <primitive object={scene} />;
}

function Scene() {
  return (
    <Canvas camera={{ fov: 45 }} style={{ position: "relative" }}>
      <Stage environment={"sunset"}>
        <RotatingModel />
      </Stage>
    </Canvas>
  );
}

function RotatingModel() {
  useFrame((state, delta) => {
    state.scene.rotation.y += 0.90 * delta;
  });

  return <Model />;
}

export default Scene;
