import React from "react";

import { Typography } from "./Typography";
import PropTypes from "prop-types";
import { LinkElement } from "./LinkElement";

const BUTTON_VARIANTS = {
  primary: {
    background:
      "linear-gradient(135deg,#6004ff,#7f35ff 23.95%,#370097 60.11%,#8d4aff)",
    border: "1px solid hsla(0,0%,100%,.2)",
    borderRadius: "8px",
    color: "#fff",
    padding: "5px 14px",
    textAlign: "center",
    cursor: "pointer",
  },
  secondary: {
    backgroundColor: "#f5f5f5",
    border: "1px solid #e6e6e6",
    borderRadius: "8px",
    fontWeight: "500",
    color: "#525252",
    padding: "5px 14px",
    textAlign: "center",
    cursor: "pointer",
  },

  clear: {
    textAlign: "center",
    cursor: "pointer",
  },
};

export function Button(props) {
  const {
    onClick,
    disabled,
    to,
    btnText,
    component,
    variant = "secondary",
    small,
    sx,
    ...restProps
  } = props;

  const customSx = sx || null;
  const isLinkBtn = component === "link";

  return isLinkBtn ? (
    <LinkElement to={to}>
      <button
        onClick={onClick}
        style={{ ...BUTTON_VARIANTS[variant], ...customSx }}
        disabled={disabled}
        {...restProps}
      >
        <Typography variant={small ? "bodySmall" : "titleSmall500"} sx={sx}>
          {btnText}
        </Typography>
      </button>
    </LinkElement>
  ) : (
    <button
      onClick={onClick}
      style={{ ...BUTTON_VARIANTS[variant], ...customSx }}
      disabled={disabled}
      {...restProps}
    >
      <Typography variant={small ? "bodySmall" : "titleSmall500"}>
        {btnText}
      </Typography>
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  btnText: PropTypes.string,
  sx: PropTypes.object,
  to: PropTypes.string,
  component: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(BUTTON_VARIANTS)),
};
