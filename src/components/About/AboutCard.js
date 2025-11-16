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
          Computer Science undergraduate from CHARUSAT (Charotar University of Science and Technology), Gujarat. I’m passionate about building real-world solutions using modern technologies and continuously expanding my technical expertise.
          <br />
          <br />
          Recently, I have also started focusing on Salesforce Development, where I’m learning Salesforce Admin, Apex, Triggers, and working on small practice projects to strengthen my understanding of CRM and automation.

          I enjoy solving challenges, improving user experience, and writing clean, maintainable code. Beyond technical skills, I value teamwork, communication, accountability, and continuous learning, which help me perform effectively in collaborative environments.
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
