import React from 'react';
import '../style/contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {FaLinkedinIn} from "react-icons/fa";
import {BsWhatsapp} from "react-icons/bs";
import { useRef } from 'react';
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gpga38p', 'template_k2evqms', form.current, 'B5SLNGqecZgq3qqTo')
          e.target.reset()
      };


    return (
        <section id='contact'>
            <h5>Faisons connaissance</h5>
            <h2>Contactez-moi</h2>

            <div className='container contact_container'>
             <div className='contact_options'>
             <article className='contact_option'>
                <MdOutlineEmail className='contact_option-icon'/>
              <h4>Email</h4>
              <h5>stephane.feroussier@gmail.com</h5>
              <a href="mailto:stephane.feroussier@gmail.com" rel="noreferrer "target="_blank">Envoyez votre message</a>  
             </article>
             <article className='contact_option'>
                <FaLinkedinIn className='contact_option-icon' />
              <h4>Linkedin</h4>
              <h5>Stéphane FEROUSSIER</h5>
              <a href="https://www.linkedin.com/in/stephane-feroussier/" rel="noreferrer" target="_blank">Envoyez votre message</a>  
             </article>
             <article className='contact_option'>
                <BsWhatsapp className='contact_option-icon'/>
              <h4>WhatsApp</h4>
              <h5>06 11 89 06 86</h5>
              <a href="https//:api.whatsapp.com/send?phone+330611890686" rel="noreferrer" target="_blank">Envoyez votre message</a>  
             </article>
             </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Votre nom' required />
                    <input type="email" name="email" placeholder='Votre email' required />
                    <textarea name="message" id="" cols="30" rows="7" placeholder='Entrez votre message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Envoyer</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;