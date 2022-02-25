import React from 'react';

import './Contact.css';

export default function Contact() {
  return (
    <div className="contact" id='contact'>
      <div className="contact__wrap">
        <div className="contact__title">Contact Me</div>
        <div className="contact__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laudantium minima porro accusamus illum cupiditate quod facere possimus velit a ipsam dolorum delectus placeat, molestias libero modi. Nostrum, magni nemo?
        </div>
        <div className="contact__content">
          <div className="contact__item">
            <a href="tel:+911" style={{color: '#fff'}}>
            <div className="contact__item-card">
              <div className="contact__item-icon">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="contact__item-content">
                <div className="contact__item-title">Call Me</div>
                <div className="contact__item-sub">201-354-4443 <p>203-444-5677</p></div>
              </div>
            </div>
            </a>
            <a href="mailto:abc@123" target='_blank' style={{color: '#fff'}}>
            <div className="contact__item-card">
              <div className="contact__item-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact__item-content">
                <div className="contact__item-title">E-mail</div>
                <div className="contact__item-sub">contact@gsmith.com<p>info@gsmith.com</p></div>
              </div>
            </div>
            </a>
            <a href="https://goo.gl/maps/M6dGr7S3SdL1PEw57" style={{color: '#fff'}}>
            <div className="contact__item-card">
              <div className="contact__item-icon">
                <i className="fa-solid fa-location-arrow"></i>
              </div>
              <div className="contact__item-content">
                <div className="contact__item-title">Location</div>
                <div className="contact__item-sub">473 Central Road<p>New York</p></div>
              </div>
            </div>
            </a>
          </div>
          <div className="contact__form">
            <div className="contact__form-title">Get In Touch</div>
            <form action="">
              <div className="contact__form-input contact__form-first">
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
              </div>
              <div className="contact__form-input contact__form-sub">
                <input type="text" placeholder='Subject'/>
              </div>
              <div className="contact__form-input contact__form-message">
                <textarea name="" id="" cols="30" placeholder='Message'></textarea>
              </div>
              <button className="contact__form-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
