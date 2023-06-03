import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movie from "../../Assets/Projects/movie.jpg"
import marvel from "../../Assets/Projects/marvel.jpg"
import country from "../../Assets/Projects/country.jpg"
import baristica from "../../Assets/Projects/baristica.jpg"
import baoke from "../../Assets/Projects/baoke.jpg"
import etrade from "../../Assets/Projects/etrade.jpg"


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
              imgPath={movie}
              isBlog={false}
              title="Movie"
              description="This is a Movie website build with React.js Css and Scss. You can find out the information about Movies and Tv Series"
              ghLink="https://github.com/NurlanRahimli/Movie-React"
              demoLink="https://movies-react-nurlan.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marvel}
              isBlog={false}
              title="Marvel"
              description="This is a Marvel website build with React.js and Css. You can find out the information about marvel heroes and their comics"
              ghLink="https://github.com/NurlanRahimli/Marvel-React"
              demoLink="https://marvel-nurlan.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={country}
              isBlog={false}
              title="Country"
              description="My personal country website build with React.js and Css. On this site, you can find out the capital of the country and in which region it is located"
              ghLink="https://github.com/NurlanRahimli/Countries-React-Api"
              demoLink="https://country-capital-challenge.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baristica}
              isBlog={false}
              title="Baristica"
              description="This is a baristica website build with Html, Tailwind css and Js. This my first project with Tailwind css"
              ghLink="https://github.com/NurlanRahimli/Baristica-Tailwind"
              demoLink="https://baristica-coffee.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baoke}
              isBlog={false}
              title="Baoke"
              description="This is a baoke website build with Html, Css and Js."
              ghLink="https://github.com/NurlanRahimli/Baoke-Front"
              demoLink="https://baoke-front.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={etrade}
              isBlog={false}
              title="Etrade"
              description="This is an etrade website build with Html, Css, Js. This is my first big project in my web development career. This site has 6 pages."
              ghLink="https://github.com/NurlanRahimli/Etrade-Front"
              demoLink="https://etrade-front.netlify.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
