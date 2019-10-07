import React from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

/* TempDisplay Component
 * Single Component with an icon and a temperature value.
 * The icon will display the maximum and minimum temperature indicator,
 *  or no icon at all if is the default variant.
 */

const TempDisplay = props => {
  const { className, variant, temp, unit } = props;

  let icon;
  if (variant === 'default') {
    icon = <div />;
  } else if (variant === 'min') {
    icon = <MdKeyboardArrowDown className="weather-result__min-max-item--min" />;
  } else {
    icon = <MdKeyboardArrowUp className="weather-result__min-max-item--max" />;
  }

  return (
    <div className={`temp-display ${className}`}>
      {icon}
      <p className="weather-result__min-max-item">
        {temp}º{unit}
      </p>
    </div>
  );
};

TempDisplay.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
  // Temperature from the API call
  temp: PropTypes.number.isRequired,
  // Component variant
  variant: PropTypes.oneOf(['default', 'min', 'max']),
  // Temperature Unit
  unit: PropTypes.oneOf(['C', 'F', 'K']),
};

TempDisplay.defaultProps = {
  // Default value of no aditional classes
  className: '',
  // Metric(Celcius) is the default unit
  unit: 'C',
  // Default variant is the component without an icon
  variant: 'default',
};

export default TempDisplay;
