import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ResumeCustom() {
  return (
    <Container className="py-4">
      <Row>
        <Col>
          <h1>SAMRAWIT ALEMZEWD</h1>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <span>
              <FaEnvelope />{" "}
              <a href="mailto:samrawitalemzewd@gmail.com">
                samrawitalemzewd@gmail.com
              </a>
            </span>
            <span>
              <FaPhone /> <a href="tel:+251941230136">+251 941 230 136</a>
            </span>
            <span>
              <FaMapMarkerAlt /> Addis Ababa, Ethiopia
            </span>
            <span>
              <FaGithub />{" "}
              <a
                href="https://github.com/SamriTech"
                target="_blank"
                rel="noreferrer"
              >
                GitHub (AI & Data)
              </a>
            </span>
            <span>
              <FaGithub />{" "}
              <a
                href="https://github.com/Samrawit426"
                target="_blank"
                rel="noreferrer"
              >
                GitHub (Software Dev)
              </a>
            </span>
            <span>
              <FaLinkedin />{" "}
              <a
                href="https://www.linkedin.com/in/samrawitalemzewd/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </span>
          </div>
        </Col>
      </Row>

      <hr />

      <Row>
        <Col md={12}>
          <h3>Profile</h3>
          <p>
            Fourth-year Software Engineering student at Addis Ababa University
            with a unique blend of Full-Stack Web Development and Artificial
            Intelligence expertise. Experienced in building scalable
            applications using the MERN stack and developing intelligent systems
            through 10 Academy’s AI stream. Passionate about bridging the gap
            between robust software engineering and ethical AI solutions.
          </p>

          <h3>Technical Skills</h3>
          <ul>
            <li>
              Programming & Web: JavaScript (ES6+), React.js, Node.js,
              Express.js, HTML5, CSS3, Tailwind CSS
            </li>
            <li>
              Backend & Databases: MongoDB Atlas, RESTful APIs, JWT
              Authentication, Stripe API Integration
            </li>
            <li>Mobile: Kotlin, Flutter</li>
            <li>
              AI & Data: Python, Pandas, NumPy, Matplotlib, Jupyter Notebook,
              NLP fundamentals
            </li>
            <li>Tools: Git, GitHub, Linux (Ubuntu), Postman, Docker, MLflow</li>
          </ul>

          <h3>Featured Projects</h3>
          <h5>Full-Stack E-Commerce Platform (Habeshawi Shop)</h5>
          <ul>
            <li>
              Responsive MERN application with React frontend and Node/Express
              backend
            </li>
            <li>
              Stripe API integration for secure payments and MongoDB Atlas for
              cloud storage
            </li>
            <li>
              Admin dashboard for product CRUD and real-time order tracking
            </li>
          </ul>

          <h5>Campus Lost and Found Management System</h5>
          <ul>
            <li>
              Agile team development of a web solution for reporting and
              recovering lost items
            </li>
            <li>
              Contributed to architecture and frontend/backend integration
            </li>
          </ul>

          <h5>Iddir Mobile Application</h5>
          <ul>
            <li>
              Digitized community contributions and member management for mobile
              users
            </li>
          </ul>

          <h5>Personal Portfolio Website</h5>
          <ul>
            <li>
              Designed and deployed a responsive portfolio using HTML, CSS, and
              JavaScript
            </li>
          </ul>

          <h5>10 Academy – AI Stream Projects</h5>
          <ul>
            <li>
              Performed end-to-end data preprocessing and EDA; implemented ML
              models and structured ML workflows
            </li>
          </ul>

          <h3>Featured AI Project (Live Demo)</h3>
          <h5>AI Meeting Summarizer – Conversational Intelligence Tool</h5>
          <ul>
            <li>
              Integrated AI-powered meeting summarization that converts
              multi-speaker audio into transcripts and summaries
            </li>
            <li>
              Built with Python, NLP tooling and deployed as a demo application
            </li>
          </ul>

          <h3>Education</h3>
          <p>
            BSc in Software Engineering — Addis Ababa University (AAU), Year 4
            (Expected Graduation: 2027)
          </p>

          <h3>Community & Leadership</h3>
          <ul>
            <li>Google Developer Group (GDG) — Educational Team Mentor</li>
            <li>AAU AI & Robotics Club — Member</li>
          </ul>

          <h3>Certifications</h3>
          <ul>
            <li>Machine Learning Specialization — Andrew Ng (Coursera)</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
