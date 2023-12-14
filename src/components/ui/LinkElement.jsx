import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export function LinkElement(props) {
  const { children, anchor, to, ...restProps } = props;

  const lnkProps = {
    pathname: to,
    hash: anchor || "",
  };

  return (
    <Link to={lnkProps} {...restProps}>
      {children}
    </Link>
  );
}

LinkElement.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
  anchor: PropTypes.string,
};
