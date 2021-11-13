import React from 'react';
import "./Coverpage.css";
import heroVideo from "../../assets/media/heroVideo.mp4";

const Coverpage = () => {
    return (
        <div className="hero-container">
            <video className="video" src={heroVideo} autoPlay loop muted />
            <h1>Adrian Peña</h1>
            <p>Desarrollador Web | Ingeniero Agroindustrial</p>
        </div>
    )
};

export default Coverpage;
