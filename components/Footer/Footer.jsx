import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
export default function Footer() {
    return (
        <div className='footer'>
            <ul className='footer__container '>
                <li>
                    <a href="/">Home</a>

                </li>
                <li>
                    <a href="/#about">About</a>
                </li>
                <li>
                    <a href="/#skills">Skills</a>
                </li>
                <li>
                    <a href="/#projects">Projects</a>
                </li>
                <li>
                    <a href="/#contact">Contact</a>
                </li>
            </ul>
            <div className='footer__socials'>
                <a href="https://linkedin.com/in/janiejane" target="blank"><BsLinkedin /></a>
                <a href="https://github.com/Cocoandjane" target="blank"><BsGithub /></a>
            </div>

        </div>
    )
}
