import { Canvas, useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { Stars } from '@react-three/drei';
import Sun from './Sun';
import AutoCamera from './AutoCamera';
import OrbitSystem from './OrbitSystem';
import SkillsLabel from './SkillsLabel';

// Skill icons
import javaIcon from '../assets/java.png';
import pythonIcon from '../assets/python.png';
import cppIcon from '../assets/cpp.png';
import csharpIcon from '../assets/csharp.jpeg';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/javascript.png';

import reactIcon from '../assets/react.jpeg';
import nodeIcon from '../assets/node.png';
import angularIcon from '../assets/angular.png';
import dotnetIcon from '../assets/dotnet.png';

import mysqlIcon from '../assets/mysql.png';
import postgresqlIcon from '../assets/postgre.jfif';
import sqliteIcon from '../assets/sqlite.jfif';
import redisIcon from '../assets/redis.jfif';

import awsIcon from '../assets/aws.png';
import azureIcon from '../assets/azure.jfif';

function SpaceScene() {
  const [rotation, setRotation] = useState(0);

  useFrame(() => {
    setRotation((prev) => prev + 0.0015); // optional shared rotation
  });

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Background stars */}
      <Stars radius={80} depth={40} count={2000} factor={3} fade />

      {/* Sun at center */}
      <Sun />

      {/* Orbit systems for skill categories */}
      {/* Orbit 1: Languages */}
      <OrbitSystem
        radius={3}
        speed={0.002}
        color="#00aaff"
        icons={[javaIcon, pythonIcon, cppIcon, csharpIcon, htmlIcon, cssIcon, jsIcon]}
      />

      {/* Orbit 2: Frameworks */}
      <OrbitSystem
        radius={4}
        speed={0.0016}
        color="#ff4444"
        icons={[reactIcon, nodeIcon, angularIcon, dotnetIcon]}
      />

      {/* Orbit 3: Databases */}
      <OrbitSystem
        radius={5}
        speed={0.0012}
        color="#44ff44"
        icons={[mysqlIcon, postgresqlIcon, sqliteIcon, redisIcon]}
      />

      {/* Orbit 4: Cloud */}
      <OrbitSystem
        radius={6}
        speed={0.001}
        color="#f5a623"
        icons={[awsIcon, azureIcon]}
      />

      {/* Optional floating labels */}
      <SkillsLabel />

      {/* Camera */}
      <AutoCamera />
    </>
  );
}

export default function SpaceCanvas() {
  return (
    <div
      style={{
        position: 'relative',  // so it flows naturally
        width: '100%',
        height: '150vh',       // make it bigger so it moves down a lot
        marginTop: '50px',     // optional spacing from previous section
        zIndex: 0,             // behind AboutOverlay
        pointerEvents: 'none', // keep canvas non-interactive
      }}
    >
      <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
        <SpaceScene />
      </Canvas>
    </div>
  );
}
