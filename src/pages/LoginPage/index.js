import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import AuthInput from "../../components/AuthInput/index.js";
import Button from "../../components/Button/index.js";
import Loader from "../../components/Loader/index.js";
import { loginUser } from "../../store/auth/action.js";
import {
  AuthTitle,
  AuthWrapper,
  RememberLabel,
  RememberLabelText,
  LoginErrorMessage,
} from "./styled.js";

const LoginPage = () => {
  const { loading, loginError } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogin = ({ email, password, checkedRemember }) => {
    if (email.trim() && password.trim()) {
      dispatch(loginUser({ email, password, checkedRemember }));
    }
  };

  if (loading) {
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
