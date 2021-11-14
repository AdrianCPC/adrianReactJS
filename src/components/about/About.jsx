import React from 'react';
import './About.css';
import Photo from '../../assets/images/adrianPhoto.jpg';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-text">
                <h3>Acerca de mi</h3>
                <p>
                    fdfsdfdsgdfgfdhfdhgfhgfhgfhj
                    sfdsdgfgdfgdfgsdhgfdsf
                    esagfjsdfgdsfjhdfghdsfgjdsgf
                </p>
            </div>
            <div className="about-img">
                <img src={Photo} alt="foto-adrian"/>
            </div>
        </div>
    )
};

export default About;
