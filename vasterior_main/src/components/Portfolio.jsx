import React, { useState } from 'react';

// Custom arrow icons as components
const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const PortfolioCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'src/assets/p1.jpeg',
    'src/assets/p2.jpeg',
    'src/assets/p3.jpeg',
    'src/assets/p4.jpeg',
    '/api/placeholder/1200/800',
    '/api/placeholder/1200/800',
    '/api/placeholder/1200/800',
    '/api/placeholder/1200/800',
    '/api/placeholder/1200/800',
    '/api/placeholder/1200/800',
    '/api/placeholder/1200/800',
    '/api/placeholder/1200/800',
    '/api/placeholder/1200/800',
    '/api/placeholder/1200/800',
    '/api/placeholder/1200/800'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-[#111111] relative">
      {/* Portfolio Title */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20">
        <h1 className="text-[#8B8B8B] text-7xl font-light tracking-wider">PORTFOLIO</h1>
      </div>

      {/* Main Carousel */}
      <div className="relative h-screen overflow-hidden">
        {/* Previous/Next Slides (Blurred) */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <div className="w-1/4 h-[400px] relative overflow-hidden blur-sm opacity-50">
            <img
              src={images[(currentSlide - 1 + images.length) % images.length]}
              alt="Previous"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/4 h-[400px] relative overflow-hidden blur-sm opacity-50">
            <img
              src={images[(currentSlide + 1) % images.length]}
              alt="Next"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Current Slide */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px]">
          <img
            src={images[currentSlide]}
            alt="Current"
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-30 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-30 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <ChevronRight />
        </button>

        {/* Dot Navigation */}
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
          <button className="px-10 py-2 text-white bg-[#333333] hover:bg-[#444444] transition-colors rounded flex items-center gap-2">
            VIEW ALL
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Social Media Sidebar */}
    </div>
  );
};

export default PortfolioCarousel;