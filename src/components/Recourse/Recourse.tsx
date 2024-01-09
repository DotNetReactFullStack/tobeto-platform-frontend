import React from "react";
import "./Recourse.css";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import RecourseElement from "./RecourseElement";

type Props = {};

const Recourse = (props: Props) => {
  return (
    <>
      <div className="recourse-component">
        <RecourseElement />
        <RecourseElement />
      </div>
      <ShowMoreButton />
    </>
  );
};

export default Recourse;
