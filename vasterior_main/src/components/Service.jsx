import React from 'react';

const ServiceSection = () => {
  const serviceCards = [
    {
      id: 1,
      title: "Rooms",
      image: "src/assets/service1.jpeg",
      alt: "Breakfast",
    },
    {
      id: 2,
      title: "Kitchen",
      image: "src/assets/kitchen.jpeg",
      alt: "Appetizers",
    },
    {
      id: 3,
      title: "Bathroom",
      image: "src/assets/bathroom.jpeg",
      alt: "Drinks",
    }
  ];

  return (
    <section className="section service bg-black-10 text-center" aria-label="service">
      <div className="container">
        <p className="section-subtitle label-2">Flavors For Royalty</p>
        <h2 className="headline-1 section-title">We Offer Top Notch</h2>
        <p className="section-text">
        "Experience premium interior design solutions tailored to elevate your space with elegance, functionality, and unmatched creativity."
        </p>

        <ul className="grid-list">
          {serviceCards.map((card) => (
            <li key={card.id}>
              <div className="service-card">
                <a href="#" className="has-before hover:shine">
                  <figure 
                    className="card-banner img-holder" 
                    style={{"--width": "285", "--height": "336"}}
                  >
                    <img 
                      src={card.image} 
                      width="285" 
                      height="336" 
                      loading="lazy" 
                      alt={card.alt}
                      className="img-cover"
                    />
                  </figure>
                </a>

                <div className="card-content">
                  <h3 className="title-4 card-title">
                    <a href="#">{card.title}</a>
                  </h3>
                  <a href="#" className="btn-text hover-underline label-2">
                    View
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <img 
          src="src/assets/logo.jpg" 
          width="246" 
          height="412" 
          loading="lazy" 
          alt="shape"
          className="shape shape-1 move-anim" 
        />
        <img 
          src="src/assets/logo.jpg" 
          width="343" 
          height="345" 
          loading="lazy" 
          alt="shape"
          className="shape shape-2 move-anim" 
        />
      </div>
    </section>
  );
};

export default ServiceSection;