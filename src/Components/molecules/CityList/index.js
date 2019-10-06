import React from 'react';
import PropTypes from 'prop-types';

import CityListItem from '../../atoms/CityListItem';

/* CityList component.
 * Navigation tab for the different options of cities available.
 */

const CityList = props => {
  const { className, handler, cityOptions } = props;
  return (
    <ul className={`city-nav__list ${className}`}>
      <CityListItem handler={handler}>{cityOptions.city1}</CityListItem>
      <CityListItem handler={handler}>{cityOptions.city2}</CityListItem>
      <CityListItem handler={handler}>{cityOptions.city3}</CityListItem>
    </ul>
  );
};

CityList.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
  // Function passed from parent to handle API Call click
  handler: PropTypes.func.isRequired,
  // City options object comming from the WatherPage component
  cityOptions: PropTypes.shape({
    city1: PropTypes.object,
    city2: PropTypes.object,
    city3: PropTypes.object,
  }).isRequired,
};

CityList.defaultProps = {
  // Default value of no aditional classes
  className: '',
};

export default CityList;
