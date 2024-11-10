import React from 'react';
import './ContactUs.css';
import TitleHrTitle from './TitleHrTitle';
import { useRefContext } from '../context/refContext';

const ContactUs = () => {
    const {contactRef} = useRefContext()
  return (
    <React.Fragment>
        <TitleHrTitle text={"Contact Us :)"}/>
        <section className="contact-section" ref={contactRef} id='contact'>
            <img src={'/src/assets/undraw_contact_us_re_4qqt.svg'} className='svgStyle' alt="Contact Us Illustration"/>
            <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
        <form className="contact-form">
            <div className="input-group">
                <input type="text" placeholder="Your Name" className="form-input" required />
            </div>
            <div className="input-group">
                <input type="email" placeholder="Your Email" className="form-input" required />
            </div>
            <div className="input-group">
                <textarea placeholder="Your Message" className="form-textarea" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
        </form>
        </div>
    </section>

    </React.Fragment>
  );
};

export default ContactUs;


