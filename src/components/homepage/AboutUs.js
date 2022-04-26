import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import CarusalCard from "./CarusalCard";

const AboutUs = () => {
  return (
    <>
      <h1 className="text-center">About Us?</h1>
      <Carousel
        variant="dark"
        className="d-flex align-items-center text-center w-100"
      >
        <Carousel.Item>
          <CarusalCard
            bio='"That program is one of the best in the industry. It helped me a lot."'
            name="Shpresa Zendeli"
            position="FullStack Developer"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarusalCard
            bio='"That program is one of the best in the industry. It helped me a lot."'
            name="Shpresa Zendeli"
            position="FullStack Developer"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarusalCard
            bio='"That program is one of the best in the industry. It helped me a lot."'
            name="Shpresa Zendeli"
            position="FullStack Developer"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default AboutUs;
