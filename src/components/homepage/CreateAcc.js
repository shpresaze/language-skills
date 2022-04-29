import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreateAcc = () => {
  return (
    <Row className="d-flex justify-content-center py-5 custom-green-dark mt-3">
      <Col xs={12} lg={6} className="d-flex flex-column justify-content-center">
        <h1>Create an account and join us</h1>
        <p>
          Get visitors to click your CTA by reminding them they can make a 30%
          commission on all sales – and bring in up to $5000 a month – just from
          referrals!
        </p>
        <Link to="/register" className="nav-link">
          <Button variant="dark" className="rounded-pill w-50 mx-auto">
            CREATE ACCOUNT
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default CreateAcc;
