import React, { useState, useEffect } from 'react';
import { 
  IoLocationOutline, 
  IoTimeOutline, 
  IoCallOutline, 
  IoMailOutline,
  IoCloseOutline 
} from 'react-icons/io5';


export const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isTopBarHidden, setIsTopBarHidden] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
    document.body.classList.toggle('nav-active');
  };

  useEffect(() => {
    const handleScroll = () => {
      // Handle TopBar visibility: Hide when scrollY >= 50
      if (window.scrollY >= 50) {
        setIsTopBarHidden(true);
      } else {
        setIsTopBarHidden(false);
      }

      // Handle Header active state: Add active class when scrollY >= 100
      if (window.scrollY >= 100) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }

      // Handle Header hide/show on scroll: Hide header when scrolling down
      const isScrollBottom = lastScrollPos < window.scrollY;
      setIsHeaderHidden(isScrollBottom);
      setLastScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPos]);

  return (
    <>
      {/* TopBar - Hide on scroll when scrollY >= 50 */}
      <div className={`topbar ${isTopBarHidden ? 'hide' : ''}`}>
        <div className="container">
          <address className="topbar-item">
            <div className="icon">
              <IoLocationOutline aria-hidden="true" />
            </div>
            <span className="span">
              Noida, UP
            </span>
          </address>
          <div className="separator"></div>
          <div className="topbar-item item-2">
            <div className="icon">
              <IoTimeOutline aria-hidden="true" />
            </div>
            <span className="span">Daily : 10.00 am to 10.00 pm</span>
          </div>
          <a href="tel:+11234567890" className="topbar-item link">
            <div className="icon">
              <IoCallOutline aria-hidden="true" />
            </div>
            <span className="span">+91 123 456 7890</span>
          </a>
          <div className="separator"></div>
          <a href="mailto:vasterior@gmail.com" className="topbar-item link">
            <div className="icon">
              <IoMailOutline aria-hidden="true" />
            </div>
            <span className="span">vasterior@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Header - Hide on scroll when scrollY >= 100 */}
      <header className={`header ${isHeaderActive ? 'active' : ''} ${isHeaderHidden ? 'hide' : ''}`}>
        <div className="container">
          <a href="#" className="logo">
            <img src="src/assets/logo.jpg" width="150" height="100" alt="Vasterior." />
          </a>

          <nav className={`navbar ${isNavActive ? 'active' : ''}`}>
            <button className="close-btn" aria-label="close menu" onClick={toggleNav}>
              <IoCloseOutline size={24} aria-hidden="true" />
            </button>

            <a href="#" className="logo">
              <img src="src/assets/logo.jpg" width="160" height="50" alt="Grilli - Home" />
            </a>

            <ul className="navbar-list">
              {['Home', 'Services', 'About Us', 'Portfolio', 'Blog'].map((item) => (
                <li key={item} className="navbar-item">
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="navbar-link hover-underline">
                    <div className="separator"></div>
                    <span className="span">{item}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <p className="headline-1 navbar-title">Address</p>
              <address className="body-4">
                Noida, Uttar Pradesh
              </address>
              
              <a href="mailto:vasterior@gmail.com" className="body-4 sidebar-link">vasterior@gmail.com</a>
              <div className="separator"></div>
              <p className="contact-label">Phone no.</p>
              <a href="tel:+88123123456" className="body-1 contact-number hover-underline">
                +91-123-123456
              </a>
            </div>
          </nav>

          <a href="#" className="btn btn-secondary">
            <span className="text text-1">Contact Us</span>
            <span className="text text-2" aria-hidden="true">Contact Us</span>
          </a>

          <button className="nav-open-btn" aria-label="open menu" onClick={toggleNav}>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>

          <div className={`overlay ${isNavActive ? 'active' : ''}`} onClick={toggleNav}></div>
        </div>
      </header>
    </>
  );
};

export default Header;
