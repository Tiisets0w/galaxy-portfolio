import '../styles/neon.css';

import javaIcon from '../assets/java.png';
import csharpIcon from '../assets/csharp.jpeg';
import reactIcon from '../assets/react.jpeg';
import nodeIcon from '../assets/node.png';
import dotnetIcon from '../assets/dotnet.png';

const experiences = [
  {
    role: 'Freelance Software Developer',
    company: 'Self-Employed',
    duration: '2021 – Present',
    description: [
      'Delivered custom websites and small web systems for clients',
      'Built backend logic using Java (OOP, data structures, file handling)',
      'Developed APIs and database-driven systems using C# / .NET',
      'Worked across multiple languages and frameworks (4+ years)',
      'Collaborated directly with clients to gather requirements and deliver solutions',
    ],
    techIcons: [javaIcon, csharpIcon, reactIcon, nodeIcon, dotnetIcon],
  },
  {
    role: 'Administrative Assistant',
    company: 'IAM-Multimedia, Johannesburg',
    duration: '2020 – 2021',
    description: [
      'Took meeting minutes and handled secretarial duties',
      'Strengthened professional communication and organizational skills',
    ],
    techIcons: [],
  },
];

function ExperienceCard({ exp }) {
  return (
    <div
      className="neon-card"
      style={{
        marginBottom: '50px',
      }}
    >
      <h3 style={{ fontSize: '1.4rem', marginBottom: '6px' }}>
        {exp.role}
      </h3>

      <p style={{ opacity: 0.75, marginBottom: '10px' }}>
        {exp.company} • {exp.duration}
      </p>

      <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
        {exp.description.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '6px', lineHeight: 1.5 }}>
            {item}
          </li>
        ))}
      </ul>

      {exp.techIcons.length > 0 && (
        <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
          {exp.techIcons.map((icon, idx) => (
            <img
              key={idx}
              src={icon}
              alt="tech"
              style={{
                width: '34px',
                height: '34px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 6px rgba(0,240,255,0.6))',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      style={{
        padding: '140px 20px',
        background: '#02030a',
      }}
    >
      <h2 className="neon-title">EXPERIENCE</h2>

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} />
        ))}
      </div>
    </section>
  );
}
