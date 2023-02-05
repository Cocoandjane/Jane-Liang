import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
        <Link href="/">
    <Image 
      src="/coco1.svg"
      alt="logo"
      width={100}
      height={100}
    />
    </Link>
  </div>
      <ul className="nav__list">
        <li className="nav__item">
          <Link href="/" className="nav__link">Home</Link>
        </li>

        <li className="nav__item" onClick={closeMenu}>
          <Link href="/#about" className="nav__link">About</Link>
        </li>

        <li className="nav__item">
          <Link href="/#skills" className="nav__link"  onClick={closeMenu}>Skills</Link>
        </li>

        <li className="nav__item">
          <Link href="/#projects" className="nav__link"  onClick={closeMenu}>Projects</Link>
        </li>

        <li className="nav__item">
          <Link href="/#contact" className="nav__link"  onClick={closeMenu}>Contact</Link>
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
