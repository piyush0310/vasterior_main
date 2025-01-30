import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      {
        image: "/src/assets/1.png",
        subtitle: "Designing Spaces, Shaping Lives",
        title: "Design. Inspire. Transform.",
        
      },
      {
        image: "/src/assets/2.png",
        subtitle: "Transforming Ideas into Beautiful Reality",
        title: "Spaces That Speak Style",
        
      },
      {
        image: "/src/assets/3.png",
        subtitle: "Inspired Designs for Every Corner",
        title: "Your Vision, Our Creation",
       
      }
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 7000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <section className="hero text-center" aria-label="home" id="home">
        <ul className="hero-slider">
          {slides.map((slide, index) => (
            <li key={index} className={`slider-item ${index === currentSlide ? 'active' : ''}`}>
              <div className="slider-bg">
                <img src={slide.image} width="1880" height="950" alt="" className="img-cover" />
              </div>
              <p className="label-2 section-subtitle slider-reveal">{slide.subtitle}</p>
              <h1 className="display-1 hero-title slider-reveal">{slide.title}</h1>
              <p className="body-2 hero-text slider-reveal">{slide.text}</p>
              
            </li>
          ))}
        </ul>
  
        <button className="slider-btn prev" aria-label="slide to previous" onClick={prevSlide}>
          <ion-icon name="chevron-back"></ion-icon>
        </button>
  
        <button className="slider-btn next" aria-label="slide to next" onClick={nextSlide}>
          <ion-icon name="chevron-forward"></ion-icon>
        </button>
  
        
      </section>
    );
  };

  export default Hero;