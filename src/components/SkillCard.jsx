export default function SkillCard({ title, items }) {
  return (
    <div
      style={{
        position: 'relative',
        padding: '30px',
        borderRadius: '20px',
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow: `
          0 0 20px rgba(255, 180, 80, 0.15),
          inset 0 0 15px rgba(255, 180, 80, 0.05)
        `,
        transition: 'all 0.3s ease',
      }}
      className="skill-card"
    >
        
      <h3 style={{ marginBottom: '20px', color: '#ffb347' }}>
        {title}
      </h3>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map(item => (
          <li
            key={item}
            style={{
              padding: '6px 0',
              opacity: 0.85,
            }}
          >
            ✦ {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
