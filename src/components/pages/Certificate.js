import React from "react";
import { Container, Image } from "react-bootstrap";
import DefaultLayout from "../../DefaultLayout";
import Title from "../learn/Title";
import CertificateImg from "../../assets/images/cert.png";
import { Link } from "react-router-dom";

const Certificate = (props) => {
  return (
    <DefaultLayout {...props}>
      <Container className="custom-green">
        <Title title="Certificate"></Title>
        <div className="d-flex flex-column justify-content-center align-items-center py-2">
          <Image src={CertificateImg} className="img-fluid w-50" />
          <Link
            to="/cert.pdf"
            target="_blank"
            download
            className="btn btn-dark my-2"
          >
            Download
          </Link>
        </div>
      </Container>
    </DefaultLayout>
  );
};

export default Certificate;
