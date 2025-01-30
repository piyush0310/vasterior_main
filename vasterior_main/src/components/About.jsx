import React from 'react';

const AboutSection = () => {
  return (
    <section className="section about text-center" aria-labelledby="about-label" id="about">
      <div className="container">
        <div className="about-content">
          <p className="label-2 section-subtitle" id="about-label">Our Story</p>
          <h2 className="headline-1 section-title">Designing Dreams, Shaping Reality</h2>
          <p className="section-text">
          At VASTERIOR, we believe every space has a unique story to tell. What started as a passion for creativity and design has now become a journey of transforming spaces into functional works of art. From residential homes to commercial masterpieces, we craft environments that reflect your personality and purpose, ensuring every detail speaks to your vision. Our commitment to excellence and personalized approach makes us the trusted choice for those looking to create timeless, inspired spaces.
          </p>
          
          <span className="body-1 contact-number hover-underline">
             "Director Charu"
          </span>
          <a href="#" className="btn btn-primary">
            <span className="text text-1">Read More</span>
            <span className="text text-2" aria-hidden="true">Read More</span>
          </a>
        </div>

        <figure className="about-banner">
          <img 
            src="src/assets/about-banner.jpeg"
            width="570"
            height="570"
            loading="lazy"
            alt="about banner"
            className="w-100"
            data-parallax-item
            data-parallax-speed="1"
          />
          <div 
            className="abs-img abs-img-1 has-before"
            data-parallax-item
            data-parallax-speed="1.75"
          >
            <img
              src="src/assets/about-abs-image.jpeg"
              width="285"
              height="285"
              loading="lazy"
              alt=""
              className="w-100"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default AboutSection;
