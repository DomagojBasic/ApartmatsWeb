import React, {useState} from "react";  
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import { IoBedOutline } from "react-icons/io5";




import './NavbarStyles.css'

function Navbar () {
    const[nav, setNav] = useState(false);
    const handleNav = () =>setNav(!nav);
    
    return (
    <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
        <div className={nav ? 'logo dark' : 'logo'}>
        <img className="logo-grzetic" src={require('../../assets/logo_novo.png')} />
        </div>
    <ul className="nav-menu">
        <li>Apartmani</li>
        <li>Vodič</li>
        <li>Galerija</li>
        <li>Kontakt</li>
        <li>Rezervacije</li>
    </ul>
    <div className="nav-icons">
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
    
    )
}
export default Navbar