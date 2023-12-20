import React from 'react';
import "../style/hobbies.css";
import IMG2 from "../assets/IMG2.jpg";
import IMG3 from "../assets/IMG3.jpg";
import IMG4 from "../assets/IMG4.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';

const data = [
    {
        avatar: IMG2,
        name: "Sports",
        review: "Le football et le sport en général. Abnégation, esprit d'équipe, dépassement de soi sont des valeurs importantes et transférables au quotidien"
    },
    {
        avatar: IMG3,
        name: "Jeux de société",
        review: "Une façon de privilégier des moments en famille combinant le respect, l'écoute, le partage...tout en s'amusant" 
    },
    {
        avatar: IMG4,
        name: "Musique",
        review: "Une composante importante qui accompagne bon nombre de personnes au cours de leur vie et au gré de leur humeur" 
    },
    {
        avatar: IMG4,
        name: "Voyages",
        review: "Voyager, c'est surtout sortir de son quotidien et découvrir d'autres personnes, d'autres cultures, d'autres manières de vivre. Voyager, c'est favoriser son ouverture d'esprit et sa tolérance vis à vis de l'autre." 
    },
    {
        avatar: IMG4,
        name: "Informatique",
        review: "Les nouvelles technologies en général. Une véritable fascination lorsqu'on regarde l'évolution de ces dernières décennies et la capacité humaine à mobiliser son intelligence afin de résoudre des problèmes qui paraissaient jusqu'alors insolubles" 
    }
]


const Testimonials = () => {
    return  (

    <section id="testimonials">
        <h2>Mes loisirs</h2>

    <Carousel>
        {data.map(({avatar, name, review} , index) => {
                return (

            <div className='container testimonials_container'>

                    <article key={index} className="testimonial">
                    <div className='client_avatar'>
                        <img src={avatar} alt=""/>
                    </div>
                    <h5 className='client_name'>{name}</h5>
                    <small className='client_review'>{review}</small>
                    </article>
            </div>
          )}
        )}
        </Carousel>
        </section>
    )
};

export default Testimonials;