import React from 'react';
import "../style/portfolio.css";
import IMG1 from "../assets/IMG1.png";
import IMG5 from "../assets/IMG5.png";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "flags-countries",
        github: "https://github.com/froustex/countries-flags",
        demo: "https://flags-country-react.netlify.app/" 
    },
    {
        id: 2,
        image: IMG5,
        title: "trombinoscope",
        github: "https://github.com/froustex/projet1-group3-outsiders",
        demo: "https://stellular-profiterole-69a693.netlify.app/" 
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
         <h5>Mon dernier travail</h5>
         <h2>Portfolio</h2>
         <div className='container portfolio_container'>
            {data.map(({id, image, title, github, demo}) => {
                return (     
            <article  key={id} className='portfolio_item'>
             <div className='portfolio_item-image'>
                <img src={image} alt={title}/>
             </div>
             <h3>{title}</h3>
             <div className='portfolio_item-cta'>
                <a href={github} rel="noopener noreferrer" className='btn'  target="_blank">Github</a>
                <a href={demo} rel="noopener noreferrer" className='btn btn-primary'  target="_blank"> Demo </a>
             </div>
            </article>
                )}
            )}
         </div>
        </section>
    );
};

export default Portfolio;