import { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  const [formData, setFormData] = useState({
    childName: "",
    parentName: "",
    phone: "",
    email: "",
    program: "",
    message: ""
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveNav(id);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi, I would like to inquire about admission at Alphabetz Choice School.%0A%0AChild Name: ${formData.childName}%0AParent Name: ${formData.parentName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AProgram: ${formData.program}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919000894995?text=${message}`, '_blank');
    setFormData({
      childName: "",
      parentName: "",
      phone: "",
      email: "",
      program: "",
      message: ""
    });
    setIsAdmissionOpen(false);
  };

  const blue = "#1e3a8a";
  const pink = "#ec4899";

  return (
    <>
      {/* ADMISSION ENQUIRY MODAL */}
   {/* ADMISSION ENQUIRY MODAL - POSITIONED ON RIGHT SIDE */}
{isAdmissionOpen && (
  <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 2000,
    display: "flex",
    alignItems: "flex-start", // Changed from "center" to "flex-start"
    justifyContent: "flex-end", // Changed from "center" to "flex-end"
    padding: "20px"
  }}>
    <div style={{
      backgroundColor: "white",
      borderRadius: "16px 0 0 16px", // Rounded corners on left only
      padding: "32px",
      width: "100%",
      maxWidth: "500px",
      height: "100vh", // Full height
      maxHeight: "100vh", // Full viewport height
      overflowY: "auto",
      boxShadow: "0 0 25px rgba(0,0,0,0.2)",
      animation: "slideIn 0.3s ease-out"
    }}>
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "24px"
      }}>
        <h3 style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: blue,
          margin: 0
        }}>
          Admission Enquiry
        </h3>
        <button
          onClick={() => setIsAdmissionOpen(false)}
          style={{
            background: "none",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#666",
            padding: "0",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            transition: "all 0.2s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#f3f4f6";
            e.target.style.color = "#333";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#666";
          }}
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "600",
            color: blue,
            marginBottom: "8px"
          }}>
            Child's Name *
          </label>
          <input
            type="text"
            name="childName"
            required
            value={formData.childName}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "16px",
              boxSizing: "border-box",
              transition: "border-color 0.3s ease"
            }}
            placeholder="Enter child's name"
            onFocus={(e) => e.target.style.borderColor = blue}
            onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "600",
            color: blue,
            marginBottom: "8px"
          }}>
            Parent's Name *
          </label>
          <input
            type="text"
            name="parentName"
            required
            value={formData.parentName}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "16px",
              boxSizing: "border-box",
              transition: "border-color 0.3s ease"
            }}
            placeholder="Enter parent's name"
            onFocus={(e) => e.target.style.borderColor = blue}
            onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "600",
            color: blue,
            marginBottom: "8px"
          }}>
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "16px",
              boxSizing: "border-box",
              transition: "border-color 0.3s ease"
            }}
            placeholder="Enter email address"
            onFocus={(e) => e.target.style.borderColor = blue}
            onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "600",
            color: blue,
            marginBottom: "8px"
          }}>
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "16px",
              boxSizing: "border-box",
              transition: "border-color 0.3s ease"
            }}
            placeholder="Enter phone number"
            onFocus={(e) => e.target.style.borderColor = blue}
            onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "600",
            color: blue,
            marginBottom: "8px"
          }}>
            Program *
          </label>
          <select
            name="program"
            required
            value={formData.program}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "16px",
              boxSizing: "border-box",
              backgroundColor: "white",
              transition: "border-color 0.3s ease",
              cursor: "pointer"
            }}
            onFocus={(e) => e.target.style.borderColor = blue}
            onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
          >
            <option value="">Select a program</option>
            <option value="Day Care">Day Care</option>
            <option value="Play Group">Play Group</option>
            <option value="Nursery">Nursery</option>
            <option value="Jr. KG">Jr. KG</option>
            <option value="Sr. KG">Sr. KG</option>
            <option value="Class I">Class I</option>
            <option value="Class II">Class II</option>
            <option value="Class III">Class III</option>
            <option value="Class IV">Class IV</option>
            <option value="Class V">Class V</option>
          </select>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "600",
            color: blue,
            marginBottom: "8px"
          }}>
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "2px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "16px",
              minHeight: "100px",
              resize: "vertical",
              boxSizing: "border-box",
              transition: "border-color 0.3s ease"
            }}
            placeholder="Any additional information..."
            onFocus={(e) => e.target.style.borderColor = blue}
            onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: blue,
            color: "white",
            padding: "16px",
            borderRadius: "8px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            transition: "all 0.3s",
            boxShadow: "0 4px 6px rgba(30, 58, 138, 0.2)"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1e40af";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 8px rgba(30, 58, 138, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = blue;
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 6px rgba(30, 58, 138, 0.2)";
          }}
        >
          📨 Submit via WhatsApp
        </button>
        <p style={{
          fontSize: "12px",
          color: "#999",
          textAlign: "center",
          marginTop: "12px",
          lineHeight: 1.4
        }}>
          By submitting, you agree to be contacted via WhatsApp
        </p>
      </form>
    </div>
  </div>
)}

      {/* TOP BAR - FIXED: Added same container as Hero */}
      <div style={{
        background: blue,
        color: "white",
        padding: "8px 0",
        width: "100%"
      }}>
        <div style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 16px",
          boxSizing: "border-box"
        }}>
          <span style={{ fontSize: "14px" }}>📞 9000894995</span>
          {!isMobile && <span style={{ fontSize: "14px" }}>✉️ info@alphabetz.in</span>}
        </div>
      </div>

      {/* MAIN HEADER - FIXED: Exact same container as Hero */}
      <header style={{
        background: "white",
        position: "sticky",
        top: 0,
        zIndex: 40,
        boxShadow: "0 4px 6px rgba(0,0,0,.1)",
        width: "100%"
      }}>
        <div style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box"
        }}>
          {/* LOGO SECTION */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "flex-start" : "center", // ✅ left on mobile
            justifyContent: "center",
            cursor: "pointer"
          }}
            onClick={() => scrollToSection("home")}
          >
            <div style={{
              fontSize: isMobile ? "11px" : "13px",
              letterSpacing: "1px",
              fontWeight: 700,
              color: "#6b7280",
              marginBottom: "4px",
              textAlign: isMobile ? "left" : "center", // ✅ left on mobile
              whiteSpace: "nowrap",
              marginLeft: "8px",
            
            }}>
              AN INDIREDDY ARUNA EDUCATIONAL SOCIETY
            </div>

            <img
              src={logo}
              alt="Logo"
              style={{
                height: "80px",
                width: "auto",
                objectFit: "contain",
                marginRight: "28px"
              }}
            />
          </div>


          {/* DESKTOP NAVIGATION */}
          {!isMobile && (
            <nav style={{
              display: "flex",
              gap: "28px",
              alignItems: "center",
              marginLeft: "auto" 
            }}>
              {["home", "about", "programs", "facilities", "gallery", "contact"].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "15px",
                    fontWeight: 600,
                    cursor: "pointer",
                    color: activeNav === item ? pink : "#374151",
                    position: "relative",
                    paddingBottom: "4px",
                    transition: "color 0.3s ease",
                    whiteSpace: "nowrap"
                  }}
                >
                  {item.toUpperCase()}
                  {activeNav === item && (
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        height: "2px",
                        width: "100%",
                        background: pink
                      }}
                    />
                  )}
                </button>
              ))}
            </nav>
          )}

          {/* MOBILE MENU BUTTON */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                fontSize: "26px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#374151",
                padding: "8px"
              }}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {isMobile && isMenuOpen && (
          <div style={{
            padding: "16px",
            borderTop: "1px solid #e5e7eb",
            background: "white",
            width: "100%",
            boxSizing: "border-box"
          }}>
            <div style={{
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 16px"
            }}>
              {["home", "about", "programs", "facilities", "gallery", "contact"].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "12px 16px",
                    background: activeNav === item ? "#fef3c7" : "transparent",
                    border: "none",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: activeNav === item ? pink : "#374151",
                    borderRadius: "8px",
                    marginBottom: "4px",
                    cursor: "pointer"
                  }}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* FLOATING ADMISSION BUTTON */}
      <button
      onClick={() => setIsAdmissionOpen(true)}
      style={{
        position: "fixed",
        right: "0px",              // ✅ force exact right edge
        top: "50%",
        transform: "translateY(-50%)",
        background: pink,
        color: "white",
        border: "none",
        borderRadius: "20px 0 0 20px",
        padding: "14px 12px",
        fontWeight: "bold",
        writingMode: "vertical-rl",
        cursor: "pointer",
        zIndex: 9999,              // ✅ above everything
        boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease"
      }}
      >
        🎓 ADMISSION ENQUIRY
      </button>
    </>
  );
}