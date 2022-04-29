import React from "react";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DefaultLayout from "../../DefaultLayout";
const Register = (props) => {
  const navigate = useNavigate();
  return (
    <DefaultLayout {...props}>
      <Container
        className="d-flex flex-column justify-content-center align-items-center custom-green"
        style={{ minHeight: "75vh" }}
      >
        <h1>Register</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.changeLogged(true);
            localStorage.setItem("logged", true);
            navigate("/learn");
          }}
        >
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Full Name</InputGroup.Text>
            <FormControl
              placeholder="Full Name"
              aria-label="Full Name"
              aria-describedby="basic-addon1"
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Passoword</InputGroup.Text>
            <FormControl
              placeholder="Passoword"
              aria-label="Passoword"
              aria-describedby="basic-addon1"
              type="password"
              required
            />
          </InputGroup>
          <Button type="submit"> Log in</Button>
        </form>
        <div>
          Already a member <Link to="/login">login</Link>
        </div>
      </Container>
    </DefaultLayout>
  );
};

export default Register;
