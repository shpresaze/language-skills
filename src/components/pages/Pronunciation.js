import React from "react";
import ItemList from "../learn/ItemList";
import DefaultLayout from "../../DefaultLayout";
import { Container } from "react-bootstrap";
import Checkbox from "../learn/Checkbox";
const Pronunciation = (props) => {
  const quizes = [
    {
      id: 1,
      title: "Ciao",
      audioLink: "http://www.nemolanguageapps.com/audio/mp3/ITAFND1_0001.mp3",
    },
    {
      id: 2,
      title: "Grazie",
      audioLink: "http://www.nemolanguageapps.com/audio/mp3/ITAFND1_0003.mp3",
    },
    {
      id: 3,
      title: "Scusa",
      audioLink: "http://www.nemolanguageapps.com/audio/mp3/ITAFND1_0006.mp3",
    },
    {
      id: 4,
      title: "Ciao",
      audioLink: "http://www.nemolanguageapps.com/audio/mp3/ITAFND1_0001.mp3",
    },
    {
      id: 5,
      title: "Grazie",
      audioLink: "http://www.nemolanguageapps.com/audio/mp3/ITAFND1_0003.mp3",
    },
    {
      id: 6,
      title: "Scusa",
      audioLink: "http://www.nemolanguageapps.com/audio/mp3/ITAFND1_0006.mp3",
    },
  ];
  return (
    <DefaultLayout {...props}>
      <Container className="custom-green">
        <ItemList
          title="Pronunciation"
          data={quizes}
          link={"#"}
          hasSearch={true}
        >
          audio
        </ItemList>
      </Container>
    </DefaultLayout>
  );
};

export default Pronunciation;
