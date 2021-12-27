import { createContext } from "react";

const foo = () => {};

export const AuthContext = createContext({
  isAuth: false,
  login: foo,
  loginLoading: false,
  logout: foo,
  loginError: "",
  clearErrors: foo,
});
