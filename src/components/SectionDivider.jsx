export default function SectionDivider() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '160px',
        background: '#02030a',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '-10%',
          width: '120%',
          height: '6px',
          transform: 'rotate(-6deg)',
          background: 'linear-gradient(90deg, #ff00ff, #00f0ff)',
          boxShadow: `
            0 0 15px #ff00ff,
            0 0 30px #ff00ff,
            0 0 60px #00f0ff,
            0 0 100px #00f0ff
          `,
        }}
      />
    </div>
  );
}