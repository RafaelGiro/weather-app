import React from 'react';
import PropTypes from 'prop-types';

import CityList from '../../molecules/CityList';

/* CityNav is the parent component responsible to rendering the list of cities
 * available to make an API Call
 */

const CityNav = props => {
  const { className } = props;
  return (
    <div className={`city-nav ${className}`}>
      <CityList />
    </div>
  );
};

CityNav.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
};

CityNav.defaultProps = {
  // Default value of no aditional classes
  className: '',
};

export default CityNav;
