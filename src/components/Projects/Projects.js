import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Xerofinity Website"
              description="Welcome to our dynamic web services company, where innovation meets expertise. We specialize in crafting immersive online experiences that empower businesses to thrive in the digital realm. From sleek website design and seamless e-commerce integration to robust web development and strategic SEO optimization, we are your partner in turning visions into virtual realities"
              ghLink="https://github.com/waleedshaikh-code/xerofinity"
              demoLink="www.xerofinity.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Noone-Website"
              description="Introducing Noone Website Clone – Your gateway to creating a personalized and unique online identity. Embrace the power of customization as we offer you a platform to replicate the minimalist elegance of Noone's design."
              ghLink="https://github.com/waleedshaikh-code/noone-web"
              demoLink="https://noone-techfinitysolutions.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Hulu Website"
              description="Step into the world of limitless entertainment with our Hulu Website Clone. Immerse yourself in the ultimate streaming experience, where you can replicate the user-friendly interface and extensive content library of Hulu. From trending shows and blockbuster movies to exclusive originals."
              ghLink="https://github.com/waleedshaikh-code/hulu-landing"
              demoLink="https://techfinitysolutions-hulu.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Company Website"
              description="Welcome to our dynamic web services company, where innovation meets expertise. We specialize in crafting immersive online experiences that empower businesses to thrive in the digital realm. From sleek website design and seamless e-commerce integration to robust web development and strategic SEO optimization, we are your partner in turning visions into virtual realities"
              ghLink="https://github.com/waleedshaikh-code/portfolio"
              demoLink="https://techfinitysolutions.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Online Quiz App"
              description="Unleash the power of knowledge and engagement with our Online Quiz Application. Transform learning and fun into an interactive experience by creating your own customized quizzes, tests, and assessments. Whether for education, training, or entertainment, our user-friendly platform empowers you to design, share, and analyze quizzes seamlessly."
              ghLink="https://github.com/waleedshaikh-code/quiz-app"
              demoLink="https://quiz-app-7eac9.web.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Van Tracking System"
              description="Introducing VAN-ON: Your Gateway to Effortless Fleet Management. Experience the future of vehicle tracking with our cutting-edge Van Tracking System. From real-time location monitoring to route optimization and comprehensive vehicle analytics, VAN-ON empowers businesses to streamline operations, increase efficiency, and enhance security."
              ghLink="https://github.com/waleedshaikh-code/fyp-project"
              demoLink="#" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
