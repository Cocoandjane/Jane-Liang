import React from 'react'
import Image from 'next/image'

export default function Nav() {
  function toggleMenu() {
    const menuToggle = document.querySelector('.hamburger');
    const navigation = document.querySelector('.nav__list');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
  }

  function closeMenu() {
    const menuToggle = document.querySelector('.hamburger');
    const navigation = document.querySelector('.nav__list');
    menuToggle.classList.remove('active');
    navigation.classList.remove('active');
  }


  return (
    <header>
    <nav className="navbar">
      <div id="logo" className="logo">
        <a href="/">
    <Image 
      src="/coco1.svg"
      alt="logo"
      width={100}
      height={100}
    />
    </a>
  </div>

      
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/" className="nav__link">Home</a>
        </li>

        <li className="nav__item" onClick={closeMenu}>
          <a href="/#about" className="nav__link">About</a>
        </li>

        <li className="nav__item">
          <a href="/#skills" className="nav__link"  onClick={closeMenu}>Skills</a>
        </li>

        <li className="nav__item">
          <a href="/#projects" className="nav__link"  onClick={closeMenu}>Projects</a>
        </li>

        <li className="nav__item">
          <a href="/#contact" className="nav__link"  onClick={closeMenu}>Contact</a>
        </li>

      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  </header>
  )
}
