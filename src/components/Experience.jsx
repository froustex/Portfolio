import React from 'react';
import '../style/experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Mes skills</h5>
            <h2>Mon expérience</h2>

            <div className='container experience_container'>
               <div className='experience_frontend'>
                 <h3>Développement Frontend</h3>
                 <div className='experience_content'>
                    <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon' />
                      <div>
                      <h4>HTML</h4>
                      <small className='text-light'>Débutant</small>
                      </div>
                    </article>
                    <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon' />
                      <div>
                      <h4>CSS</h4>
                      <small className='text-light'>Débutant</small>
                      </div>
                    </article>
                    <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon' />
                      <div>
                      <h4>JavaScript</h4>
                      <small className='text-light'>Débutant</small>
                      </div>
                    </article>
                    <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon' />
                      <div>
                      <h4>React</h4>
                      <small className='text-light'>Débutant</small>
                      </div>
                    </article>
                 </div>
               </div> 
            <div className='experience_backend'>
                 <h3>Développement Backtend</h3>
                 <div className='experience_content'>
                    <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon' />
                      <div>
                      <h4>Node JS</h4>
                      <small className='text-light'>Débutant</small>
                      </div>
                    </article>
                    <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon'/>
                      <div>
                      <h4>Express JS</h4>
                      <small className='text-light'>Débutant</small>
                      </div>
                    </article>
                    <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details-icon' />
                      <div>
                      <h4>MySQL</h4>
                      <small className='text-light'>Débutant</small>
                      </div>
                    </article>
                 </div>
               </div> 
            </div> 
        </section>
    );
};

export default Experience;