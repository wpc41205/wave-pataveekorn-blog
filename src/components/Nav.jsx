import { useState, useEffect } from 'react';

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className={`flex items-center justify-between py-4 px-4 sm:px-6 md:px-[120px] lg:px-[150px] mx-auto bg-[#F9F8F6] border-b border-[#DAD6D1] relative ${
        isScrolled ? 'shadow-lg bg-opacity-95 backdrop-blur-sm' : ''
      }`}>
          <a href="/" className="text-2xl font-bold">
            WaveMashare-blog<span className="text-green-500">.</span>
          </a>
          <div className="w-[276px] h-[48px] gap-[8px] hidden md:flex items-center justify-center space-x-4">
            <a href="/login" className="w-[127px] h-[48px] rounded-full bg-white text-[#26231E] border border-[#75716B] hover:bg-[#75716B] hover:text-white text-base font-medium md:flex items-center justify-center">
              Log in
            </a>
            <a
              href="/signup"
              className="w-[141px] h-[48px] rounded-full bg-[#26231E] text-white hover:bg-[#75716B] text-base font-medium md:flex items-center justify-center"
            >
              Sign up
            </a>
          </div>
          <button 
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 cursor-pointer hover:opacity-70"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-[#26231E] rounded-full ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-[#26231E] rounded-full ${isMenuOpen ? 'opacity-0 scale-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-[#26231E] rounded-full ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#EFEEEB] border-b border-[#DAD6D1] shadow-lg z-50">
              <div className="flex flex-col items-center py-4 space-y-4">
                <a 
                  href="/login" 
                  className="w-[200px] h-[48px] rounded-full bg-white text-[#26231E] border border-[#75716B] hover:bg-[#75716B] hover:text-white text-base font-medium flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </a>
                <a
                  href="/signup"
                  className="w-[200px] h-[48px] rounded-full bg-[#26231E] border border-[#75716B] text-white hover:bg-[#75716B] text-base font-medium flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign up
                </a>
              </div>
            </div>
          )}
      </nav>
    );
  }