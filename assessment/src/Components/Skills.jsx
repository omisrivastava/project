import React from 'react';

const Skills = () => {
  return (
    <div>
      <section id="skills" className="skills">
        <div className="container">
          <h1 className="section-heading"><span>My</span> Skills</h1>
          <p>Proficiencies and abilities acquired through knowledge, experience, and practice that enable effective
            performance in various tasks and challenges.</p>
          <div className="card-wrapper">
            <div className="card">
              <img src='web.png' width="90" height="90" alt="Web Development" />
              <h2><b>Web Development</b></h2>
              <p>Creating and crafting digital experiences through coding, design, and functionality to bring
                websites and web applications to life.</p>
            </div>
            <div className="card">
              <img src='python.png' width="90" height="90" alt="Python" />
              <h2><b>Python</b></h2>
              <p>Creating and crafting digital experiences through coding, design, and functionality to bring
                websites and web applications to life.</p>
            </div>
            <div className="card">
              <img src='js.png' width="90" height="90" alt="JavaScript" />
              <h2><b>JavaScript</b></h2>
              <p>Creating and crafting digital experiences through coding, design, and functionality to bring
                websites and web applications to life.</p>
            </div>
            <div className="card">
              <img src='com.png' width="90" height="90" alt="Communication" />
              <h2><b>Communication</b></h2>
              <p>Creating and crafting digital experiences through coding, design, and functionality to bring
                websites and web applications to life.</p>
            </div>
            <div className="card">
              <img src='lead.png' width="90" height="90" alt="Leadership" />
              <h2><b>Leadership</b></h2>
              <p>Creating and crafting digital experiences through coding, design, and functionality to bring
                websites and web applications to life.</p>
            </div>
            <div className="card">
              <img src='time.png' width="90" height="90" alt="Time Management" />
              <h2><b>Time Management</b></h2>
              <p>Creating and crafting digital experiences through coding, design, and functionality to bring
                websites and web applications to life.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;