import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import readingParrot from "../../assets/images/reading-parrot.png";
const FirstSection = () => {
  return (
    <Row className="custom-bg">
      <Col lg={5} xs={12} className="d-flex flex-column justify-content-center">
        <h1 className="m-2">
          Join us and learn some stuff with the parrot stories
        </h1>
        <div className="m-5">
          <h2>How can i start?</h2>
          <p>Create an account for free</p>
          <p>and start your jurney!</p>
        </div>
        <Button variant="dark" className="rounded-pill w-50 mx-auto">
          CREATE ACCOUNT
        </Button>
      </Col>
      <Col lg={7} xs={12}>
        <Image src={readingParrot} className="img-fluid" />
      </Col>
    </Row>
  );
};

export default FirstSection;
