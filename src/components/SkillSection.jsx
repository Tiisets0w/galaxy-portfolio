import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import '../styles/neon.css';

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

const skills = {
  Languages: [
    { name: 'Java', icon: javaIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'C++', icon: cppIcon },
    { name: 'C#', icon: csharpIcon },
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
  ],
  Frameworks: [
    { name: 'React', icon: reactIcon },
    { name: 'Node.js', icon: nodeIcon },
    { name: 'Angular', icon: angularIcon },
    { name: '.NET', icon: dotnetIcon },
  ],
  Databases: [
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'PostgreSQL', icon: postgresqlIcon },
    { name: 'SQLite', icon: sqliteIcon },
    { name: 'Redis', icon: redisIcon },
  ],
  Cloud: [
    { name: 'AWS', icon: awsIcon },
    { name: 'Azure', icon: azureIcon },
  ],
};

function SkillCard({ title, items }) {
  return (
    <div className="neon-card">
      <h3 style={{ textAlign: 'center', marginBottom: '25px' }}>
        {title}
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
          gap: '16px',
        }}
      >
        {items.map(skill => (
          <div
            key={skill.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              opacity: 0.9,
            }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              style={{ width: '38px', height: '38px' }}
            />
            <span style={{ fontSize: '0.85rem' }}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        position: 'relative', // important for layering stars behind
        padding: '120px 40px',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Starry background */}
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <Stars radius={80} depth={50} count={5000} factor={3} fade />
      </Canvas>

      {/* Content above stars */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="neon-title">
        TECHNICAL SKILLS
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {Object.entries(skills).map(([category, items]) => (
            <SkillCard key={category} title={category} items={items} />
          ))}
        </div>
      </div>
    </section>
  );
}
