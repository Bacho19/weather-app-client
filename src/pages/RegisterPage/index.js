import React from "react";
import md5 from "md5";
import { useNavigate } from "react-router-dom";
import AuthInput from "../../components/AuthInput";
import Button from "../../components/Button";
import { AuthTitle, AuthWrapper } from "../LoginPage/styled";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/auth/action";
import { useRegisterForm } from "../../hooks/useRegisterForm";
import ErrorMessage from "../../components/ErrorMessage";

const RegisterPage = () => {
  const {
    username,
    email,
    password,
    password2,
    handleUsername,
    handleEmail,
    handlePassword,
    handlePassword2,
    usernameError,
    emailError,
    passwordError,
    password2Error,
    isFormValid,
    clearValues,
  } = useRegisterForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    const hashedPassword = md5(password);
    const newUser = {
      username: username,
      email: email,
      password: hashedPassword,
    };
    dispatch(registerUser(newUser));
    clearValues();
    navigate("/login");
  };

  return (
    <AuthWrapper>
      <AuthTitle>Register</AuthTitle>
      <div>
        {usernameError && <ErrorMessage>* {usernameError}</ErrorMessage>}
        <AuthInput
          value={username}
          onChange={handleUsername}
          type="text"
          placeholder="Username"
        />
      </div>
      <div>
        {emailError && <ErrorMessage>* {emailError}</ErrorMessage>}
        <AuthInput
          value={email}
          onChange={handleEmail}
          type="email"
          placeholder="Email"
        />
      </div>
      <div>
        {passwordError && <ErrorMessage>* {passwordError}</ErrorMessage>}
        <AuthInput
          value={password}
          onChange={handlePassword}
          type="password"
          placeholder="Password"
        />
      </div>
      <div>
        {password2Error && <ErrorMessage>* {password2Error}</ErrorMessage>}
        <AuthInput
          value={password2}
          onChange={handlePassword2}
          type="password"
          placeholder="Repeat the password"
        />
      </div>
      <Button disabled={!isFormValid} onClick={handleRegister}>
        Register
      </Button>
    </AuthWrapper>
  );
};

export default RegisterPage;
