import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiPython, DiJava, DiGit } from "react-icons/di";
import { FaSalesforce } from "react-icons/fa";
import { SiFlutter, SiDart, SiHtml5, SiPhp, SiCss3, SiBootstrap } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaSalesforce />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter /> {/* Flutter icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 /> {/* HTML5 icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp /> {/* PHP icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 /> {/* CSS icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap /> {/* Bootstrap icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> {/* Git icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart /> {/* Dart icon */}
      </Col>
    </Row>
  );
}

export default Techstack;
