import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo2.jpeg";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);
  const [hoveredLink, setHoveredLink] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Click handlers
  const handleSocialClick = (platform, url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* ---------- STYLES ---------- */

  const footerStyle = {
    background: "linear-gradient(to bottom right, #1e3a8a, #1e40af)",
    color: "white",
    padding: "40px 16px",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : isTablet
        ? "repeat(2, 1fr)"
        : "repeat(4, 1fr)",
    gap: "32px",
    marginBottom: "32px",
  };

  const columnStyle = {
    color: "#dbeafe",
  };

  const logoContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: isMobile ? "center" : "flex-start",
    textAlign: isMobile ? "center" : "left",
  };

  const logoStyle = {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    objectFit: "contain", // Changed from 'cover' to 'contain'
    marginBottom: "16px",
    backgroundColor: "transparent", // Changed from 'white' to 'transparent'
    padding: "0px",
    border: "none", // Removed the white border
    boxShadow: "none", // Removed the shadow
  };

  const columnTitleStyle = {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "16px",
    color: "#facc15",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: "14px",
  };

  const listItemStyle = {
    marginBottom: "10px",
    transition: "all 0.3s ease",
  };

  const linkStyle = (isHovered) => ({
    color: isHovered ? "#facc15" : "#dbeafe",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "inline-block",
    transform: isHovered ? "translateX(5px)" : "translateX(0)",
    position: "relative",
    paddingLeft: "0px",
  });

  const contactItemStyle = {
    display: "flex",
    gap: "8px",
    marginBottom: "12px",
    fontSize: "14px",
    alignItems: "flex-start",
  };

  const bottomDividerStyle = {
    borderTop: "1px solid rgba(219,234,254,0.3)",
    paddingTop: "24px",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    fontSize: "14px",
    color: "#dbeafe",
    textAlign: isMobile ? "center" : "left",
  };

  const socialContainerStyle = {
    display: "flex",
    gap: "16px",
  };

  const socialButtonStyle = (isHovered) => ({
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    textDecoration: "none",
    backgroundColor: "white",
    transition: "all 0.3s ease",
    cursor: "pointer",
    transform: isHovered ? "scale(1.1) translateY(-3px)" : "scale(1)",
    boxShadow: isHovered ? "0 6px 12px rgba(0,0,0,0.2)" : "0 2px 6px rgba(0,0,0,0.1)",
  });

  const descriptionStyle = {
    fontSize: "15px",
    lineHeight: "1.6",
    marginBottom: "16px",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          {/* LOGO & DESCRIPTION */}
          <div style={columnStyle}>
            <div style={logoContainerStyle}>
              <img
                src={logo}
                alt="Alphabetz Choice Logo"
                style={logoStyle}
              />
              <p style={descriptionStyle}>
                Nurturing young minds with quality education and care from
                Play-Group to Class V.
              </p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div style={columnStyle}>
            <h4 style={columnTitleStyle}>Quick Links</h4>
            <ul style={listStyle}>
              {["home", "about", "programs", "facilities", "gallery", "contact"].map(
                (item) => (
                  <li
                    key={item}
                    style={listItemStyle}
                    onMouseEnter={() => setHoveredLink(item)}
                    onMouseLeave={() => setHoveredLink("")}
                  >
                    <a
                      href={`#${item}`}
                      style={linkStyle(hoveredLink === item)}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item);
                      }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* ACADEMICS */}
          <div style={columnStyle}>
            <h4 style={columnTitleStyle}>Academics</h4>
            <ul style={listStyle}>
              {["Day Care", "Play Group", "Nursery", "Junior KG", "Senior KG", "Class I to V"].map(
                (item) => (
                  <li
                    key={item}
                    style={listItemStyle}
                    onMouseEnter={() => setHoveredLink(item)}
                    onMouseLeave={() => setHoveredLink("")}
                  >
                    <div style={linkStyle(hoveredLink === item)}>
                      {item}
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}
          <div style={columnStyle}>
            <h4 style={columnTitleStyle}>Contact Info</h4>
            <div style={contactItemStyle}>
              <span style={{ marginTop: "2px" }}>📍</span>
              <div>
                Nalanda Nagar, Street Number 21,<br />
                Hyderguda, Upperpally, Attapur<br />
                Telangana 500048
              </div>
            </div>
            <div style={contactItemStyle}>
              <span>📞</span>
              <a
                href="tel:9000894995"
                style={linkStyle(hoveredLink === "phone")}
                onMouseEnter={() => setHoveredLink("phone")}
                onMouseLeave={() => setHoveredLink("")}
              >
                9000894995
              </a>
            </div>
            <div style={contactItemStyle}>
              <span>✉️</span>
              <a
                href="mailto:info@alphabetzchoiceschool.com"
                style={linkStyle(hoveredLink === "email")}
                onMouseEnter={() => setHoveredLink("email")}
                onMouseLeave={() => setHoveredLink("")}
              >
                info@alphabetzchoiceschool.Com
              </a>
            </div>
            <div style={contactItemStyle}>
              <span>🌐</span>
              <a
                href="https://alphabetzchoiceschool.com"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle(hoveredLink === "website")}
                onMouseEnter={() => setHoveredLink("website")}
                onMouseLeave={() => setHoveredLink("")}
              >
                alphabetzchoiceschool.com
              </a>
            </div>

            <div style={contactItemStyle}>
              <span>🕐</span>
              <div>
                <div>Monday - Saturday: 8:00 AM - 6:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div style={bottomDividerStyle}>
          <p>© 2024 Alphabetz Choice School. All rights reserved.</p>

          <div style={socialContainerStyle}>
            {/* FACEBOOK */}
            <div
              onClick={() => handleSocialClick("Facebook", "https://www.facebook.com/profile.php?id=61585765226814")}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1) translateY(-3px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              style={{
                ...socialButtonStyle(false),
                color: "#1877F2",
                backgroundColor: "white",
              }}
              title="Visit our Facebook page"
            >
              <FaFacebookF />
            </div>

            {/* INSTAGRAM */}
            <div
              onClick={() => handleSocialClick("Instagram", "https://www.instagram.com/alphabetz.preschool_attapur/")}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1) translateY(-3px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              style={{
                ...socialButtonStyle(false),
                color: "white",
                background: "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)",
              }}
              title="Visit our Instagram page"
            >
              <FaInstagram />
            </div>

            {/* YOUTUBE */}
            <div
              onClick={() => handleSocialClick("YouTube", "https://www.youtube.com/@Alphabetz_Attapur")}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1) translateY(-3px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              style={{
                ...socialButtonStyle(false),
                color: "#FF0000",
                backgroundColor: "white",
              }}
              title="Visit our YouTube channel"
            >
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}