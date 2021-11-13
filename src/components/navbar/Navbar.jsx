import React from 'react';
import './Navbar.css';
import Adrian from '../../assets/icons/AP.png'

const Navbar = ({scrollView}) => {
    //Click on navbar for back top
    const backTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <nav className={`navbar ${scrollView > 20 ? 'scrolling' : null}`}>
            <div className="navbar-logo" onClick={backTop}>
                <img src={Adrian} alt="adrian-peña-desarrollador-web"/>
            </div>
        </nav>
    )
};

export default Navbar;
