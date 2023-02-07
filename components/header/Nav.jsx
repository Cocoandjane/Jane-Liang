import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
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
  useEffect(function mount() {
    function scrollFunction() {
      // or page is on mobile view
      if (window.innerWidth <= 768) {
        document.querySelector('.hamburger').style.display = 'block';
        return;
      } else {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          document.querySelector('.hamburger').style.display = 'block';
          document.querySelector('.nav__list').classList.add('hamburger--scroll');
        } else {
          document.querySelector('.hamburger').style.display = 'none';
          document.querySelector('.nav__list').classList.remove('hamburger--scroll');
        }
      }
    }
    window.addEventListener("scroll", scrollFunction);
    return function unMount() {
      window.addEventListener("scroll", scrollFunction);
    };
  });

  const router = useRouter();
  function clickLogo() {
    router.push('/');
  }


  return (
    <header >
      <nav className="navbar">
        <div id="logo" className="logo" onClick={clickLogo}>
          <Image
            src="/coco1.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </div>


        <h3 className='header_name' >Jane Liang</h3>

        <ul className="nav__list">
          <li className="nav__item">
            <Link href="/" className="nav__link" onClick={closeMenu}>Home</Link>
          </li>

          <li className="nav__item" onClick={closeMenu}>
            <Link href="/#about" className="nav__link">About</Link>
          </li>

          <li className="nav__item">
            <Link href="/#skills" className="nav__link" onClick={closeMenu}>Skills</Link>
          </li>

          <li className="nav__item">
            <Link href="/#projects" className="nav__link" onClick={closeMenu}>Projects</Link>
          </li>

          <li className="nav__item">
            <Link href="/#contact" className="nav__link" onClick={closeMenu}>Contact</Link>
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
