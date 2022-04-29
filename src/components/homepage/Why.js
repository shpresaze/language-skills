import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { AiFillRead, AiFillQuestionCircle } from "react-icons/ai";

const Why = () => {
  const data = [
    {
      icon: <AiFillRead size="4rem" />,
      title: "Read",
      desc: "desc",
    },
    {
      icon: <FaAssistiveListeningSystems size="4rem" />,
      title: "Listen Pronuntiation",
      desc: "desc",
    },
    {
      icon: <AiFillQuestionCircle size="4rem" />,
      title: "Do Quizes",
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
