import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi — I’m <span className="purple">SAMRAWIT ALEMZEWD</span> from
            Addis Ababa, Ethiopia.
            <br />
            I’m a Fourth-year Software Engineering student at Addis Ababa
            University with hands-on experience in Full-Stack Web Development
            (MERN) and Applied AI through 10 Academy’s AI stream.
            <br />
            <br />I build scalable web applications, integrate ML/NLP pipelines,
            and focus on creating ethical, explainable AI solutions for
            real-world problems.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building MERN applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Developing ML/NLP prototypes
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring and community education
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Passionate about bridging robust software engineering and
            responsible AI."
          </p>
          <footer className="blockquote-footer">SAMRAWIT</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
