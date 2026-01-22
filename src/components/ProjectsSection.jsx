import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import '../styles/neon.css';

/* PROJECT IMAGES */
import finance1 from '../assets/project-finance-1.png';
import finance2 from '../assets/project-finance-2.png';

import blockchain1 from '../assets/project-blockchain-1.png';
import blockchain2 from '../assets/project-blockchain-2.png';

import driving1 from '../assets/project-driving-1.png';
import driving2 from '../assets/project-driving-2.png';

/* TECH ICONS */
import reactIcon from '../assets/react.jpeg';
import nodeIcon from '../assets/node.png';
import javaIcon from '../assets/java.png';
import awsIcon from '../assets/aws.png';
import sqliteIcon from '../assets/sqlite.jfif';
import postgresIcon from '../assets/postgre.jfif';

const projects = [
  {
    title: 'Cloud-Based Financial Tracker',
    description:
      'A full-stack financial tracking system deployed on AWS, allowing users to securely manage expenses, transactions, and reports using cloud-native architecture.',
    images: [finance1, finance2],
    tech: [awsIcon, reactIcon, postgresIcon],
    github: '#',
    demo: '#',
  },
  {
    title: 'Timestamp Signature Blockchain System',
    description:
      'A Java-based peer-to-peer blockchain system implementing cryptographic hashing and timestamped digital signatures to ensure data integrity.',
    images: [blockchain1, blockchain2],
    tech: [javaIcon],
    github: '#',
    
  },
  {
    title: 'Driving School Booking Platform',
    description:
      'A booking and scheduling system for driving schools with real-time communication, lesson management, and user authentication.',
    images: [driving1, driving2],
    tech: [reactIcon, nodeIcon, sqliteIcon],
    github: '#',
    demo: '#',
  },
];

function ProjectImages({ images }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
      }}
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="project screenshot"
          style={{
            width: '100%',
            borderRadius: '14px',
            boxShadow: '0 0 30px rgba(0, 240, 255, 0.25)',
            transition: 'transform 0.3s ease',
          }}
        />
      ))}
    </div>
  );
}

function ProjectCard({ project, reverse }) {
  return (
    <div
      className="neon-card"
      style={{
        display: 'grid',
        gridTemplateColumns: reverse ? '1fr 1.2fr' : '1.2fr 1fr',
        gap: '40px',
        alignItems: 'center',
      }}
    >
      {/* Images */}
      <div style={{ order: reverse ? 2 : 1 }}>
        <ProjectImages images={project.images} />
      </div>

      {/* Content */}
      <div style={{ order: reverse ? 1 : 2 }}>
        <h3 style={{ marginBottom: '18px' }}>{project.title}</h3>

        <p style={{ opacity: 0.9, lineHeight: 1.7, marginBottom: '22px' }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', gap: '14px', marginBottom: '26px' }}>
          {project.tech.map((icon, i) => (
            <img
              key={i}
              src={icon}
              alt="tech"
              style={{ width: '36px', height: '36px' }}
            />
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {project.github !== '#' && (
            <a className="neon-btn" href={project.github} target="_blank">
              GitHub
            </a>
          )}
          {project.demo !== '#' && (
            <a className="neon-btn" href={project.demo} target="_blank">
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        position: 'relative',
        padding: '120px 40px',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Stars background */}
      <Canvas
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <Stars radius={90} depth={60} count={6000} factor={4} fade />
      </Canvas>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '90px',
            fontSize: '2.8rem',
            color: '#00f0ff',
            textShadow: '0 0 25px rgba(0,240,255,0.8)',
          }}
        >
          Projects
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '80px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              reverse={i % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
