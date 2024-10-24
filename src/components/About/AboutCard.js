import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Kale Siddhit</span> from <span className="purple">Vadodara, Gujarat, India.</span> 
          I am a student at Charotar University of Science and Technology (CHARUSAT), currently pursuing a B.Tech in Computer Science. 
          I have a strong passion for technology and programming, which drives me to continuously learn and improve my skills. My experience includes web development & APP development, where I’ve worked with various technologies such as React, Node.js, and Flutter.  
          In addition to my technical skills, I believe in the importance of teamwork and effective communication. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football Matches
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work on solving problems to improve your programming skills."{" "}
          </p>
          <footer className="blockquote-footer">Siddhit Kale</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
