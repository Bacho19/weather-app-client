import React from "react";
import md5 from "md5";
import { useNavigate } from "react-router-dom";
import AuthInput from "../../components/AuthInput";
import Button from "../../components/Button";
import { AuthTitle, AuthWrapper } from "../LoginPage/styled";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/auth/action";
import { useRegisterForm } from "../../hooks/useRegisterForm";
import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";

const RegisterPage = () => {
  const { values, handleValues, errors, isFormValid, clearValues } =
    useRegisterForm();

  const { loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    const hashedPassword = md5(values.password);
    const newUser = {
      username: values.username,
      email: values.email,
      password: hashedPassword,
    };
    dispatch(registerUser(newUser));
    clearValues();
    navigate("/login");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <AuthWrapper>
      <AuthTitle>Register</AuthTitle>
      <div>
        {errors.usernameError && (
          <ErrorMessage>* {errors.usernameError}</ErrorMessage>
        )}
        <AuthInput
          value={values.username}
          onChange={handleValues.handleUsername}
          type="text"
          placeholder="Username"
        />
      </div>
      <div>
        {errors.emailError && (
          <ErrorMessage>* {errors.emailError}</ErrorMessage>
        )}
        <AuthInput
          value={values.email}
          onChange={handleValues.handleEmail}
          type="email"
          placeholder="Email"
        />
      </div>
      <div>
        {errors.passwordError && (
          <ErrorMessage>* {errors.passwordError}</ErrorMessage>
        )}
        <AuthInput
          value={values.password}
          onChange={handleValues.handlePassword}
          type="password"
          placeholder="Password"
        />
      </div>
      <div>
        {errors.password2Error && (
          <ErrorMessage>* {errors.password2Error}</ErrorMessage>
        )}
        <AuthInput
          value={values.password2}
          onChange={handleValues.handlePassword2}
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
