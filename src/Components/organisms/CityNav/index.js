import React from 'react';
import PropTypes from 'prop-types';

import CityList from '../../molecules/CityList';

/* CityNav is the parent component responsible to rendering the list of cities
 * available to make an API Call
 */

const CityNav = props => {
  const { className, handler, cityOptions } = props;
  return (
    <div className={`city-nav ${className}`}>
      <CityList handler={handler} cityOptions={cityOptions} />
    </div>
  );
};

CityNav.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
  // Function passed from parent to handle API Call click
  handler: PropTypes.func.isRequired,
  // City options object comming from the WatherPage component
  cityOptions: PropTypes.shape({}).isRequired,
};

CityNav.defaultProps = {
  // Default value of no aditional classes
  className: '',
};

export default CityNav;
