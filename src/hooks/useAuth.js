import { useState, useCallback } from "react";
import { useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { LOGIN_USER } from "../graphql/mutations/auth";
import { setCookie } from "../utils/cookies";

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [loginUser, { loading }] = useMutation(LOGIN_USER);

  const login = async ({ email, password, checkedRemember }) => {
    try {
      const user = await loginUser({
        variables: {
          user: {
            email,
            password,
          },
        },
      });
      if (user.data.loginUser) {
        const token = uuidv4();
        if (checkedRemember) {
          setCookie(
            "authToken",
            `${user.data.loginUser.username}?${token}`,
            240
          );
        }
        setCookie("authToken", `${user.data.loginUser.username}?${token}`, 2);
        setIsAuth(true);
      } else {
        setLoginError("Invalid email or password");
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  const logout = () => {
    document.cookie =
      "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsAuth(false);
  };

  const clearErrors = useCallback(() => {
    setLoginError("");
  }, [setLoginError]);

  return {
    isAuth,
    setIsAuth,
    login,
    loginLoading: loading,
    logout,
    loginError,
    clearErrors,
  };
};
