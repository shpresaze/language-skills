import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import DefaultLayout from "../../DefaultLayout";
import Title from "../learn/Title";
import Story1 from "../../assets/images/story1.png";
import Story2 from "../../assets/images/story2.png";

const Story = () => {
  return (
    <DefaultLayout>
      <Container className="custom-green">
        <Title title="Par's morning"></Title>

        <Row>
          <Col
            xs={12}
            lg={6}
            className="custom-bg my-2 d-flex flex-column justify-content-center align-items-center"
          >
            <p>
              Era sabato, i primi raggi del sole mattutino cominciarono a
              entrare dalla finestra e caddero sul muso del pappagallo.
            </p>
            <p>
              Si svegliò dal suo dolce sonno e si alzò dal letto, corse subito
              in bagno a lavarsi i denti e la faccia.
            </p>
            <p>
              Alle 8 mangia ogni mattina con cereali e latte poi si prepara ed
              esce di casa per volare nel verde dei prati
            </p>
          </Col>
          <Col xs={12} lg={6} className="my-2">
            <Image src={Story1} className="img-fluid w-50" />
          </Col>
          <Col xs={12} lg={6} className="my-2 d-flex justify-content-end">
            <Image src={Story2} className="img-fluid w-50" />
          </Col>
          <Col
            xs={12}
            lg={6}
            className="custom-bg my-2 d-flex flex-column justify-content-center align-items-center"
          >
            <p>
              It was Saturday, the first rays of the morning sun began to enter
              through the window and fell on the parrot's face.
            </p>
            <p>
              He woke up from his sweet sleep and got out of bed, immediately
              ran to the bathroom to brush his teeth and face.
            </p>
            <p>
              At 8 o'clock he eats every morning with cereal and milk then
              prepares and leaves the house to fly in the green fields.
            </p>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Story;
