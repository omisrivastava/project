import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">
          <h1 className="section-heading">Contact<span> Me</span></h1>
          <div className="card-wrapper">
            <div className="card">
              <img src="mob.png" width="100" height="100" alt="Mobile Icon" />
              <h2>Call</h2>
              <h6>(+91) 6388923328</h6>
            </div>
            <div className="card">
              <img src="mail.png" width="100" height="100" alt="Mail Icon" />
              <h2>Mail</h2>
              <h6>srivastaomi@gmail.com</h6>
            </div>
            <div className="card">
              <img src="link.png" width="100" height="100" alt="LinkedIn Icon" />
              <h2>LinkedIn</h2>
              <h6>http://linkedin.com/in/omisrivastava</h6>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-wrap">
              <input type="text" placeholder="Your Name *" required />
              <input type="email" placeholder="Your Email *" required />
            </div>
            <div className="input-wrap-2">
              <input type="text" placeholder="Your Subject..." />
              <textarea cols="30" rows="10" placeholder="Your Message..."></textarea>
            </div>
            <div className="btn-wrapper">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
