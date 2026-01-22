import { useFrame, useThree } from '@react-three/fiber';

export default function AutoCamera() {
  const { camera } = useThree();

  useFrame(() => {
    const t = Date.now() * 0.0002;
    camera.position.x = 10 * Math.sin(t);
    camera.position.z = 10 * Math.cos(t);
    camera.position.y = 5 * Math.sin(t * 0.5);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
