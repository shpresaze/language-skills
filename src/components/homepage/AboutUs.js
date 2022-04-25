import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Row className="custom-green m-5 p-5">
      <Col xs={12}>
        <h1 className="text-center">About Us?</h1>
      </Col>
      <Row>
        <Carousel variant="dark" style={{ height: "300px" }}>
          <Carousel.Item>
            <div className="d-block w-100">TEST</div>
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=eee"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=e5e5e5"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Row>
  );
};

export default AboutUs;
