import React from "react";
import { Row } from "react-bootstrap";

const Title = (props) => {
  return (
    <Row
      className="custom-bg d-flex justify-content-center align-items-center h1"
      style={{ height: "200px" }}
    >
      {props.title}
      {props.children}
    </Row>
  );
};

export default Title;
