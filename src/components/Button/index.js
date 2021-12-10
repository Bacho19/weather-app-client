import React from "react";
import { CustomButton } from "./styled";

const Button = ({ onClick, disabled, children }) => {
  return (
    <CustomButton onClick={onClick} disabled={disabled}>
      {children}
    </CustomButton>
  );
};

export default Button;
