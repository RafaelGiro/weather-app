/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

/* CityListItem Component
 * Single list item of a specific city.
 * Multiple CityListItems go into the CityList component
 */

const CityListItem = props => {
  const { className, children, active, handler } = props;
  const activeClass = active ? 'city-nav__list-item--active' : '';
  return (
    <li
      onClick={() => handler(children)}
      onKeyDown={() => handler(children)}
      className={`city-nav__list-item ${activeClass} ${className}`}
    >
      {children.name}
    </li>
  );
};

CityListItem.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
  // Content/Label of the button
  children: PropTypes.shape({ name: PropTypes.string, id: PropTypes.string }).isRequired,
  // Props to indicate if the list item is the active city
  active: PropTypes.bool,
  // Function passed from parent to handle API Call click
  handler: PropTypes.func.isRequired,
};

CityListItem.defaultProps = {
  // Default value of no aditional classes
  className: '',
  active: false,
};

export default CityListItem;
