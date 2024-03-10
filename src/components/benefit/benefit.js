import React from "react"; 
import './Benefit.css'
import { FaWifi } from "react-icons/fa";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { LuParkingSquare } from "react-icons/lu";

import { useState, useEffect } from "react";
import {  useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { TbBeach } from "react-icons/tb";
import { FaCity } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";

function Benefits () {

    const [dest, setNav] = useState(false);
    const location = useLocation();

    const handleNav = () => {
        setNav(!dest);
    };

    return (
        <div className={dest ? 'mobile-menu active' : 'benefit'}>

                <div className="benefit">
                <div className="sadrzaj-naslov">Sadržaj kuće Gržetić</div>
                <div className="layout">
                <div className="wiew"> <FaWifi className='icon' />Besplatan Wifi</div>
                <div className="kabelska"> <PiTelevisionSimpleLight className='icon' />  Besplatna kableksa TV</div>
                <div className="klima"> <TbAirConditioning className='icon' />  Klimatizirano</div>
                <div className="parking"> <LuParkingSquare className='icon' />  Besplatno parkiralište</div>
                <div className="beach"> <TbBeach className='icon' />3,5m do plaže</div>
                <div className="malinska"> <FaCity className='icon' />7km do grada Malinska</div>
                <div className="blato"> <FaHandHoldingMedical className='icon' />2km do ljekovitog blata</div>
                <div className="beach"> <FaHandHoldingMedical className='icon' />2km do jos neceg</div>
                </div>
                </div>

                </div>
              

    )
}
export default Benefits