import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiMysql, SiMongodb, SiFirebase, SiOracle, SiSqlite, SiPhpmyadmin } from "react-icons/si";

function DatabaseStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite /> 
      </Col>
    </Row>
  );
}

export default DatabaseStack;
