export default function NeonZigZagDivider() {
  return (
    <div
      style={{
        width: '100%',
        height: '160px',
        background: '#02030a',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '80px' }}
      >
        <polyline
          points="
            0,50
            100,40
            200,60
            300,35
            400,55
            500,30
            600,60
            700,40
            800,55
            900,35
            1000,50
          "
          fill="none"
          stroke="#00f0ff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: `
              drop-shadow(0 0 10px #00f0ff)
              drop-shadow(0 0 20px #00f0ff)
              drop-shadow(0 0 40px #ff00ff)
              drop-shadow(0 0 80px #ff00ff)
            `,
          }}
        />
      </svg>
    </div>
  );
}
