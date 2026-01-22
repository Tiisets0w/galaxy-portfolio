// SkillIconOrbit.jsx
import { Html } from '@react-three/drei';

export default function SkillIconOrbit({ position, icon, size = 0.7 }) {
  return (
    <group position={position}>
      <Html distanceFactor={10} transform>
        <img
          src={icon}
          alt="skill icon"
          style={{
            width: `${size * 50}px`,
            height: `${size * 50}px`,
            pointerEvents: 'none'
          }}
        />
      </Html>
    </group>
  );
}
