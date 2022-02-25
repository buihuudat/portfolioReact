import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import {HeaderData} from '../../sources/data';

import './Header.css';

export default function Header() {
  const {pathname} = useLocation();
  return (
    <div className="header" id="header">
      <div className="header__wrap">
        <div className="header__logo">
          <Link to='/'>
            <span className="text-warning">D</span>at
          </Link>
          {/* <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" /> */}
        </div>
        <div className="header__nav">
          <ul className="header__nav-list">
            {HeaderData.map((item, index) => (
              <li className={`header__nav-item ${pathname === item.path ? 'active' : ''}`} key={index}>
                <Link to={item.path} className="header__nav-link">
                  <span><i className={item.icon}></i></span>
                  <span>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="header__bottom">
          <div className="header__bottom-item">
              <a href=""><i className="fa-brands fa-facebook-f"></i></a>
              <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
              <a href=""><i className="fa-brands fa-instagram"></i></a>
              <a href=""><i className="fa-brands fa-twitter"></i></a>
              <a href=""><i className="fa-brands fa-fonticons-fi"></i></a>
          </div>
          <div className="header__copyright">
            <span>© 2020 BuiHuuDat</span>
          </div>
        </div>
      </div>
    </div>
  )
}
