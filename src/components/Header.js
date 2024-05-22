import React, { useState, useEffect } from 'react';
import '../styles/Header.scss';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
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
  
    const handleLinkClick = (event, submenuName) => {
      event.preventDefault();
      setActiveSubMenu(activeSubMenu === submenuName ? null : submenuName);
    };

    return (
      <header className={`flex justify-center p-4 fixed w-full z-10 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
        <div className={`flex justify-between items-center header_box`}>
          <div className="header_logo">
            <a href="/">
              <img src="/db_logo.png" alt="logo" />
            </a>
          </div>
          <nav className={`w-4/5`}>
            <ul className="flex justify-between space-x-4 w-full">
              <li><a className={`nav-link ${isScrolled ? 'scrolled-link' : ''}`} href="/">Home</a></li>
              <li><a className={`nav-link ${isScrolled ? 'scrolled-link' : ''}`} href="/Products">Products</a></li>
              <li className={`relative`}>
                <a className={`nav-links ${isScrolled ? 'scrolled-link' : ''}`} href="/self" onClick={(event) => handleLinkClick(event, 'self')}>
                  Sub-line products
                  <span className={`arrow-icon ${isScrolled ? 'scrolled-link' : ''} ${activeSubMenu === 'self' ? 'open' : 'close'}`}></span>
                </a>
                <ul className={`sub-links ${activeSubMenu === 'self' ? 'block' : 'hidden'}`}>
                  <li className={`relative`}><a href="/about/team">KM White Label</a></li>
                  <li className={`relative`}><a href="/about/company">KM POKER GAMES/LOTTERY/ WHITE LABEL</a></li>
                  <li className={`relative`}><a href="/about/company">DB White Label</a></li>
                  <li className={`relative`}><a href="/about/company">DB Flagship</a></li>
                  <li className={`relative`}><a href="/about/company">SPORTSBET GAME</a></li>
                  <li className={`relative`}><a href="/about/company">BOYA GAMES</a></li>
                  <li className={`relative`}><a href="/about/company">External Game API</a></li>
                  <li className={`relative`}><a href="/about/company">Live Casino API Rental</a></li>
                </ul>
              </li>
              <li><a className={`nav-link ${isScrolled ? 'scrolled-link' : ''}`} href="/blog">Collaboration</a></li>
              <li className={`relative`}>
                <a className={`nav-links ${isScrolled ? 'scrolled-link' : ''}`} href="/products" onClick={(event) => handleLinkClick(event, 'products')}>
                  Latest News
                  <span className={`arrow-icon ${isScrolled ? 'scrolled-link' : ''} ${activeSubMenu === 'products' ? 'open' : 'close'}`}></span>
                </a>
                <ul className={`sub-links ${activeSubMenu === 'products' ? 'block' : 'hidden'}`}>
                  <li className={`relative`}><a href="/products/new">Industry Info</a></li>
                  <li className={`relative`}><a href="/products/popular">Latest Events</a></li>
                </ul>
              </li>
              <li><a className={`nav-link ${isScrolled ? 'scrolled-link' : ''}`} href="/faq">About Us</a></li>
              <li><a className={`nav-link ${isScrolled ? 'scrolled-link' : ''}`} href="/help">Contact Us</a></li>
              <li><a className={`nav-link ${isScrolled ? 'scrolled-link' : ''}`} href="/careers">Careers</a></li>
              <li className={`relative`}>
                <a className={`nav-links ${isScrolled ? 'scrolled-link' : ''}`} href="/contact" onClick={(event) => handleLinkClick(event, 'contact')}>
                  English
                  <span className={`arrow-icon ${isScrolled ? 'scrolled-link' : ''} ${activeSubMenu === 'contact' ? 'open' : 'close'}`}></span>
                </a>
                <ul className={`sub-links ${activeSubMenu === 'contact' ? 'block' : 'hidden'}`}>
                  <li className={`relative`}><a href="/contact/support">简体中文</a></li>
                  <li className={`relative`}><a href="/contact/sales">繁體中文</a></li>
                  <li className={`relative`}><a href="/contact/support">English</a></li>
                  <li className={`relative`}><a href="/contact/sales">Tiếng Việt</a></li>
                  <li className={`relative`}><a href="/contact/support">ไทย</a></li>
                  <li className={`relative`}><a href="/contact/sales">Español</a></li>
                  <li className={`relative`}><a href="/contact/support">Português</a></li>
                  <li className={`relative`}><a href="/contact/sales">Русский</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };

export default Header;