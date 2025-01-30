import React from 'react';
import { FaFacebookF, FaPinterestP, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const BrandStory = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaPinterestP />, href: "#", label: "Pinterest" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaYoutube />, href: "#", label: "YouTube" },
    { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" }
  ];

  return (
    <section className="relative min-h-screen bg-black">
      {/* Social Media Sidebar */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col gap-4 p-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="text-gray-400 hover:text-[#9F8A6A] transition-colors duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen items-center">
          {/* Left Column - Quote */}
          <div className="pt-20 lg:pt-0">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-[#9F8A6A] leading-relaxed">
              " Designing a home is 
              <br />
              like drawing a portrait
              <br />
              of your client "
            </blockquote>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 pb-20 lg:pb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#9F8A6A] font-light">
              BRAND STORY
            </h1>
            
            <div className="space-y-4">
              <h2 className="text-gray-400 text-lg uppercase tracking-wider">
                KNOW US BETTER
              </h2>
              
              <div className="space-y-2">
                <h3 className="text-[#9F8A6A] text-2xl md:text-3xl font-light">
                  Iconic Architecture .
                </h3>
                <h3 className="text-[#9F8A6A] text-2xl md:text-3xl font-light">
                  Interior Design . Furniture
                </h3>
              </div>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                The House of Aparna Kaushik is a fingerprint of the discerning
                visionary behind its inception. The architect and Founding Principal
                of the firm manifests an academically informed canon of work that
                blends European classicism with modernist tropical architecture.
              </p>

              <button className="bg-[#9F8A6A] text-white px-6 py-3 flex items-center gap-2 hover:bg-[#8A755A] transition-colors duration-300">
                DISCOVER MORE
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image - Right Side */}
      <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block">
        <img
          src="/path-to-your-architectural-image.jpg"
          alt="Architectural Detail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>
    </section>
  );
};

export default BrandStory;