import { useEffect, useState } from "react";

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* ================= BASE STYLES ================= */
  const sectionStyle = {
    position: "relative",
    padding: "90px 16px",
    background:
      "linear-gradient(180deg, #fffde7 0%, #fff8cc 40%, #e0f2fe 100%)",
    overflow: "hidden",
  };

  const container = {
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  };

  const title = {
    fontSize: isMobile ? "32px" : "48px",
    fontWeight: "800",
    color: "#1e3a8a",
    textAlign: "center",
  };

  const highlight = { color: "#ec4899" };

  const divider = {
    width: "96px",
    height: "4px",
    backgroundColor: "#facc15",
    margin: "16px auto 24px",
    borderRadius: "10px",
  };

  const subtitle = {
    textAlign: "center",
    maxWidth: "760px",
    margin: "0 auto 72px",
    color: "#4b5563",
    fontSize: "18px",
  };

  /* ================= FLOATING BUBBLES ================= */
  const bubble = (size, left, top, delay, color) => ({
    position: "absolute",
    width: size,
    height: size,
    left,
    top,
    background: color,
    borderRadius: "50%",
    opacity: 0.6,
    filter: "blur(1px)",
    animation: `bubbleFloat ${20 + delay}s infinite ease-in-out`,
    zIndex: 1,
  });

  /* ================= WHY CHOOSE US ================= */
  const grid4 = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
    gap: "32px",
    marginBottom: "100px",
  };

  const card = {
    background: "white",
    borderRadius: "18px",
    padding: "28px",
    textAlign: "center",
    boxShadow: "0 12px 30px rgba(0,0,0,.12)",
    borderTop: "6px solid #facc15",
    transition: "all 0.4s ease",
    animation: "fadeUp 1s ease forwards",
  };

  /* ================= VISION & MISSION ================= */
  const vmWrapper = {
    background:
      "linear-gradient(270deg, #fff9c4, #e0f2fe, #fde68a)",
    backgroundSize: "600% 600%",
    animation: "gradientMove 12s ease infinite",
    borderRadius: "32px",
    padding: isMobile ? "32px" : "56px",
    marginBottom: "100px",
  };

  const vmGrid = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: "48px",
  };

  const vmCard = {
    background: "white",
    borderRadius: "22px",
    padding: "38px",
    boxShadow: "0 16px 40px rgba(0,0,0,.18)",
  };

  const iconCircle = (bg) => ({
    width: "68px",
    height: "68px",
    borderRadius: "50%",
    background: bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    color: "white",
    marginBottom: "22px",
  });

  /* ================= PRINCIPLES ================= */
  const principlesGrid = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
    gap: "32px",
    marginBottom: "100px",
  };

  const principleCard = {
    backgroundColor: "#1e40af",
    color: "white",
    borderRadius: "18px",
    padding: "36px",
    fontSize: "18px",
    lineHeight: "1.7",
    boxShadow: "0 10px 28px rgba(0,0,0,.25)",
    animation: "fadeUp 1s ease forwards",
  };

  /* ================= 6 REASONS ================= */
  const reasonBox = {
    background: "linear-gradient(135deg, #1e3a8a, #1e40af)",
    color: "white",
    borderRadius: "28px",
    padding: isMobile ? "36px" : "56px",
  };

  const reasonGrid = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: "28px",
  };

  const reasonItem = {
    display: "flex",
    gap: "14px",
    alignItems: "center",
  };

  const badge = (pink) => ({
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: pink ? "#ec4899" : "#facc15",
    color: pink ? "white" : "#1e3a8a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  });

  return (
    <section id="about" style={sectionStyle}>
      {/* ===== BACKGROUND BUBBLES (TOP + MIDDLE + BOTTOM) ===== */}
      <span style={bubble("160px", "5%", "6%", 0, "rgba(186,230,253,0.9)")} />
      <span style={bubble("90px", "28%", "14%", 4, "rgba(253,224,71,0.9)")} />
      <span style={bubble("120px", "72%", "10%", 7, "rgba(252,165,165,0.9)")} />
      <span style={bubble("80px", "88%", "22%", 9, "rgba(167,243,208,0.9)")} />

      <span style={bubble("140px", "8%", "46%", 6, "rgba(191,219,254,0.9)")} />
      <span style={bubble("100px", "82%", "52%", 10, "rgba(254,215,170,0.9)")} />

      <span style={bubble("180px", "18%", "78%", 8, "rgba(224,231,255,0.9)")} />
      <span style={bubble("110px", "75%", "88%", 12, "rgba(253,186,116,0.9)")} />

      <div style={container}>
        {/* ================= WHY CHOOSE US ================= */}
        <h2 style={title}>
          Why Choose <span style={highlight}>Us?</span>
        </h2>
        <div style={divider} />
        <p style={subtitle}>
          A joyful preschool where children feel safe, confident, curious,
          and excited to learn every day.
        </p>

        <div style={grid4}>
          {[
            ["🏆", "Montessori Learning", "Encourages independence & confidence"],
            ["✨", "Interactive Classes", "Play-based & visual learning"],
            ["🛡️", "Safe Environment", "CCTV & child-friendly campus"],
            ["❤️", "Personal Attention", "Individual growth tracking"],
          ].map(([icon, title, text], i) => (
            <div key={i} style={card}>
              <div style={{ fontSize: "38px" }}>{icon}</div>
              <h4 style={{ color: "#1e3a8a" }}>{title}</h4>
              <p style={{ fontSize: "14px", color: "#555" }}>{text}</p>
            </div>
          ))}
        </div>

        {/* ================= VISION & MISSION ================= */}
        <div style={vmWrapper}>
          <div style={vmGrid}>
            <div style={vmCard}>
              <div style={iconCircle("linear-gradient(135deg,#60a5fa,#2563eb)")}>
                💡
              </div>
              <h3>Vision</h3>
              <p>
                To nurture curiosity, creativity, and confidence in every child
                through joyful learning experiences.
              </p>
            </div>

            <div style={vmCard}>
              <div style={iconCircle("linear-gradient(135deg,#f472b6,#ec4899)")}>
                🎯
              </div>
              <h3>Mission</h3>
              <p>
                To provide a safe, engaging, and structured preschool environment
                blending Montessori, play-way, and modern learning.
              </p>
            </div>
          </div>
        </div>

        {/* ================= PRINCIPLES ================= */}
        <h2 style={title}>
          Principles & <span style={highlight}>Guidelines</span>
        </h2>
        <div style={divider} />

        <div style={principlesGrid}>
          {[
            "Every child is unique, constantly learning, and encouraged to be confident, resilient, and capable.",
            "Positive relationships with our staff help children become independent and strong.",
            " A Safe environments support learning tailored to each child's needs,with parent-staff partnerships.",
            "We adapt our curriculum to match each child's unique development pace.",
          ].map((text, i) => (
            <div key={i} style={principleCard}>
              {text}
            </div>
          ))}
        </div>

        {/* ================= 6 REASONS ================= */}
        <div style={reasonBox}>
          <h2 style={{ fontSize: "32px", marginBottom: "32px" }}>
            6 Reasons to Join Alphabetz Choice
          </h2>

          <div style={reasonGrid}>
            {[
              "Curiosity & creativity",
              "Language & thinking skills",
              "Emotional development",
              "Motor skill growth",
              "School readiness",
              "Overall child development",
            ].map((text, i) => (
              <div key={i} style={reasonItem}>
                <div style={badge(i % 2 !== 0)}>{i + 1}</div>
                <p style={{ margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes bubbleFloat {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-45px) translateX(18px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
