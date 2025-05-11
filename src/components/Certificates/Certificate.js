import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard"; 
import Particle from "../Particle"; 
import sampleImage from "../../Assets/Certificates/nptel_page-0001.jpg";
import nptel_block from "../../Assets/Certificates/Blockchain_nptel.png";
import internship from "../../Assets/Certificates/Internship Certificate_page-0001.jpg" 
import flipkart from "../../Assets/Certificates/Flipkart-Grid-6.0_page-0001.jpg"
import javabasic from "../../Assets/Certificates/java_basic certificate_page-0001.jpg"
import redhat from "../../Assets/Certificates/red-hat_page-0001.jpg" 
import sqlbasic from "../../Assets/Certificates/sql_basic certificate_page-0001.jpg" 
import flutter from "../../Assets/Certificates/Introduction to flutter couse_page-0001.jpg" 
import codechef from "../../Assets/Certificates/code-chef_page-0001.jpg" 
import blockchain from "../../Assets/Certificates/Blockchain Workshop_page.png"
import hackathon from "../../Assets/Certificates/Hackathon.png"
import codeunnati from "../../Assets/Certificates/codeunnati.png"

function Certificate() {
  return (
    <Container fluid className="certificate-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificates I've earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="certificate-card">
            <CertificateCard
              imagePath={sampleImage}
              title="Database Management Systems"
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imagePath={nptel_block}
              title="Blockchain and its Application"
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imagePath={internship}
              title="Internship Completion Certification"
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imagePath={hackathon}
              title="SAP GTU Codeunnati innovation marathon 3.0"
            />
          </Col>


          <Col md={4} className="certificate-card">
            <CertificateCard
              imagePath={codeunnati}
              title="SAP Codeunnati Advance Course"
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imagePath={flipkart}
              title="Flipkart-Grid-6.0"
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imagePath={redhat}
              title="Red hat certification"
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imagePath={codechef}
              title="Code chef certification"
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imagePath={flutter}
              title="Introduction to flutter"
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imagePath={javabasic}
              title="Basic java certification"
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imagePath={sqlbasic}
              title="Basic Sql certification"
            />
          </Col>

          <Col md={4} className="certificate-card">
            <CertificateCard
              imagePath={blockchain}
              title="Blockchain workshop Certification"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
