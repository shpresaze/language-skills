import React from "react";
import { Container } from "react-bootstrap";
import DefaultLayout from "../../DefaultLayout";
import DiscussionList from "../learn/DiscussionList";

const Disucssion = (props) => {
  return (
    <DefaultLayout {...props}>
      <Container className="custom-green">
        <DiscussionList />
      </Container>
    </DefaultLayout>
  );
};

export default Disucssion;
