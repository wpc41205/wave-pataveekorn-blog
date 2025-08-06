import { useState, useEffect } from 'react';
import MyImage from './assets/my.jpg';
// NavBar Component
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
      <nav className={`flex items-center justify-between py-4 px-4 sm:px-6 md:px-[120px] lg:px-[150px] mx-auto bg-[#EFEEEB] border-b border-[#DAD6D1] relative ${
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
  
  export function HeroSection() {
    return (
      <main className="flex items-center justify-between py-4 px-4 sm:px-6 md:px-[120px] lg:px-[150px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8 text-left sm:text-right">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Live your life <br className="hidden sm:block" />
            with happiness <br className="hidden sm:block" />
            <span>every day.</span>
          </h1>
            <p className="text-lg text-[#75716B] hover:text-[#26231E]">
              Discover knowledge at your fingertips, <br />
              embrace inspiration every day, <br />
              and live with purpose and passion.
            </p>
          </div>
          <img
            src={MyImage}
            alt="Person with hands up"
            className="h-[529px] w-[386px] object-cover rounded-lg shadow-lg mx-4 mb-8 lg:mb-0"
          />
          <div className="lg:w-1/3 lg:pl-8">
            <h2 className="text-xl font-semibold mb-2">-Author</h2>
            <h3 className="text-2xl font-bold mb-4">Pataveekorn C.</h3>
            <p className="text-gray-500 mb-4 hover:text-[#26231E]">
            "I am passionate about psychology and personal development, 
            always seeking ways to grow and improve. 
            I love reading books that provide new perspectives and insights into self-growth, 
            emotional intelligence, and mental well-being.
            </p>
            <p className="text-gray-500 hover:text-[#26231E]">
            When I&apos;m reading or learning, 
            I focus on applying these concepts to my daily life, 
            striving to become a better version of myself.
            </p>
          </div>
        </div>
      </main>
    );
  }