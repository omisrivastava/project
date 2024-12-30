import React from 'react';


const Navbar = () => {
  return (
    <div>
      <header>
        <div className="container">
          <nav className="flex items-center justify-between">
            <div className="left flex items-center">
              <div className="branding">
                <img src='omi.jpg' width="75" height="75" alt="Brand Logo" />
              </div>
              <div>
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#pages">Pages</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            <div className="right">
              <button className="btn btn-primary">Contact</button>
            </div>
          </nav>
          {/* <div className="hero flex items-center justify-between">
            <div className="left flex-1 flex justify-center">
              <img src='d,.png' alt="Hero Image" />
            </div>
            <div className="right flex-1">
              <h6>Omi Srivastava</h6>
              <h1>I'm a <span>Web Development Enthusiast</span></h1>
              <p>
                I am currently seeking internship opportunities in web development to further enhance my skills
                and contribute to innovative projects. With a strong passion for creating user-friendly, dynamic,
                and visually appealing web solutions, I am eager to apply my knowledge of front-end and back-end
                technologies, problem-solving abilities, and creative mindset. Additionally, I am open to freelance
                opportunities where I can deliver exceptional results, meet deadlines, and ensure utmost client
                satisfaction. I am committed to continuous learning and excited to collaborate with teams to bring
                impactful ideas to life.
              </p>
              <div>
                <button className="btn btn-secondary">DOWNLOAD RESUME</button>
              </div>
            </div>
          </div> */}
          <div className="hero flex items-center justify-between">
  <div className="left flex-1 flex justify-center">
    <img src='d,.png' alt="Hero Image" />
  </div>
  <div className="right flex-1">
    <h6>Omi Srivastava</h6>
    <h1>I'm a <span>Web Development Enthusiast</span></h1>
    <p>
      I am currently seeking internship opportunities in web development to further enhance my skills
      and contribute to innovative projects. With a strong passion for creating user-friendly, dynamic,
      and visually appealing web solutions, I am eager to apply my knowledge of front-end and back-end
      technologies, problem-solving abilities, and creative mindset. Additionally, I am open to freelance
      opportunities where I can deliver exceptional results, meet deadlines, and ensure utmost client
      satisfaction. I am committed to continuous learning and excited to collaborate with teams to bring
      impactful ideas to life.
    </p>
    <div>
      <a href="https://drive.google.com/file/d/1AzR6iAp6kreUtz5JB-oZkPGH7nMVlQ24/view?usp=sharing" download className="btn btn-secondary">
        DOWNLOAD RESUME
      </a>
    </div>
  </div>
</div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;