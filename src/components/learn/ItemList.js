import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Item from "./Item";
import parrot from "../../assets/images/parrot.png";
const ItemList = (props) => {
  const [val, setVal] = useState("");
  return (
    <>
      <Row
        className="custom-bg d-flex justify-content-center align-items-center h1"
        style={{ height: "200px" }}
      >
        {props.title}
      </Row>
      {props.hasSearch && (
        <Row>
          <label htmlFor="search" className="w-25 mx-auto">
            <input
              id="search"
              name="search"
              placeholder="Search"
              type="search"
              className="ms-3"
              onChange={(e) => setVal(e.target.value)}
            />
          </label>
        </Row>
      )}
      <Row
        style={{ minHeight: "200px", maxHeight: "400px", overflowY: "auto" }}
        className="mx-auto w-75"
      >
        {props.data
          ?.filter((data) =>
            data.title.toLowerCase().includes(val.toLowerCase())
          )
          .map((item) => (
            <Item key={item.id} {...item} imgSrc={parrot} link={props.link}>
              {props.children}
            </Item>
          ))}
      </Row>
    </>
  );
};

export default ItemList;
