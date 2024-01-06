import React from "react";
import Welcome from "../../components/Homepage/Welcome";
import UserContent from "../../components/Homepage/UserContent";
import Exam from "../../components/Homepage/Exam";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <>
      <Welcome />
      <UserContent />
      <Exam />
    </>
  );
};

export default Homepage;
// Formik
