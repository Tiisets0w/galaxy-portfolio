import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Sun() {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      // Slowly rotate the Sun for realism
      mesh.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.5, 64, 64]} />

      <meshStandardMaterial
        color="#ffb347"          // base Sun color
        emissive="#ff9f1c"       // neon-like glow color
        emissiveIntensity={1.5}  // soft glow intensity (not too bright)
        metalness={0.5}
        roughness={0.3}
      />
    </mesh>
  );
}
