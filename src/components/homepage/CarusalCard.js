import React from "react";
import { CgProfile } from "react-icons/cg";
import classes from "./CarouselCard.module.scss";
const CarusalCard = (props) => {
  return (
    <div className="w-100">
      <div
        className={`p-5 bg-white w-50 mx-auto custom-width ${classes["custom-width"]}`}
      >
        <p>
          <em>{props.bio}</em>
        </p>
        <div className="d-flex justify-content-center">
          <div className="d-none d-md-block me-3">
            <CgProfile size={"4rem"} />
          </div>
          <div className="text-center">
            <div>{props.name}</div>
            <div>{props.position}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarusalCard;
