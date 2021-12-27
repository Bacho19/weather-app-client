import React from "react";
import md5 from "md5";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../graphql/mutations/auth";
import AuthInput from "../../components/AuthInput";
import Button from "../../components/Button";
import { AuthTitle, AuthWrapper } from "../LoginPage/styled";
import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";

const RegisterPage = () => {
  const [createUser, { loading }] = useMutation(CREATE_USER);

  const navigate = useNavigate();

  const handleRegister = async (values) => {
    try {
      const hashedPassword = md5(values.password);
      const newUser = {
        username: values.username,
        email: values.email,
        password: hashedPassword,
      };
      await createUser({
        variables: {
          input: newUser,
        },
      });
      navigate("/");
    } catch (e) {
      console.error(e.message);
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Username is required";
    } else if (values.username.length < 4) {
      errors.username = "Username must be at least 4 characters";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      errors.email = "Email is incorrect";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be at least 4 characters";
    }

    if (!values.password2) {
      errors.password2 = "Repeat your password";
    } else if (values.password2 !== values.password) {
      errors.password2 = "Passwords do not match";
    }

    return errors;
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <AuthWrapper>
      <AuthTitle>Register</AuthTitle>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          password2: "",
        }}
        onSubmit={handleRegister}
        validate={validate}
      >
        {({ touched, errors }) => (
          <Form>
            <AuthWrapper>
              {errors.username && touched.username && (
                <ErrorMessage>* {errors.username}</ErrorMessage>
              )}
              <Field
                name="username"
                type="text"
                as={AuthInput}
                placeholder="Username"
              />
              {errors.email && touched.email && (
                <ErrorMessage>* {errors.email}</ErrorMessage>
              )}
              <Field
                name="email"
                type="email"
                as={AuthInput}
                placeholder="Email"
              />
              {errors.password && touched.password && (
                <ErrorMessage>* {errors.password}</ErrorMessage>
              )}
              <Field
                name="password"
                type="password"
                as={AuthInput}
                placeholder="Password"
              />

              {errors.password2 && touched.password2 && (
                <ErrorMessage>* {errors.password2}</ErrorMessage>
              )}
              <Field
                name="password2"
                type="password"
                as={AuthInput}
                placeholder="Repeat the password"
              />
              <Button type="submit">Register</Button>
            </AuthWrapper>
          </Form>
        )}
      </Formik>
    </AuthWrapper>
  );
};

export default RegisterPage;
