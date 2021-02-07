import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logo.png'
import UseDarkMode from '../DarkMode/useDarkMode';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [navbar, setNavbar] = useState(false); //navbar color change on scroll

  const activeNavbar = () => {
      if (window.scrollY >= 80) {
          setNavbar(true);
      } else {
          setNavbar(false);
      }
  }

  window.addEventListener('scroll', activeNavbar);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      {/* <nav className='navbar'> */}
      <nav className={navbar ? 'navbar scrolled' : 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt="logo" className='logo'/>
          </Link>
          
          <UseDarkMode />

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/education'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Education
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/work'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Work
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/reviews'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
