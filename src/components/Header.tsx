import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Danh sách các section cần theo dõi
  const sections = [
    { id: 'about', label: 'Về Chúng Tôi' },
    { id: 'projects', label: 'Dự Án' },
    { id: 'transparency', label: 'Minh Bạch' },
  ];

  // Xử lý cuộn để highlight menu
  useEffect(() => {
    const handleScroll = () => {
      // Ưu tiên section nằm ở giữa viewport
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();  
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Cuộn đến section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,  
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-background/80 backdrop-blur-custom sticky top-0 z-50 shadow-sm rounded-b-xl">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-slate-900">
          <button>
            NhiLe <span className="text-primary">Foundation</span>
          </button>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              aria-current={activeSection === id ? 'page' : undefined}
              className={`transition-all duration-200 capitalize 
                px-5 py-2.5 rounded-full text-sm font-medium
                ${
                  activeSection === id
                    ? 'bg-primary text-primary-foreground shadow-md scale-105'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-primary'
                }
              `}
            >
              {label}
            </button>
          ))}

          <a
            href="https://nlh.nhi.sg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-primary hover:bg-slate-100 transition-all duration-200 px-5 py-2.5 rounded-full text-sm"
          >
            Về NhiLe Holding
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-slate-900 p-2"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm px-6 pb-4 pt-2 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              aria-current={activeSection === id ? 'page' : undefined}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors
                ${
                  activeSection === id
                    ? 'text-primary bg-primary/10 font-medium'
                    : 'text-slate-600 hover:text-primary hover:bg-slate-100'
                }
              `}
            >
              {label}
            </button>
          ))}
          <a
            href="https://nlh.nhi.sg"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-left px-3 py-2 rounded-md text-slate-600 hover:text-primary hover:bg-slate-100 transition-colors"
          >
            Về NhiLe Holding
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;