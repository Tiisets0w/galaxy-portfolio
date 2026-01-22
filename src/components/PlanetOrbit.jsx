import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function PlanetOrbit({ radius = 3, speed = 0.01, color = '#00aaff', size = 0.5, angleOffset = 0 }) {
  const mesh = useRef();
  const angle = useRef(angleOffset); // start angle

  useFrame(() => {
    angle.current += speed;           // orbit rotation
    mesh.current.position.x = radius * Math.cos(angle.current);
    mesh.current.position.z = radius * Math.sin(angle.current);
    mesh.current.position.y = 0;      // keep on orbit plane
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
    </mesh>
  );
}
