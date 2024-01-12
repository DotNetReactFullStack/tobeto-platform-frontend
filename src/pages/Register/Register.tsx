import React from "react";
import RegisterElement from "../../components/LoginAndRegister/RegisterElement";
import LoginAndRegisterContainer from "../../components/LoginAndRegister/LoginAndRegisterContainer";

type Props = {};

const Register = (props: Props) => {
  return (
    <LoginAndRegisterContainer childComponent={RegisterElement} />
  );
};

export default Register;
