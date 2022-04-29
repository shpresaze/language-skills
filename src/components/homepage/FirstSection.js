import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import readingParrot from "../../assets/images/reading-parrot.png";
const FirstSection = (props) => {
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
        {props.logged ? (
          <Link to="/learn" className="nav-link">
            <Button variant="dark" className="rounded-pill w-50 mx-auto">
              LEARN
            </Button>
          </Link>
        ) : (
          <Link to="/register" className="nav-link">
            <Button variant="dark" className="rounded-pill w-50 mx-auto">
              CREATE ACCOUNT
            </Button>
          </Link>
        )}
      </Col>
      <Col lg={7} xs={12}>
        <Image src={readingParrot} className="img-fluid" />
      </Col>
    </Row>
  );
};

export default FirstSection;
