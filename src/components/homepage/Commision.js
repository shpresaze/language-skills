import React from "react";
import { Col, Row } from "react-bootstrap";

const Commision = () => {
  const data = [
    {
      amount: "$5",
      desc1: "FREE TRAILS",
      desc2: "",
    },
    {
      amount: "70%",
      desc1: "MONTHLY",
      desc2: "SUBSCRIPTION",
    },
    {
      amount: "70%",
      desc1: "MONTHLY",
      desc2: "SUBSCRIPTION",
    },
    {
      amount: "70%",
      desc1: "MONTHLY",
      desc2: "SUBSCRIPTION",
    },
  ];
  return (
    <Row className="custom-green-dark py-5">
      <Col xs={12}>
        <h1 className="text-center">Commissions</h1>
      </Col>
      <Row>
        {data.map((item, i) => (
          <Col lg={3} md={6} xs={12} className="text-center" key={i}>
            <h3>{item.amount}</h3>
            <p>{item.desc1}</p>
            <p>{item.desc2}</p>
          </Col>
        ))}
      </Row>
    </Row>
  );
};

export default Commision;
