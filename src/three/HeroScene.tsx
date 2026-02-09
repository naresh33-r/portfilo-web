import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const FloatingShape = ({ position, color, size = 1, speed = 1 }: { position: [number, number, number]; color: string; size?: number; speed?: number }) => (
  <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
    <mesh position={position}>
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial color={color} wireframe transparent opacity={0.6} />
    </mesh>
  </Float>
);

const FloatingTorus = ({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) => (
  <Float speed={speed} rotationIntensity={1} floatIntensity={1}>
    <mesh position={position} rotation={[Math.PI / 4, 0, 0]}>
      <torusGeometry args={[0.8, 0.25, 16, 32]} />
      <meshStandardMaterial color={color} wireframe transparent opacity={0.5} />
    </mesh>
  </Float>
);

const FloatingBox = ({ position, color, speed = 1.5 }: { position: [number, number, number]; color: string; speed?: number }) => (
  <Float speed={speed} rotationIntensity={0.8} floatIntensity={1.2}>
    <mesh position={position} rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial color={color} wireframe transparent opacity={0.5} />
    </mesh>
  </Float>
);

const Scene = () => (
  <>
    <ambientLight intensity={0.4} />
    <pointLight position={[10, 10, 10]} intensity={0.6} color="#7c3aed" />
    <pointLight position={[-10, -10, -10]} intensity={0.4} color="#06b6d4" />

    <FloatingShape position={[-2.5, 1, 0]} color="#7c3aed" size={0.7} speed={1.2} />
    <FloatingShape position={[2.5, -0.5, -1]} color="#3b82f6" size={0.5} speed={0.8} />
    <FloatingTorus position={[0, 1.5, -2]} color="#06b6d4" speed={1} />
    <FloatingTorus position={[-3, -1, -1]} color="#7c3aed" speed={1.3} />
    <FloatingBox position={[3, 1.5, -1.5]} color="#3b82f6" speed={1.1} />
    <FloatingBox position={[-1, -1.5, 0.5]} color="#06b6d4" speed={0.9} />
    <FloatingShape position={[1, 0.5, 1]} color="#a855f7" size={0.4} speed={1.5} />

    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
  </>
);

const HeroScene = () => (
  <div className="absolute inset-0 -z-5">
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  </div>
);

export default HeroScene;
