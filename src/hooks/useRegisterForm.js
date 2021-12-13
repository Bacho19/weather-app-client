import { useEffect, useState } from "react";

export const useRegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password2Error, setPassword2Error] = useState("");

  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPassword2Valid, setIsPassword2Valid] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (
      isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      isPassword2Valid
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [
    username,
    email,
    password,
    password2,
    isUsernameValid,
    isEmailValid,
    isPasswordValid,
    isPassword2Valid,
  ]);

  const handleUsername = (e) => {
    if (!e.target.value) {
      setIsUsernameValid(false);
      setUsernameError("Username is required");
    } else if (e.target.value.length < 4) {
      setIsUsernameValid(false);
      setUsernameError("Username must be at least 4 characters");
    } else {
      setIsUsernameValid(true);
      setUsernameError("");
    }
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    if (!e.target.value) {
      setIsEmailValid(false);
      setEmailError("Email is required");
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
    ) {
      setIsEmailValid(false);
      setEmailError("Email is incorrect");
    } else {
      setIsEmailValid(true);
      setEmailError("");
    }
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    if (!e.target.value) {
      setIsPasswordValid(false);
      setPasswordError("Password is required");
    } else if (e.target.value.length < 4) {
      setIsPasswordValid(false);
      setPasswordError("Password must be at least 4 characters");
    } else if (e.target.value !== password2) {
      setPasswordError("");
      setIsPasswordValid(false);
      setPassword2Error("Passwords do not match");
    } else {
      setIsPasswordValid(true);
      setPasswordError("");
      setPassword2Error("");
    }
    setPassword(e.target.value);
  };

  const handlePassword2 = (e) => {
    if (!e.target.value) {
      setIsPassword2Valid(false);
      setPassword2Error("Repeat your password");
    } else if (e.target.value !== password) {
      setIsPassword2Valid(false);
      setPassword2Error("Passwords do not match");
    } else {
      setIsPassword2Valid(true);
      setIsPasswordValid(true);
      setPassword2Error("");
    }
    setPassword2(e.target.value);
  };

  const clearValues = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setPassword2("");
    setIsUsernameValid(false);
    setIsEmailValid(false);
    setIsPasswordValid(false);
    setIsPassword2Valid(false);
  };

  const values = {
    username,
    email,
    password,
    password2,
  };

  const handleValues = {
    handleUsername,
    handleEmail,
    handlePassword,
    handlePassword2,
  };

  const errors = {
    usernameError,
    emailError,
    passwordError,
    password2Error,
  };

  return {
    values,
    handleValues,
    errors,
    isFormValid,
    clearValues,
  };
};
