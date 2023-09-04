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
                    <span>Home</span>
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
                        <NavLink to="movies/">MOVIES</NavLink>
                    </li>
                    <li>
                        <NavLink to="tech/">TECH</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;  