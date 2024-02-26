import React from "react";
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'

import renato from '../assets/renato1.jpg';
import renato2 from '../assets/renato2.jpg';
import renato3 from '../assets/renato3.jpg';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import './Apartmani.css'

const slideImages = [
  renato,renato2
];

const divStyle = {
    height: "90vh",
    width: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundColor: "aliceblue",
    backgroundPosition: "center"

};

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
}

const buttonStyle = {
    padding: "15px",
    borderRadius: "1%",
    background: "aliceblue",
    opacity: 0.7,
    fontSize: "5px"
  };


function ImageSlider() {
    return (
        <div className="slide-container" >
              <AwesomeSlider
              
              buttonContentRight={<p style={buttonStyle}>{">"}</p>}
              buttonContentLeft={<p style={buttonStyle}>{"<"}</p>}
              play
              interval={6000}
            >
                {slideImages.map((image, index) => (
                    <div key={index} style={{ ...divStyle, backgroundImage: `url(${image})` }}>
                        
                    </div>
                ))}
            </AwesomeSlider>
        </div>
    )
}

export default ImageSlider;
