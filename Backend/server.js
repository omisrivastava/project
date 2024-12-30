const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Resume Data
const resume = {
  workExperience: [
    {
      title: "Web Developer",
      company: "XYZ Company",
      duration: "Jan 2022 - Dec 2023",
      description: "Developed responsive web applications using React and Node.js.",
    },
  ],
  skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
  projects: [
    {
      name: "Portfolio Website",
      description: "Created a responsive portfolio website showcasing my projects.",
      link: "https://yourportfolio.com",
    },
  ],
  certifications: [
    {
      name: "Full-Stack Web Development",
      institution: "Coursera",
      year: "2023",
    },
  ],
};

// API Endpoint
app.post("/resume-query", (req, res) => {
  const { question } = req.body;

  if (question.includes("work experience")) {
    res.json({ answer: resume.workExperience });
  } else if (question.includes("skills")) {
    res.json({ answer: resume.skills });
  } else if (question.includes("projects")) {
    res.json({ answer: resume.projects });
  } else if (question.includes("certifications")) {
    res.json({ answer: resume.certifications });
  } else {
    res.json({ answer: "Sorry, I don't have an answer to that question." });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
