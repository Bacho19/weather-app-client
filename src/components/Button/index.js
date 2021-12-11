import React from "react";
import { CustomButton } from "./styled";
import PropTypes from "prop-types";

const Button = ({
  onClick,
  disabled,
  children,
  color = "var(--dark-blue)",
}) => {
  return (
    <CustomButton onClick={onClick} disabled={disabled} color={color}>
      {children}
    </CustomButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  childern: PropTypes.node,
  color: PropTypes.string,
};

export default Button;
