import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../atoms/Logo";
import Button from "../../atoms/Button";

const Header = props => {
  const { className, location } = props;

  // Route that the button will point
  const buttonPath = location.pathname === "/" ? "/minmax" : "/";
  // And its label
  const buttonLabel =
    location.pathname === "/" ? "Visualizar min/max" : "Previsão do tempo";

  return (
    <div className={`header ${className}`}>
      <Link to="/">
        <Logo />
      </Link>
      <Link to={buttonPath}>
        <Button type="nav">{buttonLabel}</Button>
      </Link>
    </div>
  );
};

Header.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string
};

export default withRouter(Header);
