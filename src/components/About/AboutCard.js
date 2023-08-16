import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Waleed Shaikh </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br /> I am a graduated Computer Scientist.
            
            <br />
            Additionally, I am currently employed as a software developer at
            tixsee | Pumpjack Dataworks.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dreaming big is the first step towards achieving greatness!"{" "}
          </p>
          <footer className="blockquote-footer">Waleed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
