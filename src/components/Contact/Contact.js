import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import Particle from "../Particle";

import './Contact.css'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vh2zk9t', 'template_lp2d6nr', form.current, 'D0dYwPCB3lfcRvVxb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset()
    };


    return (
        <>
            <Particle />
            <section id="contact">
                <div className="contact-box">
                    <div className="contact-links">
                        <h2>CONTACT</h2>
                        <h4 className='text-white pb-3 '>Number: <a href="tel:+994103121915" className='text-decoration-none text-white '>+994103121915</a></h4>
                        <h4 className='text-white pb-3 '>Gmail: <a href="mailto:+nurlanrahimli@gmail.com" className='text-decoration-none text-white '>nurlanrahimli@gmail.com</a></h4>
                        <h4 className='text-white pb-3 '>Address: Baku Azerbaijan, Mircelal street 59k</h4>
                    </div>
                    <div className="contact-form-wrapper">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-item">
                                <input type="text" name="user_name" required />
                                <label>Name:</label>
                            </div>
                            <div className="form-item">
                                <input type="text" name="user_email" required />
                                <label>Email:</label>
                            </div>
                            <div className="form-item">
                                <input type="text" name="subject" required />
                                <label>Subject:</label>
                            </div>
                            <div className="form-item">
                                <textarea className="" name="message" required />
                                <label>Message:</label>
                            </div>
                            <button type='submit' className="submit-btn">Send</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact