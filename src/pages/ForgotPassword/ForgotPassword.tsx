import React from "react";
import LoginAndRegisterContainer from "../../components/LoginAndRegister/LoginAndRegisterContainer";
import ForgotPasswordElement from "../../components/LoginAndRegister/ForgotPasswordElement";

type Props = {};

const ForgotPassword = (props: Props) => {
  return <LoginAndRegisterContainer childComponent={ForgotPasswordElement} />;
};

export default ForgotPassword;
