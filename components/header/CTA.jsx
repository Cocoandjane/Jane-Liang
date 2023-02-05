import React from 'react'
import Link from 'next/link'
export default function CTA() {
    return (
      <div className='cta'>
        <Link href="/files/resume.pdf" download className='btn'>Download resume</Link>
        <Link href="#contact" className='btn btn-primary'> Let's talk</Link>
      </div>     
    )
  }
  