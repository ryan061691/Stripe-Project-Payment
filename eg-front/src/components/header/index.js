import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom'

import Logo from './../../assets/logo.png';

const Header = props => {
  return (
     <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
          <img src={Logo}></img>
          </Link>
        </div>
        <div className="CTA">
          <ul>
            <li>
              <Link to="/subscription">
              Subscribe
              </Link>
            </li>
          </ul>
        </div>
      </div>
     </header>
  )
}

export default Header;
