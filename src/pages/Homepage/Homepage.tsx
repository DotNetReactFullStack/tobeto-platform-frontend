import React from "react";
import Welcome from "../../components/Homepage/Welcome";
import UserContent from "../../components/Homepage/UserContent";
import Exam from "../../components/Exam/Exam";
import NavCard from "../../components/Homepage/NavCard";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <>
      <Welcome />
      <UserContent />
      <Exam />
      <NavCard />
    </>
  );
};

export default Homepage;
// Formik
