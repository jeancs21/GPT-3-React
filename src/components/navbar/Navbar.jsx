import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import {useLocation} from "react-router-dom";

const Menu = () => {
  const { pathname } = useLocation();

  const handleIsActive = (routeToMatch) => {
    if (pathname === routeToMatch) {
      return 'gpt3__navbar-isSelected';
    }
    return '';
  }

  return (
    <>
      <p><a href="/" className={handleIsActive('/')} >Home</a></p>
      <p><a href="/workTogether" className={handleIsActive('/workTogether')}>Let's work together</a></p>
      <p><a href="#possibility" className={handleIsActive('/possibility')}>Partners</a></p>
      <p><a href="#features" className={handleIsActive('/features')}>Education</a></p>
      <p><a href="#blog" className={handleIsActive('/blog')}>Events</a></p>
      <p><a href="#blog" className={handleIsActive('/123')}>Contact Us!</a></p>
    </>
  )

}
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gradient__bg'>
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <a href='/'>
            <img src={'/logo.png'} />
          </a>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <Menu />
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navbar;