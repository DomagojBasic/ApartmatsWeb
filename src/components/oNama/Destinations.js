import React from "react"; 
import './Destinations.css'
import { FaWifi } from "react-icons/fa";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { LuParkingSquare } from "react-icons/lu";

import { useState, useEffect } from "react";


function Destinations () {
    return (
        <div className="destinations">
            <div className="containter">
                <h5 className="line">Zašto birati nas <h5 className="little_text"></h5>________________________</h5>
                <h1>Mir i udobnost na savršenoj lokaciji</h1>
                <p>Guest House ``Blanka`` nalazi se u Okrugu Donjem, mjesto koje se nalazi na zapadnom dijelu otoka Čiova. Udaljeno samo 8 km od Trogira ,
                     3 km od Okruga Gornjeg i 12 km od Zračne luke Split. Borova šuma, netaknuto kristalno čisto more, polja maslina, stijene, polja naranči, vinogradi i pogled na more, dok u isto vrijeme možete vidjeti brda koja se izdižu iznad Segeta.</p>
                <div className="img-container">
                </div>

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
                
        </div>
    )
}
export default Destinations