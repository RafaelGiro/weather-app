import React from "react";
import PropTypes from "prop-types";

/* Button component contains minimal style. It's just a block with text.
 *  You can pass his 'type' props for defined types of button or
 *  define your own class.
 */

const Button = props => {
  const { children, type, className } = props;
  return <button className={`btn btn-${type} ${className}`}>{children}</button>;
};

Button.propTypes = {
  // Content/Label of the button
  children: PropTypes.node.isRequired,
  // Extra classes that is passed
  className: PropTypes.string,
  // Button pre-defined types
  type: PropTypes.oneOf(["nav", "outlined", "contained"])
};

export default Button;
