import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

export default function SkillOrbit({ radius = 4, speed = 0.008, color = '#00aaff', skill = 'JavaScript', size = 0.4 }) {
  const mesh = useRef();
  const angle = useRef(Math.random() * Math.PI * 2);

  useFrame(() => {
    angle.current += speed;
    mesh.current.position.x = radius * Math.cos(angle.current);
    mesh.current.position.z = radius * Math.sin(angle.current);
    mesh.current.position.y = Math.sin(angle.current * 2) * 0.5; // small vertical movement for liveliness
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
      
      {/* Hoverable label */}
      <Html distanceFactor={10} style={{ pointerEvents: 'none', color: 'white', fontSize: '14px' }}>
        {skill}
      </Html>
    </mesh>
  );
}
