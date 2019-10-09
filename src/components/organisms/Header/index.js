import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../atoms/Logo';
import Button from '../../atoms/Button';

/* Header component hold 2 links. The Logo will always redirect to the WeatherPage component
 * and the second is the nav button responsible to change pages through react router.
 */

const Header = props => {
  const { className } = props;
  // location hook from react-router v5.1
  const location = useLocation();
  const reg = /minmax$/;
  // Route that the button will point
  const buttonPath = reg.test(location.pathname) ? '/' : '/minmax';
  // And its label
  const buttonLabel = reg.test(location.pathname) ? 'Previsão do tempo' : 'Visualizar min/max';

  return (
    <header className={`header ${className}`}>
      <Link to="/">
        <Logo />
      </Link>
      <Link to={buttonPath}>
        <Button variant="nav">{buttonLabel}</Button>
      </Link>
    </header>
  );
};

Header.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
};

Header.defaultProps = {
  // No aditional classes is the default value
  className: '',
};

export default Header;
