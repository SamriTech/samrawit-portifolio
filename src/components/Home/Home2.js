import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Fourth-year Software Engineering student at Addis Ababa University
              with a unique blend of Full-Stack Web Development and Artificial
              Intelligence expertise. Experienced in building scalable
              applications using the MERN stack and developing intelligent
              systems through 10 Academy’s AI stream.
              <br />
              <br />I work primarily with
              <i>
                <b className="purple"> JavaScript (React, Node), Python</b>
              </i>
              — and enjoy building end-to-end solutions that combine robust
              engineering with applied AI.
              <br />
              <br />
              Key interests include
              <i>
                <b className="purple">
                  {" "}
                  MERN applications, NLP, and ML deployment
                </b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
