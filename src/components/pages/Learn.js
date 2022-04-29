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
import Turkish from "../../assets/images/tr.png";
import English from "../../assets/images/en.png";
import Italian from "../../assets/images/it.png";
import Albanian from "../../assets/images/sq.png";
import { Link } from "react-router-dom";

const Learn = (props) => {
  const langs = [
    {
      lang: "Italian",
      progress: 60,
      flag: Italian,
    },
    {
      lang: "Turkish",
      progress: 60,
      flag: Turkish,
    },
    {
      lang: "English",
      progress: 60,
      flag: English,
    },
    {
      lang: "Albanian",
      progress: 60,
      flag: Albanian,
    },
  ];
  return (
    <DefaultLayout {...props}>
      <Container className="custom-green">
        <Title title="Choose a language" />
        <Row>
          {langs.map((lang) => (
            <Col xs={12} lg={6} className="my-2" key={lang.lang}>
              <Card className="p-2">
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    <Image
                      src={lang.flag}
                      className="img-fluid"
                      style={{ width: "50px" }}
                    />
                    <h1>{lang.lang}</h1>
                  </Card.Title>
                  <Card.Text>
                    <ProgressBar
                      now={lang.progress}
                      label={`${lang.progress}%`}
                      variant="success"
                      visuallyHidden
                    />
                  </Card.Text>
                  <div className="d-flex gap-2">
                    <Button disabled className="w-50">
                      Start
                    </Button>
                    <Button className="w-50">
                      <Link to="/language" className="text-light nav-link">
                        Continue
                      </Link>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Learn;
