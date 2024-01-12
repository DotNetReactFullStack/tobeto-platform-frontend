import React from "react";
import LoginElement from "../../components/LoginAndRegister/LoginElement";
import LoginAndRegisterContainer from "../../components/LoginAndRegister/LoginAndRegisterContainer";
type Props = {};

const Login = (props: Props) => {
  return (
    <LoginAndRegisterContainer childComponent={LoginElement} />
  );
};

export default Login;
