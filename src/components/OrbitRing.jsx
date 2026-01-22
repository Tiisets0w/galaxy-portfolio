import React from 'react';

export default function OrbitRing({ radius = 3, color = '#ff9f1c', segments = 128 }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.01, radius + 0.01, segments]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.6}
        side={2}          // double-sided so it’s visible from all angles
        toneMapped={false} // neon-like look unaffected by lights
      />
    </mesh>
  );
}
