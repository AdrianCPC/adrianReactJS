import React from 'react';
import './Navbar.css';
import Adrian from '../../assets/icons/AP.gif'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={Adrian} alt="adrian-peña-desarrollador-web"/>
            </div>
        </nav>
    )
};

export default Navbar;
