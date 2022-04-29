import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ProgressBar,
  Row,
} from "react-bootstrap";
import DefaultLayout from "../../DefaultLayout";
import Title from "../learn/Title";
import Parrot from "../../assets/images/parrot.png";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { AiFillRead, AiFillQuestionCircle } from "react-icons/ai";
import { RiDiscussFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import LangAction from "../learn/LangAction";

const Language = () => {
  const groups = [
    {
      title: "Discuss",
      icon: <RiDiscussFill size="2.5rem" />,
      desc: "TEST DESCRIPTION",
      class: "bg-success",
      link: "/discussions",
    },
    {
      title: "Quiz",
      icon: <AiFillQuestionCircle size="2.5rem" />,
      desc: "TEST DESCRIPTION",
      class: "bg-info",
      link: "/quizes",
    },
    {
      title: "Listen pronotiation",
      icon: <FaAssistiveListeningSystems size="2.5rem" />,
      desc: "TEST DESCRIPTION",
      class: "bg-danger",
      link: "/pronunciations",
    },
    {
      title: "Read Stories",
      icon: <AiFillRead size="2.5rem" />,
      desc: "TEST DESCRIPTION",
      class: "bg-warning",
      link: "/stories",
    },
  ];
  return (
    <DefaultLayout>
      <Container className="custom-green">
        <Title title="Italiano">
          <ProgressBar
            now={60}
            label={`${60}%`}
            variant="success"
            visuallyHidden
          />
        </Title>
        <Row>
          <LangAction md={6} lg={4} {...groups[0]} />
          <Col
            md={12}
            lg={4}
            className="d-lg-flex flex-column justify-content-center align-items-center d-none"
          >
            <Image src={Parrot} className="img-fluid w-50" />
            <Link to="/learn">
              <Button className="bg-dark">Link to Courses</Button>
            </Link>
          </Col>
          <LangAction md={6} lg={4} {...groups[1]} />
          <Col
            md={12}
            lg={4}
            className="d-lg-none flex-column justify-content-center align-items-center d-flex"
          >
            <Image src={Parrot} className="img-fluid w-50" />
            <Link to="/learn">
              <Button className="bg-dark">Link to Courses</Button>
            </Link>
          </Col>
          <LangAction md={6} lg={6} {...groups[2]} />
          <LangAction md={6} lg={6} {...groups[3]} />
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Language;
