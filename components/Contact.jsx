
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Link from 'next/link';

export default function Contact() {

  const formRef= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q0ey9g6', 'template_ny2elal', formRef.current, 'l0rLVPIYElROflM7y')
      .then((result) => {
        console.log(result.text);
        alert("Your message has been sent to Jane")
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  };

  return (    
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            {/* <h5>janeliangbc@gmail.com</h5> */}
            <Link href='mailto:janeliangbc@gmail.com' target="_blank"> Send a message</Link>
          </article>

          {/* <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>778-708-5905</h5>
            <Link href='https://api.whatsapp.com/send?phone=7787085905' target="_blank"> Send a message</Link>
          </article> */}

        </div>
        {/* <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your full name' required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form> */}
      </div>

    </section>
  )
}
