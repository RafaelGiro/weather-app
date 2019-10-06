import React from "react";
import PropTypes from "prop-types";

/* Logo component its the main header link. */

const Logo = props => {
  const { className } = props;
  return <h1 className={`logo ${className}`}>Previsão do tempo</h1>;
};

Logo.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string
};

export default Logo;
