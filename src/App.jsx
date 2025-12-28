import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'white',
      width: '100%',
      overflowX: 'hidden'
    }}>
      <Header />
      <Hero />
      <About />
      <Programs />
      <Facilities />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;