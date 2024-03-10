import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import './NavbarStyles.css'; 

function Navbar() {
    const [nav, setNav] = useState(false);
    const location = useLocation();

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById("navbar");
            const sticky = navbar.offsetTop;
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // empty dependency array to run only once on mount

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById("navbar");
             if (window.scrollY > 0) {
                navbar.classList.add("scrolled");
              
            } else {
                navbar.classList.remove("scrolled");
                
            }
        };
        
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);





    return (
        <div className={nav ? 'navbar navbar-bg' : 'navbar'} id="navbar" >
            <div className={nav ? 'logo dark' : 'logo'}>
                <NavLink to="/">Gržetić<img className="logo-grzetic" src={require('../../assets/renatologo_transparent.png')} alt="Logo" /></NavLink>
            </div>
            <ul className="nav-menu">
                <li><NavLink className="nav-link" activeClassName="active" exact to="/">Početna</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active" exact to="/oNama">O nama</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active" exact to="/galerija">Galerija</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active" exact to="/Apartmani">Sobe</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active" exact to="/kontakt">Kontakt</NavLink></li>
            </ul>
            <div className="nav-icons">
                {/* Add your navigation icons here if needed */}
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : <AiOutlineClose className='icon dark' />}
            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <li><NavLink className="mobile-nav-link" activeClassName="active" exact to="/">Početna</NavLink></li>
                    <li><NavLink className="mobile-nav-link" activeClassName="active" exact to="/oNama">O nama</NavLink></li>
                    <li><NavLink className="mobile-nav-link" activeClassName="active" exact to="/galerija">Galerija</NavLink></li>
                    <li><NavLink className="mobile-nav-link" activeClassName="active" exact to="/Apartmani">Sobe</NavLink></li>
                    <li><NavLink className="mobile-nav-link" activeClassName="active" exact to="/kontakt">Kontakt</NavLink></li>
                </ul>
                <div className="mobile-menu-bottom">
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
