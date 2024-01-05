import React from "react";
import Welcome from "../../components/Homepage/Welcome";
import UserContent from "../../components/Homepage/UserContent";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <>
      <Welcome />
      <UserContent />
    </>
  );
};

export default Homepage;
// Formik
