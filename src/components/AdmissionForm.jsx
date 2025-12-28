import { useState } from "react";
import { X, Send } from "lucide-react";

export default function AdmissionForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    childName: "",
    parentName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hi, I would like to inquire about admission at Alphabetz Choice School.%0A%0AChild Name: ${formData.childName}%0AParent Name: ${formData.parentName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AProgram: ${formData.program}%0AMessage: ${formData.message}`;

    window.open(
      `https://wa.me/919000894995?text=${whatsappMessage}`,
      "_blank"
    );

    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  const formContainerStyle = {
    position: 'fixed',
    right: 0,
    top: 0,
    height: '100vh',
    width: '100%',
    backgroundColor: '#ffffff',
    boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
    zIndex: 100,
    overflowY: 'auto',
    animation: 'slideIn 0.3s ease-out',
  };

  const headerStyle = {
    position: 'sticky',
    top: 0,
    background: 'linear-gradient(to right, #1e3b8a, #1e40af)',
    color: '#ffffff',
    padding: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const headerTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const closeButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#ffffff',
    padding: '8px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const formStyle = {
    padding: '24px',
  };

  const formGroupStyle = {
    marginBottom: '16px',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#1e3b8a',
    marginBottom: '8px',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    fontSize: '1rem',
    transition: 'border-color 0.3s',
    boxSizing: 'border-box',
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none',
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'none',
  };

  const submitButtonStyle = {
    width: '100%',
    background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
    color: '#ffffff',
    padding: '16px',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  };

  const disclaimerStyle = {
    fontSize: '0.75rem',
    color: '#6b7280',
    textAlign: 'center',
    marginTop: '16px',
  };

  return (
    <div style={formContainerStyle}>
      <div style={headerStyle}>
        <h3 style={headerTitleStyle}>Admission Enquiry</h3>
        <button
          onClick={onClose}
          style={closeButtonStyle}
        >
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>
            Child's Name *
          </label>
          <input
            type="text"
            name="childName"
            required
            value={formData.childName}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter child's name"
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>
            Parent's Name *
          </label>
          <input
            type="text"
            name="parentName"
            required
            value={formData.parentName}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter parent's name"
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter email address"
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter phone number"
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>
            Program *
          </label>
          <select
            name="program"
            required
            value={formData.program}
            onChange={handleChange}
            style={selectStyle}
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

        <div style={formGroupStyle}>
          <label style={labelStyle}>
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            style={textareaStyle}
            placeholder="Any additional information..."
          />
        </div>

        <button
          type="submit"
          style={submitButtonStyle}
        >
          <Send size={20} />
          Submit Enquiry
        </button>

        <p style={disclaimerStyle}>
          By submitting, you agree to be contacted via WhatsApp
        </p>
      </form>
      <style>{`
        @media (min-width: 768px) {
          div[style*="width: '100%'"] {
            width: 384px !important;
          }
        }
        
        input:focus, select:focus, textarea:focus {
          border-color: #3b82f6 !important;
          outline: none;
        }
        
        button[style*="background: linear-gradient"]:hover {
          background: linear-gradient(to right, #1d4ed8, #1e40af) !important;
          transform: scale(1.02);
        }
        
        button[style*="background: transparent"]:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}