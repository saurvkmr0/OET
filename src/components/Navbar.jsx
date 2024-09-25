import React, { useState,useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`z-[50] [opacity-100] fixed top-0 left-0 w-full bg-[#C8EBFF] ${isScrolled ? 'bg-gray-200' : 'bg-[#bee2f7]'}`}>
      <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-[#024B6A] text-4xl font-bold">
              OET
            </a>
          </div>

          {/* Center NavLinks */}
          <div className="hidden md:flex items-center justify-center flex-1 z-20">
            <div className="flex space-x-6">
              <a
                href="#home"
                className="text-[#024B6A] hover:bg-[#88D2F2] hover:font-bold rounded-[10px] px-3 py-2 text-2xl font-normal"
              >
                Home
              </a>
              <a
                href="#course"
                className="text-[#024B6A] hover:bg-[#88D2F2] hover:font-bold rounded-[10px] px-3 py-2 text-2xl font-normal"
              >
                Course
              </a>
              <a
                href="#testimonial"
                className="text-[#024B6A] hover:bg-[#88D2F2] hover:font-bold rounded-[10px] px-3 py-2 text-2xl font-normal"
              >
                Testimonial
              </a>
              <a
                href="#FAQ"
                className="text-[#024B6A] hover:bg-[#88D2F2] hover:font-bold rounded-[10px] px-3 py-2 text-2xl font-normal"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:flex items-center z-20">
            <a
              href="#signin"
              className="btn text-[#024B6A] !hover:bg-[#88D2F2] hover:font-bold hover:border-2 px-4 py-2 border border-[#024B6A] rounded-md text-xl font-normal"
            >
              Sign In
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#024B6A] hover:bg-[#88D2F2] rounded-[2px] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="text-[#024B6A] hover:bg-[#88D2F2] block px-3 py-2 rounded-md text-base font-normal hover:font-medium"
            >
              Home
            </a>
            <a
              href="#course"
              className="text-[#024B6A] hover:bg-[#88D2F2] block px-3 py-2 rounded-md text-base font-normal hover:font-medium"
            >
              Course
            </a>
            <a
              href="#testimonial"
              className="text-[#024B6A] hover:bg-[#88D2F2] block px-3 py-2 rounded-md text-base font-normal hover:font-medium"
            >
              Testimonial
            </a>
            <a
              href="#FAQ"
              className="text-[#024B6A] hover:bg-[#88D2F2] block px-3 py-2 rounded-md text-base font-normal hover:font-medium"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-[#024B6A] hover:bg-[#88D2F2] block px-3 py-2 rounded-md text-base font-normal hover:font-medium"
            >
              Sign In
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
