import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cre8ive from "../../Assets/Projects/Cre8ive_Studio.png";
import game from "../../Assets/Projects/Start_Point.png";
import SmartINventory from "../../Assets/Projects/Smart-Inventory-Management.jpg";
import Foodvilla from "../../Assets/Projects/Food-villa-1.jpg";
import Goodnotes from "../../Assets/Projects/GoodNotes.png";
import Mytwitter from "../../Assets/Projects/My-twitter.png";
import Healthsync from "../../Assets/Projects/Healthsync.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Project <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Healthsync}
              isBlog={false}
              title="HealthSync"
              description="HealthSync is an web application which solve the patient appointment by providing an digital booking."
              ghLink="https://github.com/Siddhit-kale/HealthSync"
              demoLink="https://tdshealthsync.vercel.app/"
             />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cre8ive}
              isBlog={false}
              title="Cre8ive Studio"
              description="Cre8ive Studio project an SaaS application that offers a suite of advanced image editing features through Cloudinary API. The app will provide users with capabilities such as image restoration, background removal, object recoloring, object removal, and generative fill."
              ghLink="https://github.com/Siddhit-kale/Cre8ive_Studio"
              demoLink="https://cre8ive-studio.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Foodvilla}
              isBlog={false}
              title="Food Villa"
              description="FOOD VILLA is a digital solution for restaurants, providing an interactive menu for waiters to place orders easily by clicking on food items. This project aims to reduce the burden on waitstaff, especially in busy restaurants, by transitioning from traditional hard-coded menus to a dynamic, soft-coded system."
              ghLink="https://github.com/Siddhit-kale/Food-Villa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mytwitter}
              isBlog={false}
              title="My Twitter App"
              description="My Twitter is a Flutter Application with the feature like Posting message, delete & update post, Follow user profile, report. This kind of the features help user to share there thoughts to other users."
              ghLink="https://github.com/Siddhit-kale/MYTwitter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SmartINventory}
              isBlog={false}
              title="Smart Inventory Management System"
              description="Smart Inventory management system is web application that manage the institute lab's equipment and create a data records of the Admin, faculty members, students and this basic of data."
              ghLink="https://github.com/Siddhit-kale/Smart_Inventory_Management"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Goodnotes}
              isBlog={false}
              title="Good Notes"
              description="A notes-writing web app built with the MERN stack and Vite. It features user authentication and allows users to create, update, and delete notes, with data stored in MongoDB and managed via a Node.js backend. React handles the frontend for seamless CRUD operations."
              ghLink="https://github.com/Siddhit-kale/Notes_app_mern_stack"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Ping Pong Game"
              description="A ping pong game project involves creating a virtual simulation of the classic table tennis game using programming and graphics."
              ghLink="https://github.com/Siddhit-kale/ping-pong-game-using-python"
             />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
