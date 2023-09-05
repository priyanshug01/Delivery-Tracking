import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import logo1 from '../images/collage.png';
import logo2 from '../images/place.png';
import logo3 from '../images/delivery.png';
import logo4 from '../images/car.png';
import logo5 from '../images/user.png';
import logo6 from '../images/settings.png';

const NavBar = () => {
  return (
    <div className="navbar">
      <nav className="nav-links">
        <ul>
          <li><NavLink to="/dashboard" activeClassName="active-link"><img src={logo1} alt="DashBoard" /></NavLink></li>
          <li><NavLink to="/location" activeClassName="active-link"><img src={logo2} alt="Location" /></NavLink></li>
          <li><NavLink to="/survelliance" activeClassName="active-link"><img src={logo3} alt="Survelliance" /></NavLink></li>
          <li><NavLink to="/vehicles" activeClassName="active-link"><img src={logo4} alt="Vehicles" /></NavLink></li>
          <li><NavLink to="/accounts" activeClassName="active-link"><img src={logo5} alt="Accounts" /></NavLink></li>
          <li><NavLink to="/settings" activeClassName="active-link"><img src={logo6} alt="Settings" /></NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
