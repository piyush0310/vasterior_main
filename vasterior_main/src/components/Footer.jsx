import React from 'react';

const Footer = () => {
  const footerLinks = [
    ["Home", "Services", "About Us", "Portfolio", "Blog"],
    ["Facebook", "Instagram", "Twitter", "Youtube", "Google Map"]
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <footer 
      className="footer section has-bg-image text-center"
      style={{ backgroundImage: "url('footer-bg.jpg')" }}
    >
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand has-before has-after">
            <a href="#" className="logo">
              <img src="src/assets/logo.jpg" width="180" height="50" loading="lazy" alt="vasterior home" />
            </a>
            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>
            <address className="body-4">
              Noida, Uttar Pradesh
            </address>
            
            <a href="mailto:vasterior@gmail.com" className="body-4 contact-link">
              vasterior@gmail.com
            </a>
            
            <a href="tel:+910000000000" className="body-4 contact-link">
              Phone no. : +91 0000000000
            </a>
            
            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>

            <p className="label-1">
              Subscribe Us <span className="span"></span>
            </p>
            
            <form action="" className="input-wrapper" onSubmit={handleSubmit}>
              <div className="icon-wrapper">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                <input 
                  type="email" 
                  name="email_address" 
                  placeholder="Your email" 
                  autoComplete="off" 
                  className="input-field"
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Subscribe</span>
                <span className="text text-2" aria-hidden="true">Subscribe</span>
              </button>
            </form>
          </div>

          {footerLinks.map((linkGroup, groupIndex) => (
            <ul key={groupIndex} className="footer-list">
              {linkGroup.map((link, index) => (
                <li key={index}>
                  <a href="#" className="label-2 footer-link hover-underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2025 Vasterior. All Rights Reserved | Crafted by{" "}
            <a 
              href="https://nexgenitservices.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link"
            >
              Nexgenitservices
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;