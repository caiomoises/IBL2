import { useState } from 'react';
import Header from './components/layout/Header';
import MobileMenu from './components/layout/MobileMenu';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Events from './components/sections/Events';
import Sermons from './components/sections/Sermons';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import BackToTop from './components/common/BackToTop';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-900 text-gray-100">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        closeMenu={() => setIsMobileMenuOpen(false)}
      />
      
      <main>
        <Hero />
        <About />
        <Events />
        <Sermons />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;