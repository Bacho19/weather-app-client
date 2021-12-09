import React from "react";
import AuthInput from "../../components/AuthInput/index.js";
import Button from "../../components/Button/index.js";
import {
  AuthTitle,
  AuthWrapper,
  RememberLabel,
  RememberLabelText,
} from "./styled.js";

const LoginPage = () => {
  return (
    <AuthWrapper>
      <AuthTitle>Login</AuthTitle>
      <AuthInput placeholder="Email" />
      <AuthInput placeholder="Password" />
      <RememberLabel>
        <input type="checkbox" />
        <RememberLabelText>Remember me</RememberLabelText>
      </RememberLabel>
      <Button>Login</Button>
    </AuthWrapper>
  );
};

export default LoginPage;
