import React from 'react';
import PropTypes from 'prop-types';

/* WeatherCurrent component only displays the current temperature.
 * It is part of the WeatherResult component
 */

const WeatherCurrent = props => {
  const { children, className, unit } = props;

  return (
    <p className="weather-result__current">
      {children}
      <span className={`weather-result__current--unit ${className}`}>º{unit}</span>
    </p>
  );
};

WeatherCurrent.propTypes = {
  // Content/Label of the button
  children: PropTypes.node.isRequired,
  // Extra classes that is passed
  className: PropTypes.string,
  // Temperature Unit
  unit: PropTypes.oneOf(['C', 'F', 'K']),
};

WeatherCurrent.defaultProps = {
  // Default value of no aditional classes
  className: '',
  // Metric(Celcius) is the default unit
  unit: 'C',
};

export default WeatherCurrent;
