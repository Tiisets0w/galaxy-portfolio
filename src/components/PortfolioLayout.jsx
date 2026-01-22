import SpaceCanvas from './SpaceCanvas';
import AboutOverlay from './AboutOverlay';
import ProjectsSection from './ProjectsSection';
import ExperienceSection from './ExperienceSection';
import ContactSection from './ContactSection';
import SkillSection from './SkillSection';
import SectionDivider from './SectionDivider';
import NeonLaserDivider from './NeonLaserDivider';

export default function PortfolioLayout() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>

      {/* Navbar fixed on top */}
     

      {/* HERO */}
      <section id="home" style={{ height: '100vh', position: 'relative' }}>
        <SpaceCanvas />
        <AboutOverlay />
      </section>

      <SectionDivider />

      {/* Skills */}
      <section id="skills">
        <SkillSection />
      </section>

      <NeonLaserDivider />

      {/* Experience */}
      <section id="experience">
        <ExperienceSection />
      </section>

      <NeonLaserDivider />

      {/* Projects */}
      <section id="projects" style={{ minHeight: '100vh', background: '#02030a', padding: '120px 20px' }}>
        <ProjectsSection />
      </section>

      {/* Contact */}
      <section id="contact" style={{ minHeight: '100vh', background: '#02030a', padding: '120px 20px' }}>
        <SectionDivider />
        <ContactSection />
      </section>

    </div>
  );
}
