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
    target.current.y = pointer.x * 0.9;
    target.current.x = -pointer.y * 0.55;
    const g = group.current;
    if (!g) return;
    const k = 1 - Math.exp(-4 * dt);
    g.rotation.y += (target.current.y - g.rotation.y) * k;
    g.rotation.x += (target.current.x - g.rotation.x) * k;
    g.rotation.z += 0.05 * dt;
    g.position.y = Math.sin(performance.now() / 1600) * 0.08;
  });

  return (
    <group ref={group}>
      <mesh>
        <torusKnotGeometry args={[1, 0.42, 220, 40, 2, 3]} />
        <MeshDistortMaterial
          distort={0.22}
          speed={1.1}
          color="#e2a615"
          metalness={1}
          roughness={0.14}
        />
      </mesh>
    </group>
  );
}

export default function GoldBlobScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.6], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={2.4} color="#fff3c4" />
      <directionalLight position={[-4, -2, -3]} intensity={1.2} color="#ff9a3c" />
      <Blob />
      <Environment>
        <Lightformer intensity={3} position={[0, 4, 2]} scale={[8, 8, 1]} color="#fff6d5" />
        <Lightformer
          intensity={2}
          color="#ffb547"
          position={[-5, 0, 1]}
          rotation-y={Math.PI / 2}
          scale={[14, 3, 1]}
        />
        <Lightformer
          intensity={1.4}
          color="#ffffff"
          position={[5, 1, -1]}
          rotation-y={-Math.PI / 2}
          scale={[14, 3, 1]}
        />
      </Environment>
    </Canvas>
  );
}
