import React from 'react';
import s from './Header.module.css';

export default function Header() {
  return (
    <div className={s.headerWrapper}>
      <a href="#default" className={s.logo}>
        logo
      </a>
      <div className={s.headerRight}>
        <a className={s.active} href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}
