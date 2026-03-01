'use client';

import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
  continueRender,
  delayRender,
} from 'remotion';

// ==================== UTILITY COMPONENTS ====================

interface FadeInProps {
  children: React.ReactNode;
  fromFrame: number;
  duration?: number;
  translateY?: number;
  style?: React.CSSProperties;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  fromFrame,
  duration = 30,
  translateY = 0,
  style,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [fromFrame, fromFrame + duration], [0, 1], {
    extrapolateRight: 'clamp' as const,
    easing: Easing.out(Easing.cubic),
  });

  const y = interpolate(
    frame,
    [fromFrame, fromFrame + duration],
    [translateY, 0],
    {
      extrapolateRight: 'clamp' as const,
      easing: Easing.out(Easing.cubic),
    }
  );

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

interface ScaleInProps {
  children: React.ReactNode;
  fromFrame: number;
  duration?: number;
  fromScale?: number;
}

const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  fromFrame,
  duration = 30,
  fromScale = 0,
}) => {
  const frame = useCurrentFrame();

  const scale = interpolate(
    frame,
    [fromFrame, fromFrame + duration],
    [fromScale, 1],
    {
      extrapolateRight: 'clamp' as const,
      easing: Easing.out(Easing.back(1.5)),
    }
  );

  return (
    <div style={{ transform: `scale(${scale})` }}>{children}</div>
  );
};

// ==================== SCENE 1: OPENING ====================

const OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0f2847 100%)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Animated Network Background */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.3,
        }}
      >
        {Array.from({ length: 50 }).map((_, i) => {
          const x = (Math.sin(i * 0.5) * 400 + 960) / 1920 * 100;
          const y = (Math.cos(i * 0.3) * 300 + 540) / 1080 * 100;
          const delay = i * 0.1;
          const opacity = interpolate(
            frame,
            [delay * 30, (delay + 2) * 30],
            [0, 0.6],
            { extrapolateRight: 'clamp' as const }
          );

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${x}%`,
                top: `${y}%`,
                width: 8,
                height: 8,
                background: '#00d9ff',
                borderRadius: '50%',
                opacity,
                transform: 'translate(-50%, -50%)',
              }}
            />
          );
        })}
      </div>

      {/* Logo Animation */}
      <ScaleIn fromFrame={0} duration={45}>
        <div
          style={{
            width: 180,
            height: 180,
            background: 'linear-gradient(135deg, #00d9ff 0%, #00ff88 100%)',
            borderRadius: 36,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 30px 80px rgba(0, 217, 255, 0.5)',
          }}
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
      </ScaleIn>

      <FadeIn fromFrame={30} duration={45} translateY={40}>
        <div style={{ textAlign: 'center', marginTop: 50 }}>
          <h1
            style={{
              fontSize: 84,
              fontWeight: 800,
              color: 'white',
              margin: 0,
              letterSpacing: '-2px',
              background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Metahorizon
          </h1>
          <p
            style={{
              fontSize: 32,
              color: 'rgba(255,255,255,0.8)',
              margin: '16px 0 0',
              fontWeight: 300,
              letterSpacing: '4px',
              textTransform: 'uppercase',
            }}
          >
            Global Innovation & Capability Hub
          </p>
        </div>
      </FadeIn>

      {/* Stats Overlay */}
      <FadeIn fromFrame={90} duration={45} translateY={30}>
        <div
          style={{
            position: 'absolute',
            bottom: 80,
            display: 'flex',
            gap: 80,
          }}
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '500+', label: 'Projects Delivered' },
            { value: '200+', label: 'Happy Clients' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: 56,
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #00d9ff 0%, #00ff88 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.6)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </AbsoluteFill>
  );
};

// ==================== SCENE 2: COMPANY INTRODUCTION ====================

const CompanyIntroScene: React.FC = () => {
  const frame = useCurrentFrame();

  const locations = [
    { city: 'Irving, Texas', country: 'USA', x: 25, y: 45 },
    { city: 'Dehradun', country: 'India', x: 70, y: 50 },
    { city: 'Kathmandu', country: 'Nepal', x: 73, y: 53 },
  ];

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0f2847 100%)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* World Map Silhouette */}
      <div
        style={{
          position: 'absolute',
          width: '80%',
          height: '70%',
          opacity: 0.2,
          background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1000 500\'%3E%3Cpath fill=\'%2300d9ff\' d=\'M200,150 Q250,100 300,150 T400,200 L350,300 Q300,350 250,300 Z\'/%3E%3C/svg%3E") center/contain no-repeat',
        }}
      />

      {/* Connection Lines */}
      <svg
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d9ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00d9ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00d9ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {locations.map((loc, i) => {
          if (i === 0 || !locations[0]) return null;
          return (
            <line
              key={i}
              x1={`${locations[0].x}%`}
              y1={`${locations[0].y}%`}
              x2={`${loc.x}%`}
              y2={`${loc.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="10,10"
              opacity={interpolate(
                frame,
                [i * 20, (i + 1) * 20],
                [0, 0.6],
                { extrapolateRight: 'clamp' as const }
              )}
            />
          );
        })}
      </svg>

      {/* Location Markers */}
      {locations.map((loc, i) => (
        <FadeIn key={i} fromFrame={i * 30} duration={30}>
          <div
            style={{
              position: 'absolute',
              left: `${loc.x}%`,
              top: `${loc.y}%`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                background: '#00d9ff',
                borderRadius: '50%',
                boxShadow: '0 0 20px #00d9ff',
              }}
            />
            <div
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 600,
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              }}
            >
              {loc.city}
            </div>
            <div
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 14,
              }}
            >
              {loc.country}
            </div>
          </div>
        </FadeIn>
      ))}

      <FadeIn fromFrame={90} duration={45} translateY={30}>
        <div style={{ textAlign: 'center', marginTop: 100 }}>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: 'white',
              margin: 0,
            }}
          >
            Global Presence, Local Expertise
          </h2>
          <p
            style={{
              fontSize: 24,
              color: 'rgba(255,255,255,0.7)',
              margin: '16px 0 0',
              maxWidth: 800,
            }}
          >
            Serving enterprises across three continents with 24/7 support
          </p>
        </div>
      </FadeIn>
    </AbsoluteFill>
  );
};

// ==================== SCENE 3: SERVICES OVERVIEW ====================

const ServicesScene: React.FC = () => {
  const frame = useCurrentFrame();

  const services = [
    {
      name: 'Identity & Access Management',
      desc: 'Zero Trust security with SSO, MFA, and privileged access',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      color: '#e94560',
    },
    {
      name: 'Cloud & DevOps',
      desc: 'Cloud migration, CI/CD, and infrastructure automation',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17.5 19c0-1.7 1.3-3 3-3h.5c1.7 0 3-1.3 3-3s-1.3-3-3-3c-.2 0-.3 0-.5.1C20.1 7.1 17.8 5 15 5c-2.8 0-5.1 2.1-5.5 4.9-.2-.1-.3-.1-.5-.1-1.7 0-3 1.3-3 3s1.3 3 3 3h.5c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3" />
        </svg>
      ),
      color: '#00d9ff',
    },
    {
      name: 'Cybersecurity & SOC',
      desc: '24/7 monitoring, pentesting, and incident response',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      color: '#ffd93d',
    },
    {
      name: 'Data Science & AI/ML',
      desc: 'Advanced analytics and intelligent automation',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1m15.5-6.5l-4.25 4.25m-2.5 2.5L5.5 18.5m9 0l4.25 4.25m-13.5-13.5L9.5 9.5" />
        </svg>
      ),
      color: '#00ff88',
    },
    {
      name: 'Custom Software',
      desc: 'Tailored web, mobile, and enterprise applications',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
      color: '#a855f7',
    },
    {
      name: 'Managed IT Services',
      desc: '24/7 help desk, network monitoring, infrastructure',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
        </svg>
      ),
      color: '#ff6b6b',
    },
  ];

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #1a0a2e 0%, #16213e 50%, #0f3460 100%)',
        padding: 60,
      }}
    >
      <FadeIn fromFrame={0} duration={45} translateY={-40}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: 'white',
              margin: 0,
            }}
          >
            Comprehensive IT Services
          </h2>
          <p
            style={{
              fontSize: 24,
              color: 'rgba(255,255,255,0.7)',
              margin: '16px 0 0',
            }}
          >
            Enterprise-grade solutions for every challenge
          </p>
        </div>
      </FadeIn>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          marginTop: 40,
        }}
      >
        {services.map((service, i) => {
          const scale = interpolate(
            frame,
            [60 + i * 15, 80 + i * 15],
            [0, 1],
            { extrapolateRight: 'clamp' as const }
          );
          const y = interpolate(
            frame,
            [60 + i * 15, 80 + i * 15],
            [40, 0],
            { extrapolateRight: 'clamp' as const }
          );

          return (
            <div
              key={i}
              style={{
                padding: 32,
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 20,
                border: `1px solid ${service.color}40`,
                backdropFilter: 'blur(10px)',
                transform: `scale(${scale}) translateY(${y}px)`,
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 16,
                  background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}80 100%)`,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 20,
                  color: 'white',
                  boxShadow: `0 10px 30px ${service.color}40`,
                }}
              >
                {service.icon}
              </div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: 'white',
                  margin: '0 0 12px',
                }}
              >
                {service.name}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.6)',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ==================== SCENE 4: DOCUMME PRODUCT ====================

const DocummeScene: React.FC = () => {
  const frame = useCurrentFrame();

  const integrations = ['Slack', 'Teams', 'Jira', 'Zoom', 'Salesforce', 'GitHub'];

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #1a2840 50%, #0f3460 100%)',
        padding: 60,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Left: Product Info */}
        <div style={{ flex: 1, paddingRight: 60 }}>
          <FadeIn fromFrame={0} duration={45} translateY={-30}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: 'linear-gradient(135deg, #00d9ff 0%, #00ff88 100%)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <h2
                style={{
                  fontSize: 56,
                  fontWeight: 800,
                  color: 'white',
                  margin: 0,
                }}
              >
                Documme
              </h2>
            </div>
          </FadeIn>

          <FadeIn fromFrame={30} duration={45} translateY={20}>
            <p
              style={{
                fontSize: 24,
                color: 'rgba(255,255,255,0.8)',
                margin: '0 0 32px',
                lineHeight: 1.5,
              }}
            >
              Your team's second brain. AI-powered documentation that
              automatically captures meetings, conversations, and workflows.
            </p>
          </FadeIn>

          <FadeIn fromFrame={60} duration={45}>
            <div
              style={{
                display: 'flex',
                gap: 24,
                marginBottom: 32,
              }}
            >
              {[
                { value: '70%', label: 'Time Saved' },
                { value: '100+', label: 'Integrations' },
                { value: 'SOC2', label: 'Compliant' },
              ].map((stat, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontSize: 42,
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #00d9ff 0%, #00ff88 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.6)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn fromFrame={90} duration={45}>
            <div
              style={{
                padding: 20,
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 12,
                borderLeft: '4px solid #00d9ff',
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  color: 'rgba(255,255,255,0.8)',
                  margin: 0,
                  fontStyle: 'italic',
                }}
              >
                "Documme has revolutionized how we handle documentation. Our team
                saves 15 hours per week."
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.5)',
                  margin: '8px 0 0',
                }}
              >
                — Sarah Mitchell, VP Engineering
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right: Integration Cloud */}
        <div
          style={{
            flex: 1,
            position: 'relative',
            height: 500,
          }}
        >
          {/* Central Hub */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 140,
              height: 140,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00d9ff 0%, #00ff88 100%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 0 60px rgba(0, 217, 255, 0.4)',
            }}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
            </svg>
          </div>

          {/* Orbiting Integrations */}
          {integrations.map((name, i) => {
            const angle = (i / integrations.length) * Math.PI * 2;
            const radius = 180;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const rotation = frame * 0.02 + i * (Math.PI * 2 / integrations.length);
            const orbitX = Math.cos(rotation) * radius;
            const orbitY = Math.sin(rotation) * radius;

            return (
              <div
                key={name}
                style={{
                  position: 'absolute',
                  top: `calc(50% + ${orbitY}px)`,
                  left: `calc(50% + ${orbitX}px)`,
                  transform: 'translate(-50%, -50%)',
                  padding: '12px 24px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 24,
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: 14,
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                {name}
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ==================== SCENE 5: QVOLV PRODUCT ====================

const QvolvScene: React.FC = () => {
  const frame = useCurrentFrame();

  const products = [
    {
      name: 'Q-Connect',
      subtitle: 'Real-Time Immersive Collaboration',
      features: ['Live multi-user collaboration', 'Instant file sharing', 'Real-time annotations'],
      color: '#e94560',
    },
    {
      name: 'Q-Intel',
      subtitle: 'AI-Powered XR Analytics',
      features: ['Real-time data visualization', 'Predictive analytics', 'IoT integration'],
      color: '#00d9ff',
    },
    {
      name: 'Q-Companion',
      subtitle: 'Human 2.0 Platform',
      features: ['AI digital eBuddy', 'Intelligent guidance', 'Live IoT analytics'],
      color: '#00ff88',
      popular: true,
    },
  ];

  const industries = [
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Defence', icon: '🛡️' },
    { name: 'Aviation', icon: '✈️' },
    { name: 'Energy', icon: '⚡' },
    { name: 'Education', icon: '📚' },
  ];

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d2847 100%)',
        padding: 60,
      }}
    >
      <FadeIn fromFrame={0} duration={45} translateY={-30}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: 'linear-gradient(135deg, #00d9ff 0%, #00ff88 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
              >
                <path d="M2 12h5" />
                <path d="M13 12h9" />
                <path d="M10 12v.5a2.5 2.5 0 0 0 5 0V12" />
                <path d="M10 12V7a5 5 0 0 1 10 0v5" />
              </svg>
            </div>
            <h2
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: 'white',
                margin: 0,
              }}
            >
              Qvolv
            </h2>
          </div>
          <p
            style={{
              fontSize: 24,
              color: 'rgba(255,255,255,0.7)',
              margin: 0,
            }}
          >
            Immersive AR/VR/MR Solutions with Digital Twins
          </p>
        </div>
      </FadeIn>

      {/* Products Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          marginBottom: 50,
        }}
      >
        {products.map((product, i) => {
          const scale = interpolate(
            frame,
            [60 + i * 20, 80 + i * 20],
            [0, 1],
            { extrapolateRight: 'clamp' as const }
          );

          return (
            <div
              key={i}
              style={{
                padding: 32,
                background: product.popular
                  ? `linear-gradient(135deg, ${product.color}20 0%, ${product.color}10 100%)`
                  : 'rgba(255,255,255,0.05)',
                borderRadius: 20,
                border: product.popular
                  ? `2px solid ${product.color}`
                  : '1px solid rgba(255,255,255,0.1)',
                transform: `scale(${scale})`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {product.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    padding: '4px 12px',
                    background: `linear-gradient(135deg, ${product.color} 0%, ${product.color}80 100%)`,
                    borderRadius: 12,
                    fontSize: 12,
                    fontWeight: 700,
                    color: 'white',
                  }}
                >
                  FLAGSHIP
                </div>
              )}
              <h3
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: product.color,
                  margin: '0 0 8px',
                }}
              >
                {product.name}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.6)',
                  margin: '0 0 20px',
                }}
              >
                {product.subtitle}
              </p>
              <ul
                style={{
                  margin: 0,
                  padding: '0 0 0 20px',
                }}
              >
                {product.features.map((feature, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.7)',
                      marginBottom: 8,
                    }}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Industries */}
      <FadeIn fromFrame={120} duration={45} translateY={30}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          {industries.map((industry, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 20px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 24,
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <span style={{ fontSize: 24 }}>{industry.icon}</span>
              <span
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: 500,
                }}
              >
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Stats Bar */}
      <FadeIn fromFrame={150} duration={45}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 80,
            marginTop: 40,
          }}
        >
          {[
            { value: '60%', label: 'Training Cost Reduction' },
            { value: '45%', label: 'Faster Operations' },
            { value: '18+', label: 'Languages' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #00d9ff 0%, #00ff88 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </AbsoluteFill>
  );
};

// ==================== SCENE 6: ACADEMY ====================

const AcademyScene: React.FC = () => {
  const frame = useCurrentFrame();

  const programs = [
    {
      name: 'Zero Trust & IAM',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
      ),
      color: '#e94560',
    },
    {
      name: 'Cloud Security',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17.5 19c0-1.7 1.3-3 3-3h.5c1.7 0 3-1.3 3-3s-1.3-3-3-3c-.2 0-.3 0-.5.1C20.1 7.1 17.8 5 15 5c-2.8 0-5.1 2.1-5.5 4.9-.2-.1-.3-.1-.5-.1-1.7 0-3 1.3-3 3s1.3 3 3 3h.5c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3" />
        </svg>
      ),
      color: '#00d9ff',
    },
    {
      name: 'Data Analytics & AI',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
        </svg>
      ),
      color: '#00ff88',
    },
    {
      name: 'DevOps & Cloud',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
        </svg>
      ),
      color: '#ffd93d',
    },
  ];

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #1a0a2e 0%, #16213e 50%, #0f3460 100%)',
        padding: 60,
      }}
    >
      <FadeIn fromFrame={0} duration={45} translateY={-30}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <h2
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: 'white',
              margin: 0,
            }}
          >
            Metahorizon Academy
          </h2>
          <p
            style={{
              fontSize: 24,
              color: 'rgba(255,255,255,0.7)',
              margin: '16px 0 0',
            }}
          >
            Building the Next Generation of Technology Leaders
          </p>
        </div>
      </FadeIn>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }}
      >
        {programs.map((program, i) => {
          const scale = interpolate(
            frame,
            [60 + i * 15, 80 + i * 15],
            [0, 1],
            { extrapolateRight: 'clamp' as const }
          );

          return (
            <div
              key={i}
              style={{
                padding: 32,
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 20,
                border: `1px solid ${program.color}40`,
                textAlign: 'center',
                transform: `scale(${scale})`,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 16,
                  background: `linear-gradient(135deg, ${program.color} 0%, ${program.color}80 100%)`,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 auto 20px',
                  color: 'white',
                }}
              >
                {program.icon}
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: 'white',
                  margin: 0,
                }}
              >
                {program.name}
              </h3>
            </div>
          );
        })}
      </div>

      <FadeIn fromFrame={120} duration={45}>
        <div
          style={{
            marginTop: 50,
            padding: 24,
            background: 'rgba(255,255,255,0.05)',
            borderRadius: 16,
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: 18,
              color: 'rgba(255,255,255,0.8)',
              margin: 0,
            }}
          >
            📜 Industry-Aligned Programs • 🌍 Global Certifications • 👔 Leadership Development
          </p>
        </div>
      </FadeIn>
    </AbsoluteFill>
  );
};

// ==================== SCENE 7: WHY METAHORIZON ====================

const WhyScene: React.FC = () => {
  const frame = useCurrentFrame();

  const reasons = [
    { value: '50+', label: 'Expert Professionals' },
    { value: '24/7', label: 'Global Support' },
    { value: 'SOC2', label: 'Security Certified' },
    { value: 'ISO 27001', label: 'Compliance Ready' },
  ];

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #001a33 0%, #003366 50%, #004d99 100%)',
        padding: 60,
      }}
    >
      <FadeIn fromFrame={0} duration={45} translateY={-30}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: 'white',
              margin: 0,
            }}
          >
            Why Metahorizon?
          </h2>
          <p
            style={{
              fontSize: 24,
              color: 'rgba(255,255,255,0.7)',
              margin: '16px 0 0',
            }}
          >
            Trusted by enterprises across Banking, Healthcare, Defence & Technology
          </p>
        </div>
      </FadeIn>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 60,
        }}
      >
        {reasons.map((reason, i) => {
          const scale = interpolate(
            frame,
            [60 + i * 15, 80 + i * 15],
            [0, 1],
            { extrapolateRight: 'clamp' as const }
          );

          return (
            <div
              key={i}
              style={{
                textAlign: 'center',
                transform: `scale(${scale})`,
              }}
            >
              <div
                style={{
                  fontSize: 64,
                  fontWeight: 800,
                  background: `linear-gradient(135deg, #00d9ff 0%, #00ff88 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: 12,
                }}
              >
                {reason.value}
              </div>
              <div
                style={{
                  fontSize: 16,
                  color: 'rgba(255,255,255,0.7)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                {reason.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ==================== SCENE 8: CALL TO ACTION ====================

const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0f2847 100%)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Animated Background */}
      <div
        style={{
          position: 'absolute',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,217,255,0.1) 0%, transparent 70%)',
          animation: 'pulse 2s ease-in-out infinite',
        }}
      />

      <ScaleIn fromFrame={0} duration={45}>
        <div
          style={{
            width: 140,
            height: 140,
            margin: '0 auto 40px',
            background: 'linear-gradient(135deg, #00d9ff 0%, #00ff88 100%)',
            borderRadius: 28,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 30px 80px rgba(0, 217, 255, 0.4)',
          }}
        >
          <svg
            width="70"
            height="70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
      </ScaleIn>

      <FadeIn fromFrame={30} duration={45} translateY={30}>
        <div style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: 'white',
              margin: '0 0 20px',
              letterSpacing: '-1px',
            }}
          >
            Ready to Transform?
          </h1>
          <p
            style={{
              fontSize: 28,
              color: 'rgba(255,255,255,0.8)',
              margin: '0 0 50px',
              fontWeight: 300,
            }}
          >
            Let's build secure, intelligent systems together
          </p>
        </div>
      </FadeIn>

      <FadeIn fromFrame={60} duration={45} translateY={20}>
        <div
          style={{
            padding: '28px 72px',
            background: 'linear-gradient(135deg, #00d9ff 0%, #00ff88 100%)',
            borderRadius: 50,
            boxShadow: '0 15px 50px rgba(0, 217, 255, 0.4)',
            marginBottom: 40,
          }}
        >
          <span
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: '#0a0a1a',
            }}
          >
            metahorizon.com
          </span>
        </div>
      </FadeIn>

      <FadeIn fromFrame={90} duration={45}>
        <div
          style={{
            display: 'flex',
            gap: 40,
            fontSize: 20,
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span>📧</span>
            <span>contact@metahorizon.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span>📞</span>
            <span>+1-469-496-9588</span>
          </div>
        </div>
      </FadeIn>

      <FadeIn fromFrame={150} duration={45}>
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            fontSize: 18,
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
          }}
        >
          Innovation Meets Security
        </div>
      </FadeIn>
    </AbsoluteFill>
  );
};

// ==================== MAIN COMPOSITION ====================

interface MetahorizonPromoProps {
  title?: string;
}

export const MetahorizonPromo: React.FC<MetahorizonPromoProps> = () => {
  return (
    <AbsoluteFill>
      {/* Scene 1: Opening - 0-4s (frames 0-120) */}
      <Sequence from={0} durationInFrames={120}>
        <OpeningScene />
      </Sequence>

      {/* Scene 2: Company Intro - 4-7s (frames 120-210) */}
      <Sequence from={120} durationInFrames={90}>
        <CompanyIntroScene />
      </Sequence>

      {/* Scene 3: Services - 7-11s (frames 210-330) */}
      <Sequence from={210} durationInFrames={120}>
        <ServicesScene />
      </Sequence>

      {/* Scene 4: Documme - 11-15s (frames 330-450) */}
      <Sequence from={330} durationInFrames={120}>
        <DocummeScene />
      </Sequence>

      {/* Scene 5: Qvolv - 15-19s (frames 450-570) */}
      <Sequence from={450} durationInFrames={120}>
        <QvolvScene />
      </Sequence>

      {/* Scene 6: Academy - 19-22s (frames 570-660) */}
      <Sequence from={570} durationInFrames={90}>
        <AcademyScene />
      </Sequence>

      {/* Scene 7: Why - 22-25s (frames 660-750) */}
      <Sequence from={660} durationInFrames={90}>
        <WhyScene />
      </Sequence>

      {/* Scene 8: CTA - 25-30s (frames 750-900) */}
      <Sequence from={750} durationInFrames={150}>
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};

export default MetahorizonPromo;
