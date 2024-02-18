import React from "react";  

import './HeroStyles.css'
import { FaPhoneAlt } from "react-icons/fa";
import Video from '../../assets/krk.mp4'
function Hero () {
    return (
        <div className="hero">
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>APARTMANI GRŽETIĆ - SUŽAN</h1>
                <h2>Savršena lokacija za odmor</h2>
                <h2><button className="button"><FaPhoneAlt className ='icon' /> Rezervirajte termin</button></h2>
            </div>
        </div>
    )
}
export default Hero
 