import React from 'react';

const Services = () => {
  const services = [
    {
      title: "ICONIC ARCHITECTURE",
      image: "src/assets/path-to-architecture-image.jpeg",
      alt: "Luxury pool with classical architecture",
      description: "Creating timeless architectural masterpieces"
    },
    {
      title: "SMART HOME",
      image: "src/assets/path-to-smart-home-image.jpeg",
      alt: "Modern interior with artistic decor",
      description: "Integrating technology with elegant design"
    },
    {
      title: "LANDSCAPE DESIGN",
      image: "src/assets/path-to-landscape-image.jpeg",
      alt: "Classical garden with pool and statues",
      description: "Crafting outdoor spaces that inspire"
    }
  ];

  return (
    <section className="bg-black text-white py-8 md:py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-[Forum] text-4xl text-gold-crayola md:text-6xl mb-4 md:mb-8 tracking-wider">
            SERVICES
          </h2>
          <p className="font-['DM_Sans'] text-white max-w-5xl mx-auto leading-relaxed 
                       text-base md:text-lg lg:text-xl px-4">
            Working across disciplines of architecture, interiors, furnniture, lighting, 
            product design, and landscaping, the dedicated team at the design house, 
            led by the immaculately polished style sense of Aparna herself, conceive 
            and execute synergistic, forward-thinking and visually striking projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-all duration-700 
                           group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Overlay that slides up on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
                              opacity-60 transition-all duration-500 group-hover:opacity-80" />
                
                {/* Content Container */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-all duration-500">
                  {/* Title with line animation */}
                  <div className="overflow-hidden">
                    <h3 className="font-[Forum] text-lg md:text-2xl tracking-widest transform 
                                 transition-transform duration-500 group-hover:-translate-y-2">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description that slides up */}
                  <p className="font-['DM_Sans'] text-sm md:text-base text-gray-300 mt-2 
                               opacity-0 transform translate-y-4 transition-all duration-500 
                               group-hover:opacity-100 group-hover:translate-y-0">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Links - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col space-y-4">
        {['Facebook', 'Pinterest', 'Instagram', 'YouTube', 'LinkedIn'].map((platform) => (
          <a
            key={platform}
            href="#"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center 
                     justify-center hover:bg-white/10 transition-colors duration-300"
            aria-label={platform}
          >
            <span className="sr-only">{platform}</span>
            {/* Add your social media icons here */}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;



