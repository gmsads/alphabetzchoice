export default function Programs() {
  const sectionStyle = {
    padding: '60px 16px',
    backgroundColor: 'white'
  };

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '48px'
  };

  const h2Style = {
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: '12px'
  };

  const highlightStyle = {
    color: '#facc15'
  };

  const dividerStyle = {
    width: '80px',
    height: '4px',
    backgroundColor: '#ec4899',
    margin: '0 auto 20px',
    borderRadius: '2px'
  };

  const subtitleStyle = {
    fontSize: 'clamp(16px, 2.5vw, 20px)',
    color: '#4b5563',
    maxWidth: '768px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
    margin: '0 auto 48px',
    maxWidth: '1024px'
  };

  const cardStyle = {
    background: 'linear-gradient(135deg, #fef3c7, #fef08a)',
    borderRadius: '20px',
    padding: '28px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    minHeight: '380px',
    display: 'flex',
    flexDirection: 'column'
  };

  const cardStyle2 = {
    background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
    borderRadius: '20px',
    padding: '28px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    minHeight: '380px',
    display: 'flex',
    flexDirection: 'column'
  };

  const headerIconStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px'
  };

  const iconBoxStyle = {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    fontSize: '28px',
    flexShrink: 0
  };

  const classItemStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
    transition: 'transform 0.2s'
  };

  const classNameStyle = {
    fontWeight: '600',
    color: '#1e3a8a',
    fontSize: '15px'
  };

  const badgeStyle = {
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold'
  };

  const learningMethodsStyle = {
    background: 'linear-gradient(135deg, #fef3c7, #fcd34d)',
    borderRadius: '20px',
    padding: '32px 24px',
    marginBottom: '48px',
    marginTop: '48px'
  };

  const methodsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '32px'
  };

  const methodCardStyle = {
    backgroundColor: 'white',
    borderRadius: '14px',
    padding: '24px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    height: '100%'
  };

  const methodIconStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
    fontSize: '26px',
    color: 'white'
  };

  // Age Groups Section Styles
  const ageGroupsContainerStyle = {
    marginBottom: '64px'
  };

  const ageGroupsTitleStyle = {
    fontSize: 'clamp(28px, 4vw, 36px)',
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: '32px'
  };

  const ageGroupsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px'
  };

  const ageGroupCardStyle = {
    background: 'linear-gradient(135deg, #ffffff, #f8fafc)',
    borderRadius: '20px',
    padding: '24px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '3px solid transparent',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '420px'
  };

  const ageGroupImageContainer = {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    margin: '0 auto 20px',
    overflow: 'hidden',
    border: '5px solid',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
    position: 'relative'
  };

  const ageGroupImage = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  };

  const ageGroupTitleStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: '12px',
    minHeight: '28px'
  };

  const ageBadgeStyle = {
    display: 'inline-block',
    padding: '8px 18px',
    backgroundColor: '#fef3c7',
    color: '#92400e',
    borderRadius: '25px',
    fontSize: '15px',
    fontWeight: '700',
    marginBottom: '18px',
    border: '2px solidrgb(36, 165, 251)'
  };

  const ageGroupDescriptionStyle = {
    fontSize: '15px',
    color: '#4b5563',
    lineHeight: '1.6',
    marginTop: 'auto',
    padding: '0 8px'
  };

  // Age Groups Data with inline images
  const ageGroups = [
    {
      title: 'Play Group',
      age: '2-3 years',
      description: 'Early sensory development through play-based learning',
      color: '#facc15',
      bgColor: '#fef3c7',
      imageUrl: 'data:image/jpeg;base64,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'
    },
    {
      title: 'Nursery',
      age: '3-4 years',
      description: 'Creative expression and basic learning skills development',
      color: '#ec4899',
      bgColor: '#fce7f3',
      imageUrl: 'https://media.istockphoto.com/id/1151191102/photo/children-drawing-at-preschool.jpg?s=612x612&w=0&k=20&c=5hlXwPpjQRxkrWD2xR4jFwjzkTPwkcJ8J5vj0I8wEaE='
    },
    {
      title: 'Junior KG',
      age: '4-5 years',
      description: 'Interactive learning with alphabet and number recognition',
      color: '#3b82f6',
      bgColor: '#dbeafe',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQqlhWxcq7yQ1DtTU8qhchLtqzLs2sx_Low&s'
    },
    {
      title: 'Senior KG',
      age: '5-6 years',
      description: 'Advanced concepts preparation for formal schooling',
      color: '#10b981',
      bgColor: '#d1fae5',
      imageUrl: 'https://www.shutterstock.com/image-photo/happy-indian-asian-curious-little-260nw-2567831923.jpg'
    },
    {
      title: 'Day Care',
      age: '4-14 years',
      description: 'Safe environment with activities and homework support',
      color: '#8b5cf6',
      bgColor: '#ede9fe',
      imageUrl: 'https://media.istockphoto.com/id/1151224308/photo/teachers-with-children-learning-at-preschool.jpg?s=612x612&w=0&k=20&c=8DTKc4VYvTuPddcrgoCYBH9hjKQdV5qzkgg0nOEhuoo='
    }
  ];

  const preschoolClasses = [
    {
      name: 'Day Care',
      badge: 'Available',
      badgeBg: '#3b82f6',  // Blue background for badge
      badgeColor: 'white',   // White text for badge
      color: '#1e3a8a'       // Dark blue color for class name text
    },
    {
      name: 'Play Group',
      badge: 'Available',
      badgeBg: '#3b82f6',   // Blue background for badge
      badgeColor: 'white',    // White text for badge
      color: '#1e3a8a'        // Dark blue color for class name text
    },
    {
      name: 'Nursery',
      badge: 'Available',
      badgeBg: '#3b82f6',   // Blue background for badge
      badgeColor: 'white',    // White text for badge
      color: '#1e3a8a'        // Dark blue color for class name text
    },
    {
      name: 'Jr. KG',
      badge: 'Available',
      badgeBg: '#3b82f6',   // Blue background for badge
      badgeColor: 'white',    // White text for badge
      color: '#1e3a8a'        // Dark blue color for class name text
    },
    {
      name: 'Sr. KG',
      badge: 'Available',
      badgeBg: '#3b82f6',   // Blue background for badge
      badgeColor: 'white',    // White text for badge
      color: '#1e3a8a'        // Dark blue color for class name text
    }
  ];

  const primaryClasses = [
    { name: 'Class I', badge: 'Available', badgeBg: '#3b82f6', color: 'white' },
    { name: 'Class II', badge: 'Available', badgeBg: '#3b82f6', color: 'white' },
    { name: 'Class III', badge: 'Available', badgeBg: '#3b82f6', color: 'white' },
    { name: 'Class IV', badge: 'Available', badgeBg: '#3b82f6', color: 'white' },
    { name: 'Class V', badge: 'Available', badgeBg: '#3b82f6', color: 'white' }
  ];

  const methods = [
    { icon: '📚', title: 'Montessori Methodology', text: 'Self-directed, hands-on learning', bg: '#ec4899' },
    { icon: '📘', title: ' CBSE Integrated Syllabus', text: 'International standard education', bg: '#3b82f6' },
    { icon: '🎨', title: '100% Visual Digital Learning', text: 'Interactive multimedia education', bg: '#facc15' },
    { icon: '🎬', title: 'Audio Visual Learning', text: 'Engaging sensory experiences', bg: '#ec4899' }
  ];

  // Media query styles
  const mediaQueries = `
    @media (max-width: 768px) {
      .age-group-card {
        min-height: 380px;
      }
      .age-group-image {
        width: 140px;
        height: 140px;
      }
      .class-item:hover {
        transform: translateX(5px);
      }
    }
    
    @media (max-width: 480px) {
      .age-group-card {
        min-height: 350px;
        padding: 20px;
      }
      .age-group-image {
        width: 120px;
        height: 120px;
      }
      .age-group-title {
        font-size: 20px;
      }
      .age-badge {
        font-size: 14px;
        padding: 6px 16px;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueries}</style>
      <section id="programs" style={sectionStyle}>
        <div style={containerStyle}>
          <div style={headerStyle}>
            <h2 style={h2Style}>
              Our <span style={highlightStyle}>Programs</span>
            </h2>
            <div style={dividerStyle}></div>
            <p style={subtitleStyle}>
              Our extracurricular activities combined with our digital lesson planning tool enable teachers to create personalized learning experiences, appropriate to every age group.
            </p>
          </div>

          {/* Age Groups Section */}
          <div style={ageGroupsContainerStyle}>
            <h3 style={ageGroupsTitleStyle}>Age-Specific Programs</h3>
            <div style={ageGroupsGridStyle}>
              {ageGroups.map((group, index) => (
                <div
                  key={index}
                  className="age-group-card"
                  style={ageGroupCardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                    e.currentTarget.style.borderColor = group.color;
                    e.currentTarget.style.background = `linear-gradient(135deg, ${group.bgColor}, #ffffff)`;

                    const img = e.currentTarget.querySelector('img');
                    if (img) {
                      img.style.transform = 'scale(1.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff, #f8fafc)';

                    const img = e.currentTarget.querySelector('img');
                    if (img) {
                      img.style.transform = 'scale(1)';
                    }
                  }}
                >
                  <div
                    className="age-group-image"
                    style={{
                      ...ageGroupImageContainer,
                      borderColor: group.color
                    }}
                  >
                    <img
                      src={group.imageUrl}
                      alt={`${group.title} - Age ${group.age}`}
                      style={ageGroupImage}
                    />
                  </div>
                  <h4 className="age-group-title" style={ageGroupTitleStyle}>{group.title}</h4>
                  <div className="age-badge" style={ageBadgeStyle}>Age: {group.age}</div>
                  <p style={ageGroupDescriptionStyle}>{group.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Preschool and Primary School Cards */}
          <div style={gridStyle}>
            <div style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.1)';
              }}>
              <div style={headerIconStyle}>
                <div style={{ ...iconBoxStyle, backgroundColor: '#facc15' }}>👶</div>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1e3a8a', margin: 0 }}>Preschool</h3>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {preschoolClasses.map((cls, idx) => (
                  <div
                    key={idx}
                    className="class-item"
                    style={classItemStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.backgroundColor = '#fff7ed';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                  >
                    <span style={classNameStyle}>{cls.name}</span>
                    <span style={{
                      ...badgeStyle,
                      backgroundColor: cls.badgeBg,
                      color: cls.badgeColor  // Use badgeColor instead of cls.color
                    }}>
                      {cls.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={cardStyle2}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.1)';
              }}>
              <div style={headerIconStyle}>
                <div style={{ ...iconBoxStyle, backgroundColor: '#3b82f6' }}>🎓</div>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1e3a8a', margin: 0 }}>Primary School</h3>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {primaryClasses.map((cls, idx) => (
                  <div
                    key={idx}
                    className="class-item"
                    style={classItemStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.backgroundColor = '#eff6ff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                  >
                    <span style={classNameStyle}>{cls.name}</span>
                    <span style={{ ...badgeStyle, backgroundColor: cls.badgeBg, color: cls.color }}>
                      {cls.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Learning Methods */}
          <div style={learningMethodsStyle}>
            <h3 style={{ fontSize: 'clamp(24px, 3vw, 28px)', fontWeight: 'bold', color: '#1e3a8a', textAlign: 'center', margin: 0 }}>
              Learning Methods at Alphabetz Choice
            </h3>
            <div style={methodsGridStyle}>
              {methods.map((method, idx) => (
                <div
                  key={idx}
                  style={methodCardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <div style={{ ...methodIconStyle, backgroundColor: method.bg }}>
                    {method.icon}
                  </div>
                  <h4 style={{ fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px', fontSize: '18px' }}>
                    {method.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: '1.5' }}>
                    {method.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div style={{
            textAlign: 'center',
            padding: '32px 24px',
            backgroundColor: '#f8fafc',
            borderRadius: '20px',
            border: '3px solid #e2e8f0',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.3s ease',
            maxWidth: '600px',
            margin: '0 auto'
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.12)';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}>
            <h4 style={{
              fontSize: 'clamp(22px, 3vw, 28px)',
              fontWeight: 'bold',
              color: '#1e3a8a',
              marginBottom: '16px'
            }}>
              Contact Us
            </h4>
            <div style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 'bold',
              color: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap'
            }}>
              <span style={{
                fontSize: 'clamp(22px, 3vw, 32px)',
                animation: 'pulse 2s infinite'
              }}>📞</span>
              <span>
                9000894995</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}