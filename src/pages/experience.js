import React from 'react';


function ExperienceSection({ title, timeRange, description }) {
  return (
    <div className="experience-section">
      <div className="left">
        <h3>{title}</h3>
      </div>
      <div className="right">
        <p>{timeRange}</p>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="app">
      <ExperienceSection
        title="Software Engineer"
        timeRange="January 2020 - Present"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ante ut odio placerat scelerisque. Fusce ultricies massa in accumsan pharetra."
      />

      <ExperienceSection
        title="Frontend Developer"
        timeRange="June 2018 - December 2019"
        description="Praesent volutpat lacinia eros, nec sollicitudin quam congue in. Sed eget aliquam orci."
      />

      {/* Add more sections as needed */}
    </div>
  );
}

export default Experience;