import React from 'react';

export default function OGImage() {
  return (
    <div 
      style={{
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.1) 10px,
              rgba(255, 255, 255, 0.1) 20px
            )
          `,
        }}
      />

      {/* Content Container */}
      <div 
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '60px',
        }}
      >
        {/* Fire Emoji */}
        <div 
          style={{
            fontSize: '80px',
            marginBottom: '30px',
          }}
        >
          🔥
        </div>

        {/* Main Title */}
        <h1 
          style={{
            fontSize: '72px',
            fontWeight: '800',
            color: 'white',
            marginBottom: '20px',
            letterSpacing: '-1px',
            lineHeight: '1',
          }}
        >
          FIRE Calculator
        </h1>

        {/* Subtitle */}
        <p 
          style={{
            fontSize: '28px',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '40px',
            lineHeight: '1.3',
          }}
        >
          Calculate Your Path to Financial Independence
        </p>

        {/* Feature Pills */}
        <div 
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {['Free Tool', 'Monte Carlo Simulation', '5 FIRE Types', 'Visual Charts'].map((feature) => (
            <div
              key={feature}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '12px 24px',
                borderRadius: '100px',
                fontSize: '18px',
                fontWeight: '500',
                color: 'white',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              {feature}
            </div>
          ))}
        </div>

        {/* URL */}
        <div 
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: '500',
          }}
        >
          firecalculator.com
        </div>
      </div>

      {/* Decorative Elements */}
      <div 
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(80px)',
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
}