import React from "react";
import AuthInput from "../../components/AuthInput";
import Button from "../../components/Button";
import { AuthTitle, AuthWrapper } from "../LoginPage/styled";

const RegisterPage = () => {
  return (
    <AuthWrapper>
      <AuthTitle>Register</AuthTitle>
      <AuthInput placeholder="Username" />
      <AuthInput placeholder="Email" />
      <AuthInput placeholder="Password" />
      <AuthInput placeholder="Repeat the password" />
      <Button>Register</Button>
    </AuthWrapper>
  );
};

export default RegisterPage;
