import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={s.navbarWrapper}>
      <div className={s.navigationArea}>
        {/* <div className={s.link}>
          <NavLink to="#s" activeClassName={s.active}>
            Home
          </NavLink>
        </div> */}
        <div className={s.link}>
          <NavLink to="/profile" activeClassName={s.active}>
            Profile
          </NavLink>
        </div>
        <div className={s.link}>
          <NavLink to="/dialogs" activeClassName={s.active}>
            Dialogs
          </NavLink>
        </div>
        <div className={s.link}>
          <NavLink to="/users" activeClassName={s.active}>
            Users
          </NavLink>
        </div>
        {/* <div className={s.link}>
          <NavLink to="#s" activeClassName={s.active}>
            About
          </NavLink>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
