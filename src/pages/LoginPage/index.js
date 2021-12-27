import React, { useContext, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import AuthInput from "../../components/AuthInput/index.js";
import Button from "../../components/Button/index.js";
import Loader from "../../components/Loader/index.js";
import { AuthContext } from "../../context/Auth.js";
import {
  AuthTitle,
  AuthWrapper,
  RememberLabel,
  RememberLabelText,
  LoginErrorMessage,
} from "./styled.js";

const LoginPage = () => {
  const { login, loginError, loginLoading, clearErrors } =
    useContext(AuthContext);

  const handleLogin = async (values) => {
    login(values);
  };

  useEffect(() => {
    return () => {
      clearErrors();
    };
  }, [clearErrors]);

  if (loginLoading) {
    return <Loader />;
  }
  return (
    <AuthWrapper>
      {loginError && (
        <LoginErrorMessage>
          <div className="alert alert-danger" role="alert">
            {loginError}
          </div>
        </LoginErrorMessage>
      )}
      <AuthTitle>Login</AuthTitle>
      <Formik
        initialValues={{
          email: "",
          password: "",
          checkedRemember: false,
        }}
        onSubmit={handleLogin}
      >
        {() => (
          <Form>
            <AuthWrapper>
              <Field
                name="email"
                type="email"
                as={AuthInput}
                placeholder="Email"
              />
              <Field
                name="password"
                type="password"
                as={AuthInput}
                placeholder="Password"
              />
              <RememberLabel>
                <Field name="checkedRemember" type="checkbox" />
                <RememberLabelText>Remember me</RememberLabelText>
              </RememberLabel>
              <Button type="submit">Login</Button>
            </AuthWrapper>
          </Form>
        )}
      </Formik>
    </AuthWrapper>
  );
};

export default LoginPage;
