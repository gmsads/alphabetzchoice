import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    childName: '',
    parentName: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi, I would like to inquire about admission at Alphabetz Choice School.%0A%0AChild Name: ${formData.childName}%0AParent Name: ${formData.parentName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AProgram: ${formData.program}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919000894995?text=${message}`, '_blank');
    setFormData({ childName: '', parentName: '', email: '', phone: '', program: '', message: '' });
  };

  // Styles
  const sectionStyle = {
    padding: '80px 16px',
    background: 'linear-gradient(to bottom, #f0f9ff, white)'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '64px'
  };

  const h2Style = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: '16px'
  };

  const highlightStyle = {
    color: '#ec4899'
  };

  const dividerStyle = {
    width: '96px',
    height: '4px',
    backgroundColor: '#facc15',
    margin: '0 auto 24px'
  };

  const subtitleStyle = {
    fontSize: '20px',
    color: '#4b5563',
    maxWidth: '768px',
    margin: '0 auto'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: '48px',
    maxWidth: '1440px',
    margin: '0 auto 64px',
    alignItems: 'flex-start'
  };

  const contactItemStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s',
    marginBottom: '24px'
  };

  const contactItemHeaderStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px'
  };

  const iconBoxStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    flexShrink: 0
  };

  const contactItemTitleStyle = {
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: '8px',
    margin: 0
  };

  const contactItemTextStyle = {
    color: '#666',
    fontSize: '14px',
    margin: 0
  };

  const contactItemLinkStyle = {
    color: '#1e3a8a',
    textDecoration: 'none',
    fontWeight: '500'
  };

  const formStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const formGroupStyle = {
    marginBottom: '16px'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: '8px'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '16px',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'none'
  };

  const submitButtonStyle = {
    width: '100%',
    backgroundColor: '#1e3a8a',
    color: 'white',
    padding: '16px',
    borderRadius: '8px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s'
  };

  const ctaCardStyle = {
    background: 'linear-gradient(to right, #1e3a8a, #1e40af)',
    borderRadius: '24px',
    padding: '48px',
    color: 'white',
    textAlign: 'center'
  };

  const ctaTitleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '16px'
  };

  const ctaDescStyle = {
    fontSize: '18px',
    color: '#dbeafe',
    marginBottom: '24px',
    maxWidth: '512px',
    margin: '0 auto 24px'
  };

  const ctaButtonsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px'
  };

  const whatsappButtonStyle = {
    backgroundColor: '#facc15',
    color: '#1e3a8a',
    padding: '16px 32px',
    borderRadius: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
    transition: 'all 0.3s'
  };

  const callButtonStyle = {
    backgroundColor: '#10b981',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
    transition: 'all 0.3s'
  };

  const mapContainerStyle = {
    marginTop: '24px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    height: '300px',
    position: 'relative'
  };

  const mapOverlayStyle = {
    position: 'absolute',
    top: '12px',
    left: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '8px 16px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    zIndex: 10,
    fontSize: '14px',
    fontWeight: '600',
    color: '#1e3a8a',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  };

  const mapLinkStyle = {
    display: 'block',
    marginTop: '10px',
    color: '#1e3a8a',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '14px'
  };

  const actionButtonStyle = {
    padding: '8px 16px',
    backgroundColor: '#f0f9ff',
    borderRadius: '6px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={h2Style}>
            Get In <span style={highlightStyle}>Touch</span>
          </h2>
          <div style={dividerStyle}></div>
          <p style={subtitleStyle}>
            Visit us or contact us for more information
          </p>
        </div>

        <div style={gridStyle}>
          {/* Contact Information Column */}
          <div>
            {/* Location Card */}
            <div 
              style={contactItemStyle} 
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
            >
              <div style={contactItemHeaderStyle}>
                <div style={{ ...iconBoxStyle, backgroundColor: '#dbeafe' }}>📍</div>
                <div>
                  <h3 style={contactItemTitleStyle}>Our Location</h3>
                  <p style={contactItemTextStyle}>
                    Nalanda Nagar, Street Number 21,<br />
                    Hyderguda, Upperpally, Attapur<br />
                    Telangana 500048
                  </p>
                </div>
              </div>

              {/* Google Map */}
              <div style={mapContainerStyle}>
                <div style={mapOverlayStyle}>
                  📍 Alphabetz Choice School
                </div>
                
                <iframe
                  title="Alphabetz International Preschool Attapur"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.183353438089!2d78.4114106!3d17.3625544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97934063c3b7%3A0x81141515d0bdd163!2sAlphabetz%20International%20Preschool%20Attapur!5e0!3m2!1sen!2sin!4v1734960000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <a
                href="https://www.google.com/maps/place/Alphabetz+international+Preschool+Attapur/"
                target="_blank"
                rel="noreferrer"
                style={mapLinkStyle}
              >
                🗺️ Open in Google Maps
              </a>

              <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => window.open('https://maps.google.com/?q=17.3625544,78.4114106', '_blank')}
                  style={{
                    ...actionButtonStyle,
                    border: '1px solid #3b82f6',
                    color: '#1e3a8a'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#dbeafe'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#f0f9ff'}
                >
                  📍 Open in Maps
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('Nalanda Nagar, Street Number 21, Hyderguda, Upperpally, Attapur, Telangana 500048');
                    alert('Address copied to clipboard!');
                  }}
                  style={{
                    ...actionButtonStyle,
                    border: '1px solid #10b981',
                    color: '#065f46'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#d1fae5'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#f0f9ff'}
                >
                  📋 Copy Address
                </button>
              </div>
            </div>

            {/* Phone Number Card */}
            <div 
              style={contactItemStyle}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
            >
              <div style={contactItemHeaderStyle}>
                <div style={{ ...iconBoxStyle, backgroundColor: '#fef3c7' }}>📞</div>
                <div>
                  <h3 style={contactItemTitleStyle}>Phone Number</h3>
                  <a href="tel:9000894995" style={contactItemLinkStyle}>
                    +91 9000894995
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div 
              style={contactItemStyle}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
            >
              <div style={contactItemHeaderStyle}>
                <div style={{ ...iconBoxStyle, backgroundColor: '#fce7f3' }}>✉️</div>
                <div>
                  <h3 style={contactItemTitleStyle}>Email Address</h3>
                  <a href="mailto:info@alphabetzchoice.in" style={contactItemLinkStyle}>
                  info@alphabetzchoice.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Admission Enquiry Form */}
          <div style={formStyle}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '24px', marginTop: 0 }}>
              Admission Enquiry Form
            </h3>
            <form onSubmit={handleSubmit}>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Child's Name *</label>
                <input
                  type="text"
                  name="childName"
                  required
                  value={formData.childName}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Enter child's name"
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={formGroupStyle}>
                <label style={labelStyle}>Parent's Name *</label>
                <input
                  type="text"
                  name="parentName"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Enter parent's name"
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={formGroupStyle}>
                <label style={labelStyle}>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Enter email address"
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={formGroupStyle}>
                <label style={labelStyle}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Enter phone number"
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={formGroupStyle}>
                <label style={labelStyle}>Program *</label>
                <select
                  name="program"
                  required
                  value={formData.program}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
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
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={textareaStyle}
                  placeholder="Any additional information..."
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                ></textarea>
              </div>

              <button
                type="submit"
                style={submitButtonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1e40af'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#1e3a8a'}
              >
                📨 Submit Enquiry
              </button>
              <p style={{ fontSize: '12px', color: '#999', textAlign: 'center', marginTop: '12px' }}>
                By submitting, you agree to be contacted via WhatsApp
              </p>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div style={ctaCardStyle}>
          <h3 style={ctaTitleStyle}>Ready to Enroll Your Child?</h3>
          <p style={ctaDescStyle}>
            Join the Alphabetz Choice family and give your child the best start in their educational journey
          </p>
          <div style={ctaButtonsStyle}>
            <a
              href="https://wa.me/919000894995?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20admission%20at%20Alphabetz%20Choice%20School"
              target="_blank"
              rel="noopener noreferrer"
              style={whatsappButtonStyle}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              💬 Contact Us on WhatsApp
            </a>
            <a
              href="tel:9000894995"
              style={callButtonStyle}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}