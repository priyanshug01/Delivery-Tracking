import React from 'react';
import '../styles/navbar.css';
import logo1 from '../images/collage.png';
import logo2 from '../images/place.png';
import logo3 from '../images/delivery.png';
import logo4 from '../images/car.png';
import logo5 from '../images/user.png';
import logo6 from '../images/settings.png';

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <nav className="nav-links">
          <ul>
            <li><img src={logo1} alt="D" /></li>
            <li><img src={logo2} alt="L" /></li>
            <li><img src={logo3} alt="T" /></li>
            <li><img src={logo4} alt="C" /></li>
            <li><img src={logo5} alt="A" /></li>
            <li><img src={logo6} alt="S" /></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
