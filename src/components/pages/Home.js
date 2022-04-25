import React from "react";
import { Container } from "react-bootstrap";
import DefaultLayout from "../../DefaultLayout";
import AboutUs from "../homepage/AboutUs";
import Commision from "../homepage/Commision";
import CreateAcc from "../homepage/CreateAcc";
import FirstSection from "../homepage/FirstSection";
import Why from "../homepage/Why";
const Home = () => {
  return (
    <DefaultLayout>
      <Container className="custom-green">
        <FirstSection />
        <Why />
        <Commision />
        <AboutUs />
        <CreateAcc />
      </Container>
    </DefaultLayout>
  );
};

export default Home;