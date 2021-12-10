import React from "react";
import { ErrorText, ErrorWrapper } from "./styled";

const ErrorMessage = ({ children }) => {
  return (
    <ErrorWrapper>
      <ErrorText>{children}</ErrorText>
    </ErrorWrapper>
  );
};

export default ErrorMessage;
