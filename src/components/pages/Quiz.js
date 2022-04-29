import React from "react";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../../DefaultLayout";
import Title from "../learn/Title";

const Quiz = (props) => {
  const navigate = useNavigate();
  return (
    <DefaultLayout {...props}>
      <Container className="custom-green ">
        <Title title="Question" />
        <p>Which one means: The parrot gets up at 7 o'clock</p>
        <form
          className="d-flex flex-column justify-content-center"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/quizes");
          }}
        >
          <label htmlFor="first">
            la papagalle dormio
            <input type="radio" id="first" name="quest" value="1" required />
          </label>
          <label htmlFor="first">
            la papagalle dormio
            <input type="radio" id="first" name="quest" value="2" required />
          </label>
          <label htmlFor="first">
            la papagalle dormio
            <input type="radio" id="first" name="quest" value="3" required />
          </label>
          <Button type="submit" className="w-25 me-auto">
            Submit
          </Button>
        </form>
      </Container>
    </DefaultLayout>
  );
};

export default Quiz;
