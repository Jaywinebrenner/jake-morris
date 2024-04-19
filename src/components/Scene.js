import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Stage } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

function Model() {
  const { scene } = useGLTF("/drum_set.glb");
  return <primitive object={scene} />;
}

function Scene() {
  return (

      <CanvasContainer />

  );
}

function CanvasContainer() {
  const canvasRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      const { current: canvas } = canvasRef;

      if (canvas) {
        const { clientWidth, clientHeight } = canvas.parentElement;
        console.log("clientH", clientHeight);
        console.log("canvas.parentElement;", canvas.parentElement)
        canvas.width = clientWidth;
        canvas.height = clientHeight;
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      className="canvas"
      camera={{ fov: 45 }}
      style={{ position: "absolute", width: "100%", height: "100%" }}
      ref={canvasRef}
    >
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
