import React from 'react';
import '../style/footer.css';
import {FiGithub} from 'react-icons/fi';
import {AiOutlineLinkedin} from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
           <a href="/#" className='footer_logo'>"Se réunir est un début; rester ensemble est un progrès; travailler ensemble est la réussite." Henry Ford</a>

           <ul className='permalinks'>
            <li><a href="/#">Accueil</a></li>
            <li><a href="#about">A propos</a></li>
            <li><a href="#experience">Expérience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Loisirs</a></li>
            <li><a href="#contact">Contact</a></li>
           </ul>

           <div className='footer_socials'>
            <a href="https://github.com/froustex" rel="noreferrer" target="_blank"><FiGithub/></a>
            <a href="https://www.linkedin.com/in/stephane-feroussier/" rel="noreferrer" target="_blank"><AiOutlineLinkedin/></a>
           </div>

           <div className='footer_copyright'>
            <small>&copy; FEROUSSIER Stéphane</small>
           </div>
        </footer>
    );
};

export default Footer;