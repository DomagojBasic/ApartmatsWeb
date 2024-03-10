import React from "react"; 
import './Destinations.css'
import { FaWifi } from "react-icons/fa";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { LuParkingSquare } from "react-icons/lu";

import { useState, useEffect } from "react";
import {  useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';


function Destinations () {

    const [dest, setNav] = useState(false);
    const location = useLocation();

    const handleNav = () => {
        setNav(!dest);
    };

    return (
        <div className={dest ? 'mobile-menu active' : 'destinations'}>
            <div className="containter">
                <div className="new-page-layout">

                <section>
                <div className="sadrzaj-naslov">Sadržaj kuće Gržetić</div>
                    <div className="layout">
            
                <div className="wifi"> <FaWifi className='icon' />  Besplatni WiFi pristup</div>
                <div className="kabelska"> <PiTelevisionSimpleLight className='icon' />  Besplatna kableksa TV</div>
                <div className="klima"> <TbAirConditioning className='icon' />  Klimatizirano</div>
                <div className="parking"> <LuParkingSquare className='icon' />  Besplatno parkiralište</div>
                </div>
                </section>
                </div>
                </div>

                <div className={dest ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <li><NavLink className="mobile-nav-link" activeclassname="active" exact to="/">Početna</NavLink></li>
                <li><NavLink className="mobile-nav-link" activeclassname="active" exact to="/oNama">O nama</NavLink></li>
                <li><NavLink className="mobile-nav-link" activeclassname="active" exact to="/galerija">Galerija</NavLink></li>
                <li><NavLink className="mobile-nav-link" activeclassname="active" exact to="/Apartmani">Sobe</NavLink></li>
                <li><NavLink className="mobile-nav-link" activeclassname="active" exact to="/kontakt">Kontakt</NavLink></li>
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
    )
}
export default Destinations