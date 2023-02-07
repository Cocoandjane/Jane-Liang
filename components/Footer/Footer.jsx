import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import Link from 'next/link'
export default function Footer() {
    return (
        <div className='footer'>
            <ul className='footer__container '>
                <li>
                    <Link href="/">Home</Link>

                </li>
                <li>
                    <Link href="/#about">About</Link>
                </li>
                <li>
                    <Link href="/#skills">Skills</Link>
                </li>
                <li>
                    <Link href="/#projects">Projects</Link>
                </li>
                <li>
                    <Link href="/#contact">Contact</Link>
                </li>
            </ul>
            <div className='footer__socials'>
                <Link href="https://linkedin.com/in/janiejane" target="blank"><BsLinkedin /></Link>
                <Link href="https://github.com/Cocoandjane" target="blank"><BsGithub /></Link>
                <Link href="mailto:janeliangbc@gmail.com" target="blank"><SiGmail /></Link>
            </div>

        </div>
    )
}
