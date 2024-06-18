import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { HiOutlineMenu } from "react-icons/hi";
import { FaChevronDown } from 'react-icons/fa';
import { navLinks } from "../../constant";
import { AGROBOT_ICON } from "../../assets";

const Navbar = () => {
  const [isMenuOpen, setMobileMenu] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  const location = useLocation();

  const dropdown_hover_timing = 0;

  const toggleMobileMenu = () => {
    setMobileMenu(!isMenuOpen);
  };

  function toggleProjectsMenu(hasDropdown) {
    if (hasDropdown)
      setIsSubMenuOpen(!isSubMenuOpen);
  }



  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180 || location.pathname !== '/') { 
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`h-[10vh] w-full sticky top-0 left-0 right-0 z-[100] ${navbarBg ? '' : 'bg-[#91D0F2]'}`}>
      <nav className="h-full flex items-center justify-center">
        <div className="h-[80%] w-[90%] flex items-center justify-between py-4 md:px-8 px-4 bg-glass bg-transparent shadow-glass backdrop-blur-glass border-glass">
          <div className="font-bold cursor-pointer flex items-center">
            <a href="/"><img className="h-12 w-12 mr-5" src={AGROBOT_ICON} alt="UBC Agrobot" /></a>
            <a href="/" className="font-bold text-[20px]">UBC Agrobot</a>
          </div>

          <ul className="list-none lg:flex items-center gap-8 hidden">
            {navLinks.map((e) => (
              <li
                key={e.id}
                className="relative"
                onMouseEnter={() => toggleProjectsMenu(e.dropdown)}
                onMouseLeave={() => toggleProjectsMenu(e.dropdown)}
              >
                <a
                  href={e.link}
                  className={`text-[#2E1B0F] hover:text-[#2E1B0F] transition-all duration-200 flex items-center ${
                    location.pathname === e.link ? 'font-bold' : ''
                  }`}
                >
                  {e.id} {e.dropdown && <FaChevronDown size='16px' style={{ margin: '3px 0 0 4px' }} />}
                </a>
                {e.dropdown && isSubMenuOpen && (
                  <ul
                    className="absolute top-full left-[-40px] px-[40px] pb-[20px] bg-glass bg-transparent shadow-glass backdrop-blur-glass border-glass backdrop-blur-md rounded"
                    style={{ transition: `all ${dropdown_hover_timing}ms` }}
                  >
                    {e.dropdown.map((item) => (
                      <li key={item.id}>
                        <a
                          href={item.link}
                          className="block text-[#291305] py-[2px] px-0"
                        >
                          {item.id}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* menu button for small devices */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-[#8cbc24] text-3xl "
          >
            <HiOutlineMenu />
          </button>
        </div>

        {/* nav items for small devices */}
        {isMenuOpen && (
          <div className="w-full bg-[#F8F7F1] text-[#8cbc24] text-lg font-bold rounded py-4">
            <a href="/" className="block hover:text-grey-400 my-2 mx-4">
              Home
            </a>
            <a href="/projects" className="block hover:text-grey-400 my-2 mx-4">
              Projects
              <span className='font-normal'>
                <a href="/agrobot" className="block hover:text-grey-400 my-2 mx-4">AgroBot</a>
                <a href="/agroponics" className="block hover:text-grey-400 my-2 mx-4">AgroPonics</a>
              </span>
            </a>
            <a href="/sponsorship" className="block hover:text-grey-400 my-2 mx-4">
              Sponsorship
            </a>
            <a href="/recruitment" className="block hover:text-grey-400 my-2 mx-4">
              Recruitment
            </a>
            <a href="/contactus" className="block hover:text-grey-400 my-2 mx-4">
              Contact Us
            </a>
            <a href="/aboutus" className="block hover:text-grey-400 my-2 mx-4">
              About us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
