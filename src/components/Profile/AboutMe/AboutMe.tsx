import React from "react";
import "./AboutMe.css";

type Props = {
  data: any;
};

const AboutMe = (props: Props) => {
  return (
    <div className="about-me">
      <div className="about-me-content">{props.data}</div>
    </div>
  );
};

export default AboutMe;
