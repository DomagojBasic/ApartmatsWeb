import React, { useEffect, useState } from "react";  
import renato1 from "../assets/slika1.webp";
import renato2 from "../assets/renato2.jpg";
import renato3 from "../assets/renato3.jpg";

function SlideContent ({ activeIndex, imageSlider }) {
    const [slides, setSlides] = useState([]);
    
    useEffect(() => {
        // Dummy data for demonstration
        const dummySlides = [
            { urls: renato1},
            { urls: renato2},
            { urls: renato3 }
        ];
        // Set the slides state with dummy data
        setSlides(dummySlides);
    }, []);

    return (
        <section>
            <h2 className="h2-slide">Saznaj više</h2> <h2 className="h2-line">_______________</h2>
            <h1 className="h1-slide">Pogledajte slike apartmana, pročitajte više detalja o smještaju, saznajte više o otoku i gradu Pagu</h1>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <img className="slide-image" src={slide.urls} alt="" />
                    <h2 className="slide-title">{slide.title}</h2>
                    <h3 className="slide-text">{slide.description}</h3>
                </div>
            ))}
        </section>
    );
}

export default SlideContent;
