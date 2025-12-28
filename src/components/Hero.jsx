import { useState, useEffect } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const lightPink = "#fce7f3";
  const pink = "#ec4899";
  const blue = "#1e3a8a";
  const yellow = "#facc15";

  return (
    <section id="home" style={{
      position: 'relative',
      background: 'linear-gradient(to bottom right, #1e3a8a, #1e40af)',
      color: 'white',
      padding: isMobile ? '60px 0' : '80px 0', // CHANGED: Removed horizontal padding
      overflow: 'hidden',
      minHeight: isMobile ? 'auto' : '600px',
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    }}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 2px 8px rgba(236, 72, 153, 0.2); }
          50% { box-shadow: 0 2px 12px rgba(236, 72, 153, 0.4); }
        }
      `}</style>

      {/* MAIN CONTAINER - EXACTLY SAME AS HEADER */}
      <div style={{
        width: '100%',
        maxWidth: '1200px', // SAME
        margin: '0 auto', // SAME
        padding: '0 16px', // SAME
        boxSizing: 'border-box' // SAME
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '32px' : '48px',
          alignItems: 'center'
        }}>
          
          {/* LEFT CONTENT */}
          <div style={{ animation: 'fadeIn 1s ease-out' }}>
            <div style={{
              display: 'inline-block',
              backgroundColor: yellow,
              color: blue,
              padding: '8px 16px',
              borderRadius: '24px',
              fontWeight: 'bold',
              fontSize: '14px',
              marginBottom: '20px'
            }}>
              Welcome to Alphabetz Choice
            </div>

            <h1 style={{
              fontSize: isMobile ? '32px' : '48px',
              fontWeight: 'bold',
              lineHeight: 1.3,
              marginBottom: '20px'
            }}>
              Let Your Child's First Journey Be A{" "}
              <span style={{ color: yellow }}>Happy One!</span>
            </h1>

            <p style={{
              fontSize: isMobile ? '18px' : '20px',
              marginBottom: '20px',
              color: '#dbeafe'
            }}>
              Preschool | School | Daycare
            </p>
            
            <p style={{
              fontSize: isMobile ? '16px' : '18px',
              color: '#dbeafe',
              marginBottom: '30px',
              lineHeight: 1.6
            }}>
              We nurture young minds through Montessori-based learning and interactive teaching in a safe environment, providing an integrated CBSE primary school curriculum from Playgroup to Class V.
            </p>

            {/* TAGLINE BANNER */}
            <div style={{
              marginTop: '24px',
              background: lightPink,
              padding: isMobile ? "10px 12px" : "12px 20px",
              borderRadius: '14px',
              textAlign: "center",
              borderLeft: `6px solid ${pink}`,
              borderRight: `6px solid ${pink}`,
              width: '100%',
              overflow: "hidden"
            }}>
              <h2 style={{
                fontSize: isMobile ? 16 : 22,
                fontWeight: 700,
                margin: 0,
                background: "linear-gradient(90deg,#1e3a8a,#ec4899,#1e3a8a)",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}>
                International Education @Affordable Cost
              </h2>
            </div>

            {/* BUTTONS */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              marginTop: '32px'
            }}>
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: yellow,
                  color: blue,
                  padding: '12px 32px',
                  borderRadius: '24px',
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                Enroll Now
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('programs');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: pink,
                  color: 'white',
                  padding: '12px 32px',
                  borderRadius: '24px',
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                View Programs
              </button>
            </div>
          </div>

          {/* RIGHT CARD - HIDDEN ON MOBILE */}
          {!isMobile && (
            <div style={{
              position: 'relative',
              transform: 'rotate(3deg)',
              transition: 'transform 0.5s'
            }}>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '24px',
                padding: '32px',
                transform: 'rotate(-3deg)',
                boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)',
                background: `linear-gradient(to bottom right, ${yellow}, #fbbf24)`
              }}>
                <div style={{
                  backgroundColor: '#f0f9ff',
                  padding: '16px',
                  borderRadius: '12px',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  animation: 'bounce 2s ease-in-out infinite'
                }}>
                  <span style={{ fontSize: '32px' }}>✨</span>
                  <div>
                    <h3 style={{ fontWeight: 'bold', color: blue, margin: 0 }}>
                      85% Brain Development
                    </h3>
                    <p style={{ fontSize: '14px', color: '#666', margin: '4px 0 0 0' }}>
                      Happens between age 2-6 years
                    </p>
                  </div>
                </div>

                <div style={{
                  background: `linear-gradient(to right, ${lightPink}, #fef3c7)`,
                  padding: '16px',
                  borderRadius: '12px'
                }}>
                  <h3 style={{
                    fontWeight: 'bold',
                    color: blue,
                    marginBottom: '8px',
                    textAlign: 'center'
                  }}>
                    Classes Available
                  </h3>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8px',
                    marginTop: '12px'
                  }}>
                    {['Play-Group', 'Nursery', 'Jr. KG', 'Sr. KG'].map((className) => (
                      <div
                        key={className}
                        style={{
                          backgroundColor: 'white',
                          padding: '8px',
                          borderRadius: '8px',
                          textAlign: 'center',
                          fontWeight: '600',
                          fontSize: '14px',
                          color: blue,
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                          e.currentTarget.style.backgroundColor = '#f0f9ff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                          e.currentTarget.style.backgroundColor = 'white';
                        }}
                      >
                        {className}
                      </div>
                    ))}
                    <div
                      style={{
                        gridColumn: '1 / span 2',
                        backgroundColor: lightPink,
                        padding: '8px',
                        borderRadius: '8px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '15px',
                        color: blue,
                        animation: 'glow 2s infinite ease-in-out',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                        e.currentTarget.style.backgroundColor = '#fdf2f8';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.backgroundColor = lightPink;
                      }}
                    >
                      Class I-V
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}