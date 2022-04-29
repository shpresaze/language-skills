import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const DefaultLayout = (props) => {
  return (
    <>
      <Header logged={props.logged} changeLogged={props.changeLogged} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
