import React from 'react';
import '../style/about.css';
import me from '../assets/me.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Faisons connaissance</h5>
            <h2>A propos de moi</h2>

            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me-image'>
                    <img src={me} alt="Stéphane FEROUSSIER" />
                    </div>
                </div>

                <div className='about_content'>
                   <div className='about_cards'>
                    <article className='about_card'>
                      <FaAward className='about_icon' /> 
                      <h5>Experience</h5>
                      <small>Junior</small>
                    </article>

                    <article className='about_card'>
                      <FiUsers className='about_icon' /> 
                      <h5>Formation</h5>
                      <small>WildCodeSchool</small>
                    </article>

                    <article className='about_card'>
                      <VscFolderLibrary className='about_icon' /> 
                      <h5>Projets</h5>
                      <small>4</small>
                    </article>
                   </div> 

                   <p>
                     Sociable, passionné et curieux,
                     je souhaite évoluer dans un secteur d'activité
                     où travail d'équipe et collaboration sont au
                     coeur des projets. Mes expériences antérieures
                     m'ont permis d'acquérir des compétences transférables
                     et indispensables à cette évolution.
                   </p>

                   <a href="#contact" className='btn btn-primary'>Discutons ensemble</a>
                   
                </div>
            </div>
        </section>
    );
};

export default About