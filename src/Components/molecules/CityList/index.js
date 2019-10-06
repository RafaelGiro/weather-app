import React from 'react';
import PropTypes from 'prop-types';

import CityListItem from '../../atoms/CityListItem';

/* CityList component.
 * Navigation tab for the different options of cities available.
 */

const CityList = props => {
  const { className } = props;
  return (
    <ul className={`city-nav__list ${className}`}>
      <CityListItem active>São Carlos - SP</CityListItem>
      <CityListItem>São Paulo - SP</CityListItem>
      <CityListItem>Potência Industrial, Ibaté - SP</CityListItem>
    </ul>
  );
};

CityList.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
};

CityList.defaultProps = {
  // Default value of no aditional classes
  className: '',
};

export default CityList;
