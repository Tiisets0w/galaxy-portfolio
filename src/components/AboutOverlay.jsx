import profilePic from '../assets/Professional_Headshot.jpg';
import { Typewriter } from 'react-simple-typewriter';
//import 'react-simple-typewriter/dist/index.css';

export default function AboutOverlay() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '120px',
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '720px',
        width: '90%',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.45)',
        padding: '24px 32px',
        borderRadius: '16px',
        boxShadow: '0 0 24px rgba(255, 255, 255, 0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        zIndex: 10,
        backdropFilter: 'blur(6px)',
      }}
    >
      <img
        src={profilePic}
        alt="Tiisetso Mohlakoane"
        style={{
          width: '96px',
          height: '96px',
          borderRadius: '50%',
          border: '2px solid #ffb347',
          objectFit: 'cover',
          flexShrink: 0,
        }}
      />

      <div>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Hi, I’m Tiisetso,</h1>

        <p style={{ margin: '6px 0', fontWeight: 500 }}>
          <Typewriter
            words={[
              'a software developer.',
              'building web apps.',
              'creating cloud solutions.',
              'crafting interactive experiences.'
            ]}
            loop={0} // infinite if you want
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <p style={{ margin: 0, opacity: 0.9 }}>
          I enjoy turning ideas into functional and engaging projects that showcase both creativity and technical skills.
        </p>
      </div>
    </div>
  );
}
