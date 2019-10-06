import React from 'react';
import PropTypes from 'prop-types';

/* Button component contains minimal style. It's just a block with text.
 *  You can pass his 'type' props for defined types of button or
 *  define your own class.
 */

const Button = props => {
  const { children, variant, className } = props;
  return (
    <button type="button" className={`btn btn-${variant} ${className}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  // Content/Label of the button
  children: PropTypes.node.isRequired,
  // Extra classes that is passed
  className: PropTypes.string,
  // Button pre-defined variants
  variant: PropTypes.oneOf(['default', 'nav', 'no-style']),
};

Button.defaultProps = {
  // No aditional classes is the default value
  className: '',
  // default button variant with no aditional styles
  variant: 'default',
};

export default Button;
