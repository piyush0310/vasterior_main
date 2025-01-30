import React from 'react';

const EventSection = () => {
  const events = [
    {
      image: "src/assets/blog1.jpeg",
      date: "2025-01-30",
      displayDate: "30/01/2025",
      subtitle: "The Art of Interior Design",
      title: "Creating Beautiful Spaces with Style and Function"
    },
    {
      image: "src/assets/blog2.jpeg",
      date: "2022-01-30",
      displayDate: "30/01/2025",
      subtitle: "Designing Your Dream Space",
      title: "Transform Your Space with Simple Design Ideas"
    },
    {
      image: "src/assets/blog3.jpeg",
      date: "2025-01-30",
      displayDate: "30/01/2025",
      subtitle: "Mastering Interior Design",
      title: "Design Tips for Every Room"
    }
  ];

  return (
    <section className="section event bg-black-10" aria-label="event">
      <div className="container">
        <p className="section-subtitle label-2 text-center">Recent Updates</p>
        <h2 className="section-title headline-1 text-center">Blogs</h2>
        
        <ul className="grid-list">
          {events.map((event, index) => (
            <li key={index}>
              <div className="event-card has-before hover:shine">
                <div 
                  className="card-banner img-holder" 
                  style={{ "--width": 350, "--height": 450 }}
                >
                  <img 
                    src={event.image} 
                    width="350" 
                    height="450" 
                    loading="lazy"
                    alt="Flavour so good you'll try to eat with your eyes." 
                    className="img-cover"
                  />
                  <time 
                    className="publish-date label-2" 
                    dateTime={event.date}
                  >
                    {event.displayDate}
                  </time>
                </div>
                <div className="card-content">
                  <p className="card-subtitle label-2 text-center">
                    {event.subtitle}
                  </p>
                  <h3 className="card-title title-2 text-center">
                    {event.title}
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <a href="#" className="btn btn-primary">
          <span className="text text-1">View Our Blog</span>
          <span className="text text-2" aria-hidden="true">View Our Blog</span>
        </a>
      </div>
    </section>
  );
};

export default EventSection;