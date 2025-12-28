export default function WhatsAppButton() {
  const buttonStyle = {
    position: "fixed",
    bottom: "24px",
    left: "24px",
    zIndex: 50,
    backgroundColor: "#25D366",
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    textDecoration: "none",
    transition: "transform 0.3s ease",
    border: "none",
    cursor: "pointer",
  };

  return (
    <>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .whatsapp-btn {
          animation: bounce 2s ease-in-out infinite;
        }

        .whatsapp-btn:hover {
          animation: none;
          transform: scale(1.15);
        }
      `}</style>

      <a
        href="https://wa.me/919000894995?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Alphabetz%20Choice%20School"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        style={buttonStyle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FFFFFF"
            d="M24 4C12.95 4 4 12.95 4 24c0 3.5.9 6.8 2.6 9.7L4 44l10.6-2.8C17.5 42.8 20.7 44 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4z"
          />
          <path
            fill="#25D366"
            d="M34.6 29.3c-.5-.3-3-1.5-3.4-1.7-.5-.2-.8-.3-1.1.3-.3.5-1.3 1.7-1.6 2-.3.3-.6.4-1.1.1-.5-.3-2.1-.8-4-2.5-1.5-1.3-2.5-2.9-2.8-3.4-.3-.5 0-.8.2-1.1.2-.2.5-.6.7-.9.2-.3.3-.5.5-.8.2-.3.1-.6 0-.9-.1-.3-1.1-2.7-1.5-3.7-.4-1-.8-.9-1.1-.9h-.9c-.3 0-.9.1-1.3.6-.4.5-1.7 1.6-1.7 4 0 2.4 1.7 4.7 2 5 .3.3 3.4 5.2 8.3 7.3 1.2.5 2.1.8 2.8 1 .9.3 1.8.3 2.5.2.8-.1 3-1.2 3.4-2.4.4-1.2.4-2.2.3-2.4-.1-.2-.4-.3-.9-.6z"
          />
        </svg>
      </a>
    </>
  );
}
