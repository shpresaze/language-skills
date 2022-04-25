import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const DefaultLayout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
