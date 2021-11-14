import React from 'react';
import './Slider.css';

const slidesProject = [
    {
        src:"https://dcnxfkgt2gjxz.cloudfront.net/Blog%20Images/Screen-Shot-2021-02-17-at-10.55.12-AM.png?mtime=20210217105529&focal=none",
        alt: "proyecto1",
        description:"mobiles",
    },
    {
        src:"https://content.techgig.com/thumb/msid-78949110,width-860,resizemode-4/9-Best-programming-project-ideas-for-beginners-to-level-up-their-coding-skills.jpg?119058",
        alt:"proyecto 2",
        description:"computers",
    },
    {
        src:"https://cdn.pixabay.com/photo/2016/08/19/02/34/lims-1604450_1280.png",
        alt:"proyecto 3",
        description:"laboratory",
    }
];

const slides = slidesProject.map((slide) => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt}/>
        <div className="slide-description">
            <span>{slide.description}</span>
        </div>
    </div>
));

export default slides;