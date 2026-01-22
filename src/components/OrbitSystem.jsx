// OrbitSystem.jsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import OrbitRing from './OrbitRing';
import SkillIconOrbit from './SkillIconOrbit';

export default function OrbitSystem({ radius, color, icons = [], speed = 0.002 }) {
  const group = useRef();

  useFrame(() => {
    group.current.rotation.y += speed;
  });

  return (
    <group ref={group}>
      {/* Orbit ring */}
      <OrbitRing radius={radius} color={color} />

      {/* Icons positioned ON the orbit */}
      {icons.map((icon, i) => {
        const angle = (i / icons.length) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);

        return (
          <SkillIconOrbit
            key={i}
            icon={icon}
            position={[x, 0, z]}
          />
        );
      })}
    </group>
  );
}
