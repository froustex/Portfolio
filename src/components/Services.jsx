import React from 'react';
import "../style/services.css";
import {BiCheck} from 'react-icons/bi';

const Services = () => {
    return (
        <section id='services'>
            <h5>Ce que je peux offrir</h5>
            <h2>Services</h2>
            <div className='container services_container'>
                
            <article className='service'>
                 <div className='service_head'>
                    <h3>UI/UX Design</h3>
                 </div>
                 <ul className='service_list'>
                    <li>
                        <BiCheck className='service_list-icon' />
                        <p>Des projets réalisés en adéquation avec les demandes et les contraintes du client pour un rendu visuel
                            conforme aux attentes et une expérience utilisateur optimisée. Un design adapté aux exigences de chacun et 
                            des fonctionnalités accessibles et pertinentes pour une expérience utilisateur réussie.
                        </p>
                    </li>
              </ul>
            </article>

            <article className='service'>
             <div className='service_head'>
                    <h3>Développement web</h3>
                 </div>
                 <ul className='service_list'>
                    <li>
                        <BiCheck className='service_list-icon' />
                        <p>Des apprentissages récents qui permettent un code qui respecte les bonnes pratiques et qui font consensus
                             dans la profession. Ainsi, une fonctionnalité et une maintenabilité accrues. Des langages réputés pour 
                             leur polyvalence, leur popularité et leur fiabilité, à même de répondre au plus grand nombre des problématiques
                              et exigences rencontrées lors de projets. 
                        </p>
                    </li>
                 </ul>
                </article>

                <article className='service'>
                 <div className='service_head'>
                    <h3>Création de contenu</h3>
                 </div>
                 <ul className='service_list'>
                    <li>
                        <BiCheck className='service_list-icon' />
                        <p>Un contenu soigné et précis, suivant scrupuleusement les exigences rédactionnelles
                          et informationnelles inhérentes à chaque projet. Un message clair, une mise en avant des 
                          notions et termes prioritaires pour une efficacité optimale quant à l'impact sur l'utilisateur
                          et une meilleure visibilité.
                        </p>
                    </li>
                 </ul>
                </article>
            </div>

        </section>
    );
};

export default Services;