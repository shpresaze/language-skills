import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const LangAction = (props) => {
  console.log(props);
  return (
    <Col
      xs={12}
      md={props.md}
      lg={props.lg}
      className="my-2 "
      key={props.title}
    >
      <Link to={props.link} className="text-dark nav-link">
        <Card className="p-2 custom-green border-0">
          <Card.Body>
            <Card.Title className="d-flex flex-column align-items-center justify-content-center gap-2">
              {props.icon}
              <Button className={props.class}>{props.title}</Button>
            </Card.Title>
            <Card.Text className="text-center">{props.desc}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default LangAction;
