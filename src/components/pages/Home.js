import React from "react";
import { Container } from "react-bootstrap";
import DefaultLayout from "../../DefaultLayout";
import AboutUs from "../homepage/AboutUs";
import Commision from "../homepage/Commision";
import CreateAcc from "../homepage/CreateAcc";
import FirstSection from "../homepage/FirstSection";
import Why from "../homepage/Why";
const Home = (props) => {
  return (
    <DefaultLayout {...props}>
      <Container className="custom-green">
        <FirstSection logged={props.logged} />
        <Why />
        <Commision />
        <AboutUs />
        {!props.logged && <CreateAcc />}
      </Container>
    </DefaultLayout>
  );
};

export default Home;
