import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, loginError } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    if (email.trim() && password.trim()) {
      dispatch(loginUser({ email, password }));
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
      <AuthInput
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <AuthInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <RememberLabel>
        <input type="checkbox" />
        <RememberLabelText>Remember me</RememberLabelText>
      </RememberLabel>
      <Button onClick={() => handleLogin(email, password)}>Login</Button>
    </AuthWrapper>
  );
};

export default LoginPage;
