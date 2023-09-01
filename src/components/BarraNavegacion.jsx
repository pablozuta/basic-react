import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './barra-navegacion.css';

const Navbar = () => {
    const [isNavbarActive, setIsNavbarActive] = useState(false);

    const handleToggle = () => {
        setIsNavbarActive(!isNavbarActive);
    };

    return (
        <nav className='navbar'>
            <div >
                <NavLink to="/" className="logo" >
                    <span>VALIS</span>
                </NavLink>
            </div>
            <a href="#" className="toggle-button" onClick={handleToggle}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className={`navbar-links ${isNavbarActive ? 'active' : ''}`}>
                <ul>
                    <li>
                        <NavLink to="books/">BOOKS</NavLink>
                    </li>
                    <li>
                        <a href="cyberpunk.html">CYBERPUNK</a>
                    </li>
                    <li>
                        <a href="tech.html">TECH</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;  