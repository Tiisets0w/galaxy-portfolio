import { Html } from '@react-three/drei';

export default function SkillsLabel() {
  return (
    <Html center distanceFactor={12} style={{ pointerEvents: 'none' }}>
      <div style={{
        color: 'white',
        fontSize: '28px',
        fontWeight: 'bold',
        textShadow: '0 0 10px white, 0 0 20px white, 0 0 30px #ffb347', // subtle glow
        letterSpacing: '2px',
        textAlign: 'center'
      }}>
        SKILLS
      </div>
    </Html>
  );
}
