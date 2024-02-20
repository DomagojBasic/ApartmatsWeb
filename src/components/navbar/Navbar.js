import React, { useState } from "react";  
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Apartmani from '../../pages/Apartmani';

import { Link } from 'react-router-dom'; // Import Link from React Router
import './NavbarStyles.css'; // Make sure the path is correct for your styles

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

    return (
        <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <Link to="/"><img className="logo-grzetic" src={require('../../assets/logo_novo.png')} alt="Logo" /></Link>
            </div>
            <ul className="nav-menu">
            <li><Link to="/Apartmani">Apartmani</Link></li>
            <li><Link to="/galerija">Galerija</Link></li>
                <li>Kontakt</li>
                <li>Rezervacije</li>
            </ul>
            <div className="nav-icons">
                {/* Add your navigation icons here if needed */}
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : <AiOutlineClose className='icon dark' />}
            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <li>Apartmani</li>
                    <li>Vodič</li>
                    <li>Galerija</li>
                    <li>Kontakt</li>
                    <li>Rezervacije</li>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
