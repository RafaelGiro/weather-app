import React from 'react';
import PropTypes from 'prop-types';

/* CityListItem Component
 * Single list item of a specific city.
 * Multiple CityListItems go into the CityList component
 */

const CityListItem = props => {
  const { className, children, active } = props;
  const activeClass = active ? 'city-nav__list-item--active' : '';
  return <li className={`city-nav__list-item ${activeClass} ${className}`}>{children}</li>;
};

CityListItem.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
  // Content/Label of the button
  children: PropTypes.node.isRequired,
  // Props to indicate if the list item is the active city
  active: PropTypes.bool,
};

CityListItem.defaultProps = {
  // Default value of no aditional classes
  className: '',
  active: false,
};

export default CityListItem;
