import React from 'react';
import '../style/header.css';
import CTA from './CTA';
import me from '../assets/me.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
          <div className="header_container">
            <h5>Bonjour je suis </h5>
            <h1>Stéphane Féroussier</h1>
            <h5 className="text-light">Développeur Fullstack</h5>
            <CTA />
            <HeaderSocials />

            <div className='me'>
              <img src={me}  alt="Stéphane FEROUSSIER"/>
            </div>

            <a href="#contact" className="scroll_down">Contact</a>
          </div>   
        </header>
    );
};

export default Header;