import React from 'react';

import './About.css';


function About() {
    return (
        <div className="about-container">
            <div className="about-card">
                <h2 className="about-title">Sobre Mí</h2>
                <p className="about-name">Nombre: Fernanda Miranda</p>
                <p className="about-email">Correo: fernandamiranda.fm@gmail.com </p>
                <p className="about-description">
                    Me gusta mucho la tecnologia , estoy aprendiendo mucho en este bootcamp y espero que mi objetivo se cumpla.
                </p>
               {<img src="https://img.freepik.com/vector-gratis/lindo-astronauta-paz-luna-cohete-dibujos-animados-vector-icono-ilustracion-ciencia-tecnologia-icono_138676-5030.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723593600&semt=ais_hybrid" alt="IMG" className="about-photo"/> }
            </div>
        </div>
    );
}

export default About;