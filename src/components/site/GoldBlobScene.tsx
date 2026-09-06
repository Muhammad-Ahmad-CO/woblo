import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Blob() {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useFrame((_, rawDelta) => {
    const dt = Math.min(rawDelta, 0.05);
    // pointer is -1..1 across the canvas; rotate towards it, stay in place
    target.current.y = pointer.x * 0.9;
    target.current.x = -pointer.y * 0.55;
    const g = group.current;
    if (!g) return;
    const k = 1 - Math.exp(-4 * dt);
    g.rotation.y += (target.current.y - g.rotation.y) * k;
    g.rotation.x += (target.current.x - g.rotation.x) * k;
    g.rotation.z += 0.06 * dt;
    g.position.y = Math.sin(performance.now() / 1600) * 0.08;
  });

  return (
    <group ref={group}>
      <mesh castShadow>
        <icosahedronGeometry args={[1.35, 64]} />
        <MeshDistortMaterial
          distort={0.38}
          speed={1.1}
          color="#e8b923"
          metalness={1}
          roughness={0.18}
        />
      </mesh>
    </group>
  );
}

export default function GoldBlobScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} color="#fff3c4" />
      <directionalLight position={[-4, -2, -3]} intensity={1.1} color="#ff9a3c" />
      {/* env */}
    </Canvas>
  );
}
