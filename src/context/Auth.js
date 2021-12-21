import { createContext } from "react";

const foo = () => {};

export const AuthContext = createContext({
  isAuth: false,
  login: foo,
  logout: foo,
  loginError: "",
  clearErrors: foo,
});
