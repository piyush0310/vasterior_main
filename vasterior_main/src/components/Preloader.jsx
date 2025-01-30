import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => setIsLoaded(true));
    return () => window.removeEventListener('load', () => setIsLoaded(true));
  }, []);

  return (
    <div className={`preload ${isLoaded ? 'loaded' : ''}`} data-preaload>
      <div className="circle"></div>
      <p className="text">Vasterior</p>
    </div>
  );
};

export default Preloader;