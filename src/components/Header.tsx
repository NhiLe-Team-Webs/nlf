import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-background/80 backdrop-blur-custom sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">
          <button onClick={() => scrollToSection('hero')}>
            NhiLe <span className="text-primary">Foundation</span>
          </button>
        </h1>
        
        <nav className="hidden md:flex space-x-8 text-slate-600 font-medium">
          <button 
            onClick={() => scrollToSection('about')} 
            className="hover:text-primary transition-colors"
          >
            Về Chúng Tôi
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="hover:text-primary transition-colors"
          >
            Dự Án
          </button>
          <button 
            onClick={() => scrollToSection('transparency')} 
            className="hover:text-primary transition-colors"
          >
            Minh Bạch
          </button>
          <a 
            href="/holding" 
            className="bg-slate-100 px-4 py-2 rounded-full hover:bg-slate-200 transition-colors"
          >
            Về NhiLe Holding
          </a>
        </nav>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-slate-900"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 bg-background/95 backdrop-blur-sm">
          <button 
            onClick={() => scrollToSection('about')} 
            className="block py-2 text-slate-600 hover:text-primary"
          >
            Về Chúng Tôi
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="block py-2 text-slate-600 hover:text-primary"
          >
            Dự Án
          </button>
          <button 
            onClick={() => scrollToSection('transparency')} 
            className="block py-2 text-slate-600 hover:text-primary"
          >
            Minh Bạch
          </button>
          <a 
            href="/holding" 
            className="block py-2 text-slate-600 hover:text-primary"
          >
            Về NhiLe Holding
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;