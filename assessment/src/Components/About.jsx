import React from 'react';

const About = () => {
  return (
    <div>
      <section id="about" className="about">
        <div className="container flex items-center">
          <div className="flex-1">
            <img className="about-me-img" src='d,.png' alt="About Me" />
          </div>
          <div className="flex-1 right">
            <h1>About <span>Me</span></h1>
            <h3>Hello! I'm Omi Srivastava.</h3>
            <p>
              During my time at the National Institute Of Technology, I had the privilege of serving as the Class
              Representative for multiple years. This role provided me with the opportunity to advocate for my
              fellow students, effectively communicate their needs, and bridge the gap between faculty and
              administration. Additionally, I dedicated myself to Programming and Data Structures using C++, and
              successfully completed the course and training required to be placed. This experience not only enhanced
              my programming understanding but also nurtured discipline, grace, and logical expression within me.
              Furthermore, I assumed a prestigious position in Intramurals 2023, demonstrating my
              extracurricular abilities and commitment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
