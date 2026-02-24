import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import blog from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          SELECTED <strong className="purple">AI & DATA PROJECTS</strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of AI & Data projects including live demos and GitHub
          repositories.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AI Meeting Summarizer — Conversational Intelligence"
              description={`Converts multi-speaker meeting audio into structured transcripts and summarizes action items. Built with Python, NLP, Llama 3.3, AssemblyAI, Pandas, Plotly and deployed on Streamlit Cloud.`}
              demoLink="https://meeting-summarizer-ethiopian.streamlit.app/"
              ghLink="https://github.com/SamriTech/AI-Meeting-Summarizer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Detection of Diabetes — Supervised ML"
              description={`Predicts diabetes using supervised ML models. Implemented with Python, Scikit-learn and Streamlit; includes an interactive demo for testing and visualization.`}
              demoLink="https://detectionofdiabetesusingsupervisedmachinelearning.streamlit.app/"
              ghLink="https://github.com/SamriTech/Diabetes_detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Credit Risk Probability Modeling"
              description={`Builds a credit scoring framework using transactional e-commerce data. Implemented with Python, MLflow, Docker and FastAPI; includes feature engineering and deployment-ready model.`}
              ghLink="https://github.com/SamriTech/credit-risk-model_week4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Predicting Stock Price Movements Using News Sentiment"
              description={`Analyzes news headlines to predict stock price trends using NLP and time-series analysis; includes sentiment scoring, technical indicators and correlation analysis.`}
              ghLink="https://github.com/SamriTech/news-sentiment-project-week1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Customer Experience Analytics for Fintech Apps"
              description={`Analyzes app reviews to identify drivers of customer satisfaction. Built with Python, NLP and PostgreSQL; outputs actionable UX recommendations.`}
              ghLink="https://github.com/SamriTech/bank_review_analytics"
            />
          </Col>
        </Row>

        <h1 className="project-heading" style={{ paddingTop: "40px" }}>
          SOFTWARE &amp; WEB DEVELOPMENT{" "}
          <strong className="purple">PROJECTS</strong>
        </h1>
        <p style={{ color: "white" }}>
          Selected web and mobile projects with links to the repositories and
          demos.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Habeshawi Shop — Full-Stack E-Commerce"
              description={`Scalable MERN e-commerce platform with Stripe payments, MongoDB Atlas and an admin dashboard for product and order management.`}
              ghLink="https://github.com/SamriTech/my-ecommerce-store"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Campus Lost and Found Management System"
              description={`Web solution for reporting and recovering lost items on campus; worked in an agile team on frontend/backend integration.`}
              ghLink="https://github.com/fevenissayas/Campus_Lost_and_Found_Management_System_2024_25"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Iddir Mobile Application"
              description={`Mobile app digitizing the Iddir community system: member management and contribution tracking.`}
              ghLink="https://github.com/Yonaaaaaaaaaaaaas/Group-Project-2-MobileApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Personal Portfolio Website"
              description={`Designed and deployed a responsive portfolio using HTML, CSS and JavaScript to showcase projects across devices.`}
              ghLink="https://github.com/SamriTech/samrawit-portifolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
