import React from 'react';

const FeaturesSection = () => {
  const teamMembers = [
    {
      name: "Yash Upadhayay",
      role: "Chef",
      pic: "src/assets/member1.jpeg", // Replace with actual image path
    },
    {
      name: "Piyush Kumar",
      role: "Manager",
      pic: "src/assets/member2.jpeg", // Replace with actual image path
    },
    {
      name: "Varsha",
      role: "Assistant",
      pic: "src/assets/member3.jpeg", // Replace with actual image path
    },
    {
      name: "Vivek",
      role: "Coordinator",
      pic: "src/assets/member4.jpeg", // Replace with actual image path
    }
  ];

  return (
    <section className="section features text-center" aria-label="features">
      <div className="container">
        <p className="section-subtitle label-2">Why Choose Us</p>
        <h2 className="headline-1 section-title">Our Team</h2>
        
        <ul className="grid-list">
          {teamMembers.map((member, index) => (
            <li key={index} className="feature-item">
              <div className="feature-card">
                <div className="card-icon">
                  <img 
                    src={member.pic} // Team member's picture
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover" // Circle shape
                    loading="lazy"
                  />
                </div>
                <h3 className="title-2 card-title">{member.name}</h3>
                <p className="label-1 card-text">{member.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
