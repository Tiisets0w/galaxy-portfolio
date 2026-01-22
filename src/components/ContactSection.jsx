import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/contact.css';

export default function ContactSection() {
  return (
    <section
      style={{
        minHeight: '60vh',
        background: '#02030a',
        color: 'white',
        padding: '120px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '60px',
        position: 'relative',
      }}
    >
      <h2
        style={{
          fontSize: '2.8rem',
          textAlign: 'center',
          textShadow: '0 0 15px #61dafb, 0 0 30px #61dafb',
        }}
      >
        Contact Me
      </h2>

      {/* Social Icons */}
      <div
        style={{
          display: 'flex',
          gap: '40px',
          fontSize: '2.5rem',
        }}
      >
        <a
          href="https://www.linkedin.com/in/tiisetso-mohlakoane-b19131195/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#0e76a8', textShadow: '0 0 15px #0e76a8' }}
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Tiisets0w"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', textShadow: '0 0 15px #fff' }}
        >
          <FaGithub />
        </a>

        <a
          href="mailto:setsomohlaks22@gmail.com"
          style={{ color: '#d44638', textShadow: '0 0 15px #d44638' }}
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: '60px',
          textAlign: 'center',
          color: '#61dafb',
          fontSize: '0.95rem',
          textShadow: '0 0 10px #61dafb, 0 0 20px #61dafb, 0 0 30px #61dafb',
        }}
      >
        © 2026 All rights reserved.
      </footer>
    </section>
  );
}
