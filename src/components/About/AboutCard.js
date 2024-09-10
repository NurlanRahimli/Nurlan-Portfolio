import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Nurlan Rahimli </span>
            from <span className="purple"> Baku, Azerbaijan.</span>
            <br />I'm a Front-End Developer with over 2+ years of experience in web development. I am passionate about creating great user experiences and am well versed in usability and accessibility standards.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Websites promote you 24/7, No employee will do that!"{" "}
          </p>
          <footer className="blockquote-footer">Nurlan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
