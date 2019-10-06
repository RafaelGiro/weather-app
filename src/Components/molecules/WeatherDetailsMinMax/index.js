import React from 'react';
import PropTypes from 'prop-types';
import TempDisplay from '../../atoms/TempDisplay';

/* WeatherDetailsMinMax is the child component from WeatherDetails responsible
 * of showing details for the mimimum and maximum temperature comming from the API Call
 */

const WeatherDetailsMinMax = props => {
  const { className, min, max, unit } = props;
  return (
    <div className={`weather-result__min-max-container ${className}`}>
      <TempDisplay variant="min" temp={min} unit={unit} />
      <TempDisplay variant="max" temp={max} unit={unit} />
    </div>
  );
};

WeatherDetailsMinMax.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
  // Min Temperature from the API call
  min: PropTypes.number.isRequired,
  // Max Temperature from the API call
  max: PropTypes.number.isRequired,
  // Temperature Unit
  unit: PropTypes.oneOf(['C', 'F', 'K']),
};

WeatherDetailsMinMax.defaultProps = {
  // Default value of no aditional classes
  className: '',
  // Metric(Celcius) is the default unit
  unit: 'C',
};

export default WeatherDetailsMinMax;
