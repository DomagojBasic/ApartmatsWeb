import React from "react"; 
import './HomeSection.css'
import { FaWifi } from "react-icons/fa";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { LuParkingSquare } from "react-icons/lu";

import { useState, useEffect } from "react";
import {  useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import qqqqq from '../../assets/qqqqq.jpg';


function Destinations () {

    const [dest, setNav] = useState(false);
    const location = useLocation();

    const handleNav = () => {
        setNav(!dest);
    };

    return (
        <div className={dest ? 'mobile-menu active' : 'destinations'}>
            <div className="containter">
                <h1 className="quiestion"> JESTE LI U POTRAZI ZA ODMOROM KAKAV <span className="highlight">ZASLUŽUJETE?</span></h1>
                <p className="pitanje1">Ako ste umorni od gužve i tražite odmor koji će vam pružiti mir i opuštanje, imamo savršeno rješenje za vas:</p>
                <p className="odgovor"> <span className="highlight">Kuća Gržetić</span> smještena je na predivnoj sjeveroistočnoj obali otoka Krka, u slikovitom malom mjestu nazvanom Sužan. 
                    Ova očaravajuća lokacija nalazi se nedaleko od većeg naselja Vrbnik, poznatog po bogatoj kulturnoj baštini i prekrasnim vinskim podrumima.
                     Okružena mediteranskim zelenilom i kristalno čistim morem, Kuća Gržetić pruža savršen spoj mira i prirodnih ljepota. 
                     Ovdje se posjetitelji mogu opustiti u ugodnoj atmosferi i uživati u prekrasnom pogledu na Jadransko more te istražiti obližnje plaže i uzbudljive aktivnosti na otvorenom. Kuća Gržetić predstavlja idealno utočište za sve one koji traže autentično iskustvo na otoku Krku, okruženo ljepotom prirode i toplinom mediteranskog gostoprimstva.</p>
                <img className="imgOnama" src={qqqqq} alt="family" />
                
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