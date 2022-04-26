import React from "react";
import { Col, Row } from "react-bootstrap";

const Why = () => {
  const data = [
    {
      icon: "ico",
      title: "Title",
      desc: "desc",
    },
    {
      icon: "ico",
      title: "Title",
      desc: "desc",
    },
    {
      icon: "ico",
      title: "Title",
      desc: "desc",
    },
  ];
  return (
    <Row className="custom-green m-5 p-5">
      <Col xs={12}>
        <h1 className="text-center">Why you must use LS?</h1>
      </Col>
      <Row>
        {data.map((item, i) => (
          <Col lg={4} md={6} xs={12} className="text-center" key={i}>
            <div>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Col>
        ))}
      </Row>
    </Row>
  );
};

export default Why;
