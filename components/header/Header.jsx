import React from 'react'
import Image from 'next/image'
import Socials from './Socials'

export default function Header() {
  return (
    <div className='container'> 
    <div className="intro" id="home">
   
    <h1 className="section__title section__title--intro ">
      Hi, I am <strong>Jane Liang </strong>
    </h1>
    <p className="section__subtitle section__subtitle--intro">
        Full-Stack Web Developer
    </p>
    <Image
      width={500}
      height={500}
      style={{ width: "100%", height: "auto", borderRadius: "5%"}}
      className="intro__img"
      src="/me.jpeg"
      alt="a picture of Jane smiling"
    />
  </div>

  <Socials/>
    </div>

  )
}
