import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
const Footer = () => {
  return (
    <Container className="p-2 custom-green border-top border-dark">
      <Row>
        <Col className="d-flex gap-4" xs={4}>
          <AiFillFacebook size={"2rem"} />
          <AiOutlineInstagram size={"2rem"} />
          <AiOutlineTwitter size={"2rem"} />
        </Col>
        <Col xs={4} className="text-center">
          <p>Language Skills</p>
        </Col>
        <Col xs={4} className="text-end">
          <p>FINKI,2022</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
