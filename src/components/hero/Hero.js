import React from "react";  

import './HeroStyles.css'
import { FaPhoneAlt } from "react-icons/fa";
import Video from '../../assets/krk.mp4'
import pec from '../../assets/pec.jpg'
import najbolje from '../../assets/najbolje.jpg'
import prozor from '../../assets/prozor.jpg'
import qqqqq from '../../assets/qqqqq.jpg';
function Hero () {
    return (
        <div className="hero">
              <img className="img" src={najbolje} alt="family" />
            <div className="overlay"></div>
            <div className="content">
                <h1 className="title">KUĆA ZA ODMOR GRŽETIĆ</h1>
                <h2>Savršena lokacija za odmor</h2>
                <h2><button className="button"><FaPhoneAlt className ='icon' /> Rezervirajte termin</button></h2>
            </div>
        </div>
    )
}
export default Hero
 