export default function Facilities() {
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
    gridTemplateColumns: window.innerWidth > 1024 ? 'repeat(3, 1fr)' : window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
    gap: '24px',
    marginBottom: '48px'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s'
  };

  const facilityItemStyle = {
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

  const facilitiesData = [
    { icon: '📹', title: 'CCTV Access', text: '24*7 100% Safe and  Secure', color: '#fef3c7' },
    { icon: '📚', title: 'Friendly Environment" ', text: 'Integrated & Child-Friendly Curriculum', color: '#fce7f3' },
    { icon: '🌐', title: 'International Education @ Affordable Cost', text: 'Global curriculum standards delivered at a parent-friendly fee structure', color: '#ecfeff' },
    { icon: '❄️', title: 'Well-Ventilated & Spacious Classrooms', text: 'Comfortable learning environment all year round', color: '#dbeafe' },
    { icon: '👥', title: 'Class Strength: 25', text: 'Optimal student-teacher ratio for individual attention', color: '#fce7f3' },
    { icon: '📺', title: 'Audiovisual Classrooms', text: 'Interactive smart boards and digital learning tools', color: '#fef3c7' },
    { icon: '💻', title: 'Computer Laboratory', text: 'Modern computer lab with latest technology', color: '#dbeafe' },
    { icon: '🧪', title: 'Science Laboratory', text: 'Well-equipped lab for hands-on experiments', color: '#fce7f3' },
    { icon: '🏆', title: 'Sports Facilities', text: 'Art, Craft, Music & Rhymes Activities and more', color: '#fef3c7' },
    { icon: '⚽', title: 'Child Play Area', text: 'Safe and fun outdoor playground', color: '#dbeafe' },
    { icon: '👩‍🏫', title: 'Highly Qualified Teachers', text: 'Experienced and trained educators', color: '#fce7f3' },
    { icon: '🧩 ', title: 'Extra Activity', text: 'Hands-on Activities & Project-Based Learning', color: '#fef3c7' }

  ];

  const statsCardStyle = {
    background: 'linear-gradient(to right, #1e3a8a, #1e40af)',
    borderRadius: '24px',
    padding: '32px 48px',
    color: 'white'
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
    gap: '32px',
    textAlign: 'center'
  };

  const statNumberStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#facc15',
    marginBottom: '8px'
  };

  const statTextStyle = {
    fontSize: '18px',
    color: '#dbeafe'
  };

  return (
    <section id="facilities" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={h2Style}>
            Our <span style={highlightStyle}>Facilities</span>
          </h2>
          <div style={dividerStyle}></div>
          <p style={subtitleStyle}>
            World-class infrastructure and amenities for holistic child development
          </p>
        </div>

        <div style={gridStyle}>
          {facilitiesData.map((facility, idx) => (
            <div key={idx} style={cardStyle} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.15)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}>
              <div style={facilityItemStyle}>
                <div style={{...iconBoxStyle, backgroundColor: facility.color}}>
                  {facility.icon}
                </div>
                <div>
                  <h3 style={{fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px', margin: 0}}>{facility.title}</h3>
                  <p style={{fontSize: '14px', color: '#666', margin: 0}}>{facility.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
