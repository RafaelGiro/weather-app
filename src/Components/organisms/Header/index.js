import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import Logo from '../../atoms/Logo';
import Button from '../../atoms/Button';

/* Header component hold 2 links. The Logo will always redirect to the WeatherPage component
 * and the second is the nav button responsible to change pages through react router.
 */

const Header = props => {
  const { className, location } = props;

  // Route that the button will point
  const buttonPath = location.pathname === '/' ? '/minmax' : '/';
  // And its label
  const buttonLabel = location.pathname === '/' ? 'Visualizar min/max' : 'Previsão do tempo';

  return (
    <div className={`header ${className}`}>
      <Link to="/">
        <Logo />
      </Link>
      <Link to={buttonPath}>
        <Button variant="nav">{buttonLabel}</Button>
      </Link>
    </div>
  );
};

Header.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
  // Location from React Router will always be available as an object
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
};

Header.defaultProps = {
  // No aditional classes is the default value
  className: '',
};

export default withRouter(Header);
