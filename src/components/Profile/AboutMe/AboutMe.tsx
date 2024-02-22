import React from "react";
import "./AboutMe.css";
import { useSelector } from "react-redux";

type Props = {};

const AboutMe = (props: Props) => {

  const currentAccount = useSelector((state: any) => state.account.currentAccount.payload);

  return (
    <div className="about-me">
      <div className="about-me-content">{currentAccount.aboutMe}</div>
    </div>
  );
};

export default AboutMe;
