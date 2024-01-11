import React from "react";
import "./Login.css";
import LoginElement from "../../components/Login/LoginElement";
type Props = {};

const Login = (props: Props) => {
  return (
    <div className="login-page">
      <LoginElement />
    </div>
  );
};

export default Login;
