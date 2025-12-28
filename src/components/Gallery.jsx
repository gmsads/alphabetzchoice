import { useState, useEffect, useRef } from 'react';
import D2 from '../assets/D2.jpeg';
import D5 from '../assets/D5.jpeg';
import B1 from '../assets/B1.jpeg';
import B2 from '../assets/B2.jpeg';
import B3 from '../assets/B3.jpeg';
import Y1 from '../assets/Y1.jpeg';
import Y2 from '../assets/Y2.jpeg';
import Y3 from '../assets/Y3.jpeg';
import K1 from '../assets/K1.jpeg';
import K4 from '../assets/K4.jpeg';
import K2 from '../assets/K2.jpeg';
import K5 from '../assets/K5.jpeg';
import K3 from '../assets/K3.jpeg';
import I1 from '../assets/I1.jpeg';
import I2 from '../assets/I2.jpeg';
import I3 from '../assets/I3.jpeg';
import I4 from '../assets/I4.jpeg';
import N1 from '../assets/N1.jpeg';
import N2 from '../assets/N2.jpeg';
import N3 from '../assets/N3.jpeg';
import N4 from '../assets/N4.jpeg';
import N5 from '../assets/N5.jpeg';
import F1 from '../assets/F1.jpeg';
import F2 from '../assets/F2.jpeg';
import F3 from '../assets/F3.jpeg';
import F4 from '../assets/F4.jpeg';
import F5 from '../assets/F5.jpeg';
import C1 from '../assets/C1.jpeg';
import C2 from '../assets/C2.jpeg';
import C3 from '../assets/C3.jpeg';
import C4 from '../assets/C4.jpeg';
import C5 from '../assets/C5.jpeg';
import R1 from '../assets/R1.jpeg';
import R2 from '../assets/R2.jpeg';
import R3 from '../assets/R3.jpeg';
import R4 from '../assets/R4.jpeg';
import R5 from '../assets/R5.jpeg';
import T1 from '../assets/T1.jpeg';
import T2 from '../assets/T2.jpeg';
import T3 from '../assets/T3.jpeg';
import T4 from '../assets/T4.jpeg';
import T5 from '../assets/T5.jpeg';
import DP1 from '../assets/DP1.jpeg';
import DP2 from '../assets/DP2.jpeg';
import DP3 from '../assets/DP3.jpeg';
import DP4 from '../assets/DP4.jpeg';
import DP5 from '../assets/DP5.jpeg';
import CH1 from '../assets/CH1.jpeg';
import CH2 from '../assets/CH2.jpeg';
import CH3 from '../assets/CH3.jpeg';
import CH4 from '../assets/CH4.jpeg';
import CH5 from '../assets/CH5.jpeg';
import TH1 from '../assets/TH5.jpeg';
import TH2 from '../assets/TH2.jpeg';
import TH3 from '../assets/TH3.jpeg';
import TH4 from '../assets/TH4.jpeg';
import TH5 from '../assets/TH5.jpeg';
import GC1 from '../assets/GC1.jpeg';
import GC2 from '../assets/GC2.jpeg';
import GC3 from '../assets/GC3.jpeg';
import GC4 from '../assets/GC4.jpeg';
import GC5 from '../assets/GC5.jpeg';
import GP1 from '../assets/GP1.jpeg';
import GP2 from '../assets/GP2.jpeg';
import GP3 from '../assets/GP3.jpeg';
import GP4 from '../assets/GP4.jpeg';
import GP5 from '../assets/GP5.jpeg';
import SK1 from '../assets/SK1.jpeg';
import SK2 from '../assets/SK2.jpeg';
import SK3 from '../assets/SK3.jpeg';
import SK4 from '../assets/SK4.jpeg';
import SK5 from '../assets/SK5.jpeg';
import FR1 from '../assets/FR1.jpeg';
import FR2 from '../assets/FR2.jpeg';
import FR3 from '../assets/FR3.jpeg';
import FR4 from '../assets/FR4.jpeg';
import FR5 from '../assets/FR5.jpeg';
import YG1 from '../assets/YG1.jpeg';
import YG2 from '../assets/YG2.jpeg';
import YG3 from '../assets/YG3.jpeg';
import YG4 from '../assets/YG3.jpeg';
import YG5 from '../assets/YG5.jpeg';
import M1 from '../assets/M1.jpeg';
import M2 from '../assets/M2.jpeg';
import M3 from '../assets/M3.jpeg';
import M4 from '../assets/M4.jpeg';
import M5 from '../assets/M5.jpeg';
import G1 from '../assets/G1.jpeg';
import G2 from '../assets/G2.jpeg';
import G3 from '../assets/G3.jpeg';
import G4 from '../assets/G4.jpeg';
import G5 from '../assets/G5.jpeg';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('festivals');
  const [activeFestival, setActiveFestival] = useState('dussehra');
  const [currentSlideIndex, setCurrentSlideIndex] = useState({});
  const slideIntervalRef = useRef({});
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // CORRECTED gallery categories with proper IDs
  const galleryCategories = [
    { id: 'independenceDay', name: 'Independence Day', icon: '✌️', color: '#FF9800' },
    { id: 'friendshipDay', name: 'Friendship Day', icon: '🕊️', color: '#4CAF50' },
    { id: 'graduationDay', name: 'Graduation Day', icon: '👶', color: '#FF4081' }, // Fixed: 'graduationDay' not 'graduction'
    { id: 'teachersDay', name: 'Teachers\' Day', icon: '👩‍🏫', color: '#2196F3' },
    { id: 'festivals', name: 'Festivals', icon: '🎊', color: '#FF6B8B' },
    { id: 'fashionDay', name: 'Fashion Day', icon: '👗', color: '#9C27B0' },
    { id: 'trip', name: 'Field Trip', icon: '🚌', color: '#673AB7' },
    { id: 'internationalYogaDay', name: 'International Yoga Day', icon: '🧘‍♀️', color: '#4CAF50' }, // Fixed: 'internationalYogaDay' not 'international yoga Day'
    { id: 'fathersDay', name: 'Father\'s Day', icon: '👨‍👧‍👦', color: '#2196F3' },
    { id: 'mothersDay', name: 'Mother\'s Day', icon: '👩‍👧‍👦', color: '#E91E63' },
    { id: 'grandparentsDay', name: 'Grandparents\' Day', icon: '👵👴', color: '#795548' },
    { id: 'communityHelpers', name: 'Community Helpers', icon: '👮‍♀️', color: '#FF9800' },
    { id: 'yellowDay', name: 'Yellow Day', icon: '💛', color: '#FFEB3B' },
    { id: 'redDay', name: 'Red Day', icon: '❤️', color: '#F44336' },
  ];

  const festivalSubCategories = [
    { id: 'sankranti', name: 'Sankranti', icon: '🪁', color: '#FF5722' },
    { id: 'diwali', name: 'Diwali', icon: '🪔', color: '#FF9800' },
    { id: 'ganeshChaturthi', name: 'Ganesh Chaturthi', icon: '🐘', color: '#4CAF50' },
    { id: 'dussehra', name: 'Dussehra', icon: '🛕', color: '#FF5722' },
    { id: 'ugadi', name: 'Ugadi', icon: '🌿', color: '#4CAF50' },
    { id: 'krishnashtami', name: 'Krishnashtami', icon: '🕉️', color: '#9C27B0' },
    { id: 'christmas', name: 'Christmas', icon: '🎄', color: '#4CAF50' },
    { id: 'bonalu', name: 'Bonalu', icon: '🏮', color: '#2196F3' },
  ];

  // Festival images
  const festivalImages = {
    sankranti: [
      { id: 1, url: SK1, title: 'Kite Flying' },
      { id: 2, url: SK2, title: 'Traditional Celebration' },
      { id: 3, url: SK3, title: 'Colorful Kites' },
      { id: 4, url: SK4, title: 'Festival Joy' },
      { id: 5, url: SK5, title: 'Sankranti Crafts' },
    ],
    dussehra: [
      { id: 1, url: D2, title: 'Ravana Effigy' },
      { id: 2, url: D5, title: 'Dussehra Celebration' },
      { id: 3, url: 'https://images.unsplash.com/photo-1631713068277-ff8f78b2f379?w=800&h=600&fit=crop', title: 'Cultural Program' },
      { id: 4, url: 'https://images.unsplash.com/photo-1631713068078-5c9b8b5b5b5b?w=800&h=600&fit=crop', title: 'Traditional Dance' },
      { id: 5, url: 'https://images.unsplash.com/photo-1631713068127-ff8f78b2f379?w=800&h=600&fit=crop', title: 'Festival Decorations' },
    ],
    diwali: [
      { id: 1, url: DP1, title: 'Diya Decoration' },
      { id: 2, url: DP2, title: 'Rangoli Art' },
      { id: 3, url: DP3, title: 'Fireworks' },
      { id: 4, url: DP4, title: 'Diwali Celebrations' },
      { id: 5, url: DP5, title: 'Traditional Lamps' },
    ],
    krishnashtami: [
      { id: 1, url: K4, title: 'Krishna Decoration' },
      { id: 2, url: K2, title: 'Dahi Handi' },
      { id: 3, url: K5, title: 'Traditional Dress' },
      { id: 4, url: K1, title: 'Festival Joy' },
      { id: 5, url: K3, title: 'Cultural Dance' },
    ],
    christmas: [
      { id: 1, url: C1, title: 'Christmas Tree' },
      { id: 2, url: C2, title: 'Santa Claus Visit' },
      { id: 3, url: C3, title: 'Gift Exchange' },
      { id: 4, url: C4, title: 'Christmas Carols' },
      { id: 5, url: C5, title: 'Decorations' },
    ],
    ugadi: [
      { id: 1, url: 'https://images.unsplash.com/photo-1612231639299-6c7a87b3dd6b?w=800&h=600&fit=crop', title: 'Ugadi Pachadi' },
      { id: 2, url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop', title: 'Traditional Celebration' },
      { id: 3, url: 'https://images.unsplash.com/photo-1612231639345-4d46d4e9c5b8?w=800&h=600&fit=crop', title: 'New Year Celebration' },
      { id: 4, url: 'https://images.unsplash.com/photo-1612231639247-3b0c7b1c5b5f?w=800&h=600&fit=crop', title: 'Festival Decorations' },
      { id: 5, url: 'https://images.unsplash.com/photo-1612231639307-6c7a87b3dd6c?w=800&h=600&fit=crop', title: 'Cultural Programs' },
    ],
    ganeshChaturthi: [
      { id: 1, url: GC1, title: 'Ganesh Idol' },
      { id: 2, url: GC2, title: 'Traditional Puja' },
      { id: 3, url: GC3, title: 'Festival Celebration' },
      { id: 4, url: GC4, title: 'Cultural Programs' },
      { id: 5, url: GC5, title: 'Community Gathering' },
    ],
    bonalu: [
      { id: 1, url: B1, title: 'Bonalu Procession' },
      { id: 2, url: B2, title: 'Traditional Rituals' },
      { id: 3, url: B3, title: 'Festival Decorations' },
      { id: 4, url: 'https://images.unsplash.com/photo-1560844894-2c1bae3c44b3?w=800&h=600&fit=crop', title: 'Cultural Dance' },
      { id: 5, url: 'https://images.unsplash.com/photo-1547825407-12a43531c2f7?w=800&h=600&fit=crop', title: 'Community Gathering' },
    ],
  };

  // CORRECTED other images with proper IDs
  const otherImages = {
    independenceDay: [
      { id: 1, url: I1, title: 'Independence Day Celebration' },
      { id: 2, url: I2, title: 'Flag Hosting Ceremony' },
      { id: 3, url: I3, title: 'Patriotic Dance' },
      { id: 4, url: I4, title: 'Freedom Fighters Skit' },
      { id: 5, url: 'https://images.unsplash.com/photo-1621277223235-294594f5c0b8?w=800&h=600&fit=crop', title: 'National Anthem' },
    ],
    friendshipDay: [ // Fixed: 'friendshipDay' matches category ID
      { id: 1, url: FR1, title: 'Friendship Day Celebration' },
      { id: 2, url: FR2, title: 'Friendship Bands' },
      { id: 3, url: FR3, title: 'Friendship Activities' },
      { id: 4, url: FR4, title: 'Friendship Crafts' },
      { id: 5, url: FR5, title: 'Friendship Fun' },
    ],
    graduationDay: [ // Fixed: 'graduationDay' matches category ID
      { id: 1, url: G1, title: 'Graduation Ceremony' },
      { id: 2, url: G2, title: 'Graduation Caps' },
      { id: 3, url: G3, title: 'Certificate Distribution' },
      { id: 4, url: G4, title: 'Graduation Stage' },
      { id: 5, url: G5, title: 'Graduation Memories' },
    ],
    teachersDay: [
      { id: 1, url: TH1, title: 'Teachers\' Day Celebration' },
      { id: 2, url: TH2, title: 'Thank You Cards' },
      { id: 3, url: TH3, title: 'Cultural Program' },
      { id: 4, url: TH4, title: 'Gift Giving' },
      { id: 5, url: TH5, title: 'Special Assembly' },
    ],
    fashionDay: [
      { id: 1, url: F1, title: 'Fashion Show 1' },
      { id: 2, url: F2, title: 'Fashion Show 2' },
      { id: 3, url: F3, title: 'Fashion Show 3' },
      { id: 4, url: F4, title: 'Fashion Show 4' },
      { id: 5, url: F5, title: 'Fashion Show 5' },
    ],
    internationalYogaDay: [ // Fixed: 'internationalYogaDay' matches category ID
      { id: 1, url: YG1, title: 'Yoga Session 1' },
      { id: 2, url: YG2, title: 'Yoga Session 2' },
      { id: 3, url: YG3, title: 'Yoga Session 3' },
      { id: 4, url: YG4, title: 'Yoga Session 4' },
      { id: 5, url: YG5, title: 'Yoga Session 5' },
    ],
    fathersDay: [ // Fixed: 'fathersDay' not 'fathersDay' (was already correct)
      { id: 1, url: N1, title: 'Father\'s Day Celebration' },
      { id: 2, url: N2, title: 'Dad\'s Day Out' },
      { id: 3, url: N3, title: 'Family Fun Time' },
      { id: 4, url: N4, title: 'Special Moments' },
      { id: 5, url: N5, title: 'Father-Child Bonding' },
    ],
    mothersDay: [
      { id: 1, url: M1, title: 'Mother\'s Day Cards' },
      { id: 2, url: M2, title: 'Special Celebration' },
      { id: 3, url: M3, title: 'Gift Making' },
      { id: 4, url: M4, title: 'Family Photos' },
      { id: 5, url: M5, title: 'Love and Hugs' },
    ],
    grandparentsDay: [
      { id: 1, url: GP1, title: 'Grandparents\' Day' },
      { id: 2, url: GP2, title: 'Family Stories' },
      { id: 3, url: GP3, title: 'Traditional Games' },
      { id: 4, url: GP4, title: 'Special Visit' },
      { id: 5, url: GP5, title: 'Love and Wisdom' },
    ],
    communityHelpers: [
      { id: 1, url: CH1, title: 'Police Officer Visit' },
      { id: 2, url: CH2, title: 'Doctor Session' },
      { id: 3, url: CH3, title: 'Firefighter Talk' },
      { id: 4, url: CH4, title: 'Postman Visit' },
      { id: 5, url: CH5, title: 'Community Helpers Day' },
    ],
    yellowDay: [
      { id: 1, url: Y1, title: 'Yellow Day Celebration' },
      { id: 2, url: Y2, title: 'Yellow Crafts' },
      { id: 3, url: Y3, title: 'Yellow Theme Activities' },
      { id: 4, url: Y2, title: 'Learning Colors' },
      { id: 5, url: Y3, title: 'Group Activities' },
    ],
    redDay: [
      { id: 1, url: R1, title: 'Red Day Celebration' },
      { id: 2, url: R2, title: 'Red Crafts' },
      { id: 3, url: R3, title: 'Red Theme Activities' },
      { id: 4, url: R4, title: 'Learning About Red' },
      { id: 5, url: R5, title: 'Red Day Fun' },
    ],
    trip: [
      { id: 1, url: T1, title: 'Field Trip - Zoo Visit' },
      { id: 2, url: T2, title: 'Learning Excursion' },
      { id: 3, url: T3, title: 'Museum Trip' },
      { id: 4, url: T4, title: 'Educational Tour' },
      { id: 5, url: T5, title: 'Field Trip Memories' },
    ],
  };

  // Get current images based on active category
  const getCurrentImages = () => {
    if (activeCategory === 'festivals') {
      return festivalImages[activeFestival] || festivalImages.dussehra;
    }
    return otherImages[activeCategory] || [];
  };

  const currentImages = getCurrentImages();

  // Initialize current slide index for all categories
  useEffect(() => {
    const initialIndex = {};
    
    // Initialize festival indices
    Object.keys(festivalImages).forEach(festival => {
      initialIndex[festival] = 0;
    });
    
    // Initialize other category indices
    Object.keys(otherImages).forEach(cat => {
      initialIndex[cat] = 0;
    });
    
    setCurrentSlideIndex(initialIndex);
  }, []);

  // Auto slide function
  const startAutoSlide = (categoryId) => {
    if (slideIntervalRef.current[categoryId]) {
      clearInterval(slideIntervalRef.current[categoryId]);
    }

    const images = activeCategory === 'festivals' 
      ? festivalImages[categoryId] 
      : otherImages[categoryId];
    
    if (!images || images.length === 0) return;

    slideIntervalRef.current[categoryId] = setInterval(() => {
      setCurrentSlideIndex(prev => ({
        ...prev,
        [categoryId]: (prev[categoryId] + 1) % images.length
      }));
    }, 4000);
  };

  // Stop auto slide
  const stopAutoSlide = (categoryId) => {
    if (slideIntervalRef.current[categoryId]) {
      clearInterval(slideIntervalRef.current[categoryId]);
    }
  };

  // Manual slide navigation
  const goToSlide = (index) => {
    const key = activeCategory === 'festivals' ? activeFestival : activeCategory;
    setCurrentSlideIndex(prev => ({
      ...prev,
      [key]: index
    }));
    stopAutoSlide(key);
    startAutoSlide(key);
  };

  // Next slide
  const nextSlide = () => {
    const key = activeCategory === 'festivals' ? activeFestival : activeCategory;
    const totalSlides = currentImages.length;
    if (totalSlides === 0) return;
    
    setCurrentSlideIndex(prev => ({
      ...prev,
      [key]: (prev[key] + 1) % totalSlides
    }));
    stopAutoSlide(key);
    startAutoSlide(key);
  };

  // Previous slide
  const prevSlide = () => {
    const key = activeCategory === 'festivals' ? activeFestival : activeCategory;
    const totalSlides = currentImages.length;
    if (totalSlides === 0) return;
    
    setCurrentSlideIndex(prev => ({
      ...prev,
      [key]: (prev[key] - 1 + totalSlides) % totalSlides
    }));
    stopAutoSlide(key);
    startAutoSlide(key);
  };

  // Start auto slides when category changes
  useEffect(() => {
    const key = activeCategory === 'festivals' ? activeFestival : activeCategory;
    startAutoSlide(key);
    
    return () => {
      Object.keys(slideIntervalRef.current).forEach(key => {
        clearInterval(slideIntervalRef.current[key]);
      });
    };
  }, [activeCategory, activeFestival]);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId === 'festivals') {
      setActiveFestival('dussehra');
    }
  };

  const handleFestivalClick = (festivalId) => {
    setActiveFestival(festivalId);
    stopAutoSlide(activeFestival);
    startAutoSlide(festivalId);
  };

  // Responsive values
  const getResponsiveValue = (mobile, tablet, desktop) => {
    if (isMobile) return mobile;
    if (isTablet) return tablet;
    return desktop;
  };

  const currentKey = activeCategory === 'festivals' ? activeFestival : activeCategory;
  const currentSlide = currentSlideIndex[currentKey] || 0;

  // Function to create SVG placeholder
  const createPlaceholderSVG = (title) => {
    const text = (title || 'Preschool Moment').replace(/[^\w\s]/gi, '').substring(0, 30);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <rect width="800" height="600" fill="#FFD700"/>
      <text x="400" y="300" font-family="Arial, sans-serif" font-size="24" fill="#1e3a8a" text-anchor="middle" dy=".3em">${text}</text>
    </svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  };

  // Styles
  const sectionStyle = {
    paddingTop: getResponsiveValue('40px', '60px', '80px'),
    paddingRight: getResponsiveValue('16px', '24px', '32px'),
    paddingBottom: getResponsiveValue('40px', '60px', '80px'),
    paddingLeft: getResponsiveValue('16px', '24px', '32px'),
    background: 'linear-gradient(135deg, #FFF9C4 0%, #E3F2FD 50%, #FFEBEE 100%)',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden'
  };

  // Floating shapes background
  const floatingShapes = Array.from({ length: getResponsiveValue(8, 12, 15) }).map((_, i) => {
    const size = Math.random() * getResponsiveValue(30, 50, 60) + getResponsiveValue(15, 30, 40);
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const colors = ['#FFD700', '#87CEEB', '#FFB6C1', '#FFA07A', '#9C27B0', '#4CAF50'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    return {
      id: i,
      size,
      left: `${left}%`,
      top: `${top}%`,
      color,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 10 + 10}s`
    };
  });

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
    padding: getResponsiveValue('0', '0 16px', '0 24px')
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: getResponsiveValue('32px', '48px', '64px')
  };

  const h2Style = {
    fontSize: getResponsiveValue('1.75rem', '2.5rem', '3.5rem'),
    fontWeight: '800',
    color: '#1e3a8a',
    marginBottom: getResponsiveValue('8px', '12px', '16px'),
    textShadow: '2px 2px 0px rgba(255, 215, 0, 0.3)',
    background: 'linear-gradient(45deg, #1e3a8a, #3b82f6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: 1.2,
    padding: getResponsiveValue('0 16px', '0', '0')
  };

  const highlightStyle = {
    color: '#FFD700',
    textShadow: '2px 2px 4px rgba(30, 58, 138, 0.3)'
  };

  const dividerStyle = {
    width: getResponsiveValue('60px', '80px', '120px'),
    height: getResponsiveValue('3px', '4px', '6px'),
    background: 'linear-gradient(to right, #FFD700, #FF6B9D, #4FC3F7)',
    marginBottom: '16px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '3px',
    boxShadow: '0 4px 12px rgba(255, 215, 0, 0.4)'
  };

  const subtitleStyle = {
    fontSize: getResponsiveValue('0.85rem', '1rem', '1.25rem'),
    color: '#5D4037',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.6,
    fontWeight: '500',
    paddingLeft: getResponsiveValue('8px', '16px', '0'),
    paddingRight: getResponsiveValue('8px', '16px', '0')
  };

  const filterContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: getResponsiveValue('6px', '10px', '16px'),
    marginBottom: getResponsiveValue('24px', '32px', '48px'),
    paddingTop: getResponsiveValue('12px', '16px', '20px'),
    paddingRight: getResponsiveValue('12px', '16px', '20px'),
    paddingBottom: getResponsiveValue('12px', '16px', '20px'),
    paddingLeft: getResponsiveValue('12px', '16px', '20px'),
    borderRadius: getResponsiveValue('16px', '20px', '30px'),
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
    border: '2px solid rgba(255, 215, 0, 0.2)',
    maxWidth: '100%',
    overflowX: isMobile ? 'auto' : 'visible'
  };

  const festivalFilterContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: getResponsiveValue('4px', '8px', '12px'),
    marginBottom: getResponsiveValue('20px', '24px', '32px'),
    paddingTop: getResponsiveValue('12px', '16px', '20px'),
    paddingRight: getResponsiveValue('12px', '16px', '20px'),
    paddingBottom: getResponsiveValue('12px', '16px', '20px'),
    paddingLeft: getResponsiveValue('12px', '16px', '20px'),
    borderRadius: getResponsiveValue('16px', '20px', '25px'),
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
    border: '2px solid rgba(255, 182, 193, 0.2)',
    maxWidth: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflowX: isMobile ? 'auto' : 'visible'
  };

  const filterButtonStyle = (isActive, color) => ({
    paddingTop: getResponsiveValue('8px', '10px', '14px'),
    paddingRight: getResponsiveValue('12px', '16px', '28px'),
    paddingBottom: getResponsiveValue('8px', '10px', '14px'),
    paddingLeft: getResponsiveValue('12px', '16px', '28px'),
    borderRadius: '50px',
    fontWeight: '700',
    border: `2px solid ${isActive ? 'white' : color}40`,
    cursor: 'pointer',
    fontSize: getResponsiveValue('12px', '14px', '16px'),
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    background: isActive 
      ? `linear-gradient(135deg, ${color}, ${color}99)`
      : 'rgba(255, 255, 255, 0.9)',
    color: isActive ? 'white' : '#5D4037',
    boxShadow: isActive 
      ? `0 6px 20px ${color}80` 
      : '0 3px 10px rgba(0, 0, 0, 0.08)',
    transform: isActive ? 'translateY(-3px) scale(1.05)' : 'none',
    display: 'flex',
    alignItems: 'center',
    gap: getResponsiveValue('4px', '8px', '12px'),
    whiteSpace: 'nowrap',
    flexShrink: 0
  });

  const festivalButtonStyle = (isActive, color) => ({
    paddingTop: getResponsiveValue('6px', '8px', '12px'),
    paddingRight: getResponsiveValue('10px', '14px', '20px'),
    paddingBottom: getResponsiveValue('6px', '8px', '12px'),
    paddingLeft: getResponsiveValue('10px', '14px', '20px'),
    borderRadius: '30px',
    fontWeight: '600',
    border: `2px solid ${isActive ? 'white' : color}30`,
    cursor: 'pointer',
    fontSize: getResponsiveValue('11px', '12px', '14px'),
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    background: isActive 
      ? `linear-gradient(135deg, ${color}, ${color}dd)`
      : 'rgba(255, 255, 255, 0.9)',
    color: isActive ? 'white' : '#5D4037',
    boxShadow: isActive 
      ? `0 4px 15px ${color}80` 
      : '0 2px 8px rgba(0, 0, 0, 0.05)',
    transform: isActive ? 'translateY(-2px)' : 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    flexShrink: 0
  });

  const slideshowContainerStyle = {
    position: 'relative',
    aspectRatio: getResponsiveValue('3/4', '4/3', '16/9'),
    overflow: 'hidden',
    borderRadius: getResponsiveValue('16px', '20px', '24px'),
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
    marginBottom: getResponsiveValue('24px', '28px', '32px'),
    background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  const slideStyle = (isActive) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: isActive ? 1 : 0,
    transform: isActive ? 'scale(1)' : 'scale(0.95)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
    pointerEvents: 'none'
  });

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  };

  const imageOverlayStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to top, rgba(30, 58, 138, 0.95), transparent)',
    paddingTop: getResponsiveValue('12px', '20px', '28px'),
    paddingRight: getResponsiveValue('12px', '20px', '28px'),
    paddingBottom: getResponsiveValue('12px', '20px', '28px'),
    paddingLeft: getResponsiveValue('12px', '20px', '28px'),
    transform: 'translateY(0)',
    transition: 'transform 0.3s ease'
  };

  const imageTitleStyle = {
    color: 'white',
    fontSize: getResponsiveValue('14px', '18px', '24px'),
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 0,
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',
    textAlign: 'center'
  };

  const navigationButtonsStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.95)',
    border: 'none',
    width: getResponsiveValue('36px', '44px', '56px'),
    height: getResponsiveValue('36px', '44px', '56px'),
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: getResponsiveValue('16px', '20px', '28px'),
    color: '#1e3a8a',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s',
    zIndex: 10,
    opacity: 0.9
  };

  const dotsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: getResponsiveValue('6px', '8px', '12px'),
    position: 'absolute',
    bottom: getResponsiveValue('12px', '16px', '24px'),
    left: 0,
    right: 0,
    zIndex: 10
  };

  const dotStyle = (isActive, color) => ({
    width: isActive ? getResponsiveValue('20px', '24px', '32px') : getResponsiveValue('10px', '12px', '16px'),
    height: getResponsiveValue('8px', '10px', '16px'),
    borderRadius: '8px',
    background: isActive 
      ? `linear-gradient(135deg, ${color}, ${color}dd)` 
      : 'rgba(255, 255, 255, 0.7)',
    cursor: 'pointer',
    transition: 'all 0.3s',
    border: isActive ? '2px solid white' : 'none',
    boxShadow: isActive ? '0 3px 10px rgba(0, 0, 0, 0.3)' : 'none'
  });

  const infoCardStyle = {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 248, 255, 0.95))',
    borderRadius: getResponsiveValue('16px', '20px', '20px'),
    paddingTop: getResponsiveValue('16px', '24px', '32px'),
    paddingRight: getResponsiveValue('16px', '24px', '32px'),
    paddingBottom: getResponsiveValue('16px', '24px', '32px'),
    paddingLeft: getResponsiveValue('16px', '24px', '32px'),
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
    border: '2px solid rgba(255, 215, 0, 0.3)',
    textAlign: 'center',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '32px'
  };

  const festivalTitleStyle = {
    fontSize: getResponsiveValue('18px', '24px', '32px'),
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap'
  };

  const slideCounterStyle = {
    fontSize: getResponsiveValue('12px', '14px', '16px'),
    color: '#666',
    fontWeight: '600',
    marginBottom: '12px'
  };

  const festivalDescriptionStyle = {
    fontSize: getResponsiveValue('12px', '14px', '16px'),
    color: '#5D4037',
    lineHeight: 1.6,
    marginTop: 0,
    marginBottom: 0
  };

  const ctaStyle = {
    textAlign: 'center',
    marginTop: getResponsiveValue('32px', '40px', '48px'),
    paddingTop: getResponsiveValue('20px', '32px', '48px'),
    paddingRight: getResponsiveValue('16px', '24px', '32px'),
    paddingBottom: getResponsiveValue('20px', '32px', '48px'),
    paddingLeft: getResponsiveValue('16px', '24px', '32px'),
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(227, 242, 253, 0.9))',
    borderRadius: getResponsiveValue('20px', '25px', '30px'),
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
    border: '3px solid #FFD700',
    position: 'relative',
    overflow: 'hidden',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  const ctaTitleStyle = {
    fontSize: getResponsiveValue('18px', '24px', '32px'),
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: '12px',
    textShadow: '2px 2px 0px rgba(255, 215, 0, 0.3)'
  };

  const ctaTextStyle = {
    fontSize: getResponsiveValue('14px', '16px', '18px'),
    color: '#5D4037',
    marginBottom: '24px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.6
  };

  const ctaButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    background: 'linear-gradient(135deg, #FFD700, #FFB347)',
    color: '#1e3a8a',
    paddingTop: getResponsiveValue('12px', '16px', '20px'),
    paddingRight: getResponsiveValue('24px', '32px', '48px'),
    paddingBottom: getResponsiveValue('12px', '16px', '20px'),
    paddingLeft: getResponsiveValue('24px', '32px', '48px'),
    borderRadius: '50px',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
    border: '3px solid white',
    transition: 'all 0.3s',
    fontSize: getResponsiveValue('14px', '16px', '18px'),
    boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
    width: isMobile ? '100%' : 'auto',
    maxWidth: isMobile ? '300px' : 'none'
  };

  const contactNumberStyle = {
    marginTop: '16px',
    color: '#5D4037',
    fontSize: getResponsiveValue('14px', '16px', '18px'),
    fontWeight: '600',
    textAlign: 'center'
  };

  // Animation styles
  const animationStyles = `
    @keyframes floatShape {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      33% {
        transform: translateY(-20px) rotate(120deg);
      }
      66% {
        transform: translateY(10px) rotate(240deg);
      }
    }

    .gallery-card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @media (max-width: 768px) {
      .image-overlay {
        padding: 12px !important;
      }
      
      .navigation-button {
        opacity: 0.8 !important;
      }
    }

    @media (max-width: 480px) {
      .gallery-container {
        padding: 0 8px !important;
      }
      
      .filter-container {
        justify-content: flex-start !important;
        padding: 8px 12px !important;
      }
    }
  `;

  return (
    <>
      <style>{animationStyles}</style>
      <section id="gallery" style={sectionStyle}>
        {/* Floating background shapes */}
        {floatingShapes.map(shape => (
          <div
            key={shape.id}
            style={{
              position: 'absolute',
              width: shape.size,
              height: shape.size,
              left: shape.left,
              top: shape.top,
              background: shape.color,
              borderRadius: shape.id % 3 === 0 ? '50%' : shape.id % 3 === 1 ? '20%' : '30%',
              opacity: 0.1,
              animation: `floatShape ${shape.animationDuration} infinite ease-in-out ${shape.animationDelay}`,
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />
        ))}

        <div style={containerStyle} className="gallery-container">
          <div style={headerStyle}>
            <h2 style={h2Style}>
              Our <span style={highlightStyle}>Happy Moments</span>
            </h2>
            <div style={dividerStyle}></div>
            <p style={subtitleStyle}>
              Capturing the joy, laughter, and precious memories of our little learners
            </p>
          </div>

          <div style={filterContainerStyle} className="filter-container">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                style={filterButtonStyle(activeCategory === category.id, category.color)}
                onMouseEnter={(e) => !e.currentTarget.style.background.includes(category.color) && (e.target.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => !e.currentTarget.style.background.includes(category.color) && (e.target.style.transform = activeCategory === category.id ? 'translateY(-3px) scale(1.05)' : 'none')}
              >
                <span style={{ fontSize: getResponsiveValue('16px', '18px', '20px') }}>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {activeCategory === 'festivals' && (
            <div style={festivalFilterContainerStyle} className="filter-container">
              {festivalSubCategories.map((festival) => (
                <button
                  key={festival.id}
                  onClick={() => handleFestivalClick(festival.id)}
                  style={festivalButtonStyle(activeFestival === festival.id, festival.color)}
                  onMouseEnter={(e) => !e.currentTarget.style.background.includes(festival.color) && (e.target.style.transform = 'translateY(-2px)')}
                  onMouseLeave={(e) => !e.currentTarget.style.background.includes(festival.color) && (e.target.style.transform = activeFestival === festival.id ? 'translateY(-2px)' : 'none')}
                >
                  <span style={{ fontSize: getResponsiveValue('14px', '16px', '18px') }}>{festival.icon}</span>
                  {festival.name}
                </button>
              ))}
            </div>
          )}

          {currentImages.length > 0 ? (
            <div 
              style={slideshowContainerStyle}
              onMouseEnter={() => stopAutoSlide(currentKey)}
              onMouseLeave={() => startAutoSlide(currentKey)}
            >
              {currentImages.map((image, index) => (
                <div
                  key={image.id}
                  style={slideStyle(index === currentSlide)}
                  className={index === currentSlide ? 'slide-enter' : ''}
                >
                  <img 
                    src={image.url} 
                    alt={image.title}
                    style={imageStyle}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = createPlaceholderSVG(image.title);
                    }}
                  />
                  {image.title && (
                    <div className="image-overlay" style={imageOverlayStyle}>
                      <h3 style={imageTitleStyle}>{image.title}</h3>
                    </div>
                  )}
                </div>
              ))}

              <button
                onClick={prevSlide}
                style={{...navigationButtonsStyle, left: getResponsiveValue('8px', '12px', '24px')}}
                className="navigation-button"
                onMouseEnter={(e) => {
                  e.target.style.background = activeCategory === 'festivals' 
                    ? festivalSubCategories.find(f => f.id === activeFestival)?.color || '#FF6B8B'
                    : galleryCategories.find(c => c.id === activeCategory)?.color || '#FF6B8B';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-50%) scale(1.2)';
                  e.target.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.95)';
                  e.target.style.color = '#1e3a8a';
                  e.target.style.transform = 'translateY(-50%)';
                  e.target.style.opacity = '0.9';
                }}
                aria-label="Previous slide"
              >
                ❮
              </button>
              
              <button
                onClick={nextSlide}
                style={{...navigationButtonsStyle, right: getResponsiveValue('8px', '12px', '24px')}}
                className="navigation-button"
                onMouseEnter={(e) => {
                  e.target.style.background = activeCategory === 'festivals' 
                    ? festivalSubCategories.find(f => f.id === activeFestival)?.color || '#FF6B8B'
                    : galleryCategories.find(c => c.id === activeCategory)?.color || '#FF6B8B';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-50%) scale(1.2)';
                  e.target.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.95)';
                  e.target.style.color = '#1e3a8a';
                  e.target.style.transform = 'translateY(-50%)';
                  e.target.style.opacity = '0.9';
                }}
                aria-label="Next slide"
              >
                ❯
              </button>

              <div style={dotsContainerStyle}>
                {currentImages.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => goToSlide(index)}
                    style={dotStyle(index === currentSlide, 
                      activeCategory === 'festivals' 
                        ? festivalSubCategories.find(f => f.id === activeFestival)?.color || '#FF6B8B'
                        : galleryCategories.find(c => c.id === activeCategory)?.color || '#FF6B8B'
                    )}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                    role="button"
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div style={{
              ...slideshowContainerStyle,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
              color: '#5D4037',
              fontSize: getResponsiveValue('16px', '18px', '20px'),
              fontWeight: '600',
              textAlign: 'center',
              padding: '40px'
            }}>
              No images available for {activeCategory === 'festivals' ? activeFestival : activeCategory}
            </div>
          )}

          <div style={infoCardStyle}>
            {activeCategory === 'festivals' ? (
              <>
                <h3 style={festivalTitleStyle}>
                  <span style={{ fontSize: getResponsiveValue('24px', '28px', '36px') }}>
                    {festivalSubCategories.find(f => f.id === activeFestival)?.icon}
                  </span>
                  {festivalSubCategories.find(f => f.id === activeFestival)?.name}
                </h3>
                <p style={slideCounterStyle}>
                  Slide {currentSlide + 1} of {currentImages.length} • {currentImages.length} Photos
                </p>
                <p style={festivalDescriptionStyle}>
                  Celebrating the vibrant spirit of {festivalSubCategories.find(f => f.id === activeFestival)?.name.toLowerCase()} with our preschool children. 
                  See how we teach cultural values through fun activities, traditional dances, and creative crafts.
                </p>
              </>
            ) : (
              <>
                <h3 style={festivalTitleStyle}>
                  <span style={{ fontSize: getResponsiveValue('24px', '28px', '36px') }}>
                    {galleryCategories.find(c => c.id === activeCategory)?.icon}
                  </span>
                  {galleryCategories.find(c => c.id === activeCategory)?.name}
                </h3>
                <p style={slideCounterStyle}>
                  Slide {currentSlide + 1} of {currentImages.length} • {currentImages.length} Photos
                </p>
                <p style={festivalDescriptionStyle}>
                  Explore our preschool activities through these beautiful moments captured during various learning sessions and celebrations.
                </p>
              </>
            )}
          </div>

          <div style={ctaStyle}>
            <h3 style={ctaTitleStyle}>Come See Our Happy School!</h3>
            <p style={ctaTextStyle}>
              Experience the vibrant atmosphere and joyful learning environment of Alphabetz Choice. 
              Schedule a visit to see more photos and meet our wonderful teachers and students!
            </p>
            <a
              href="#contact"
              style={ctaButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 10px 25px rgba(255, 215, 0, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.4)';
              }}
            >
              <span style={{ fontSize: getResponsiveValue('18px', '20px', '24px') }}>🏫</span>
              Schedule a School Visit
            </a>
            <div style={contactNumberStyle}>
              📞 Call us at: 
              <a 
                href="tel:9000894995" 
                style={{
                  color: '#1e40af', 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  marginLeft: '6px',
                  background: 'linear-gradient(45deg, #1e3a8a, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                9000894995
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}