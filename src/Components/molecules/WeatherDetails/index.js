import React from 'react';
import PropTypes from 'prop-types';

import WeatherDetailsCity from '../WeatherDetailsCity';
import WeatherDetailsMinMax from '../WeatherDetailsMinMax';

/* WeatherDetails shows all the data except current temperature,
 * which is displayed at WeatherCurrent component.
 */

const WeatherDetails = props => {
  const { className, min, max, unit, city, state, icon } = props;
  return (
    <div className={`weather-result__details ${className}`}>
      <WeatherDetailsCity cityName={city} state={state} icon={icon} />
      <WeatherDetailsMinMax min={min} max={max} unit={unit} />
    </div>
  );
};

WeatherDetails.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
  // City Name
  city: PropTypes.string.isRequired,
  // State Province of the city
  state: PropTypes.string.isRequired,
  // Min temperature from API Call
  min: PropTypes.number.isRequired,
  // Max temperature from API Call
  max: PropTypes.number.isRequired,
  // Icon describing the weather from API Call
  icon: PropTypes.string.isRequired,
  // Temperature Unit
  unit: PropTypes.oneOf(['C', 'F', 'K']),
};

WeatherDetails.defaultProps = {
  // Default value of no aditional classes
  className: '',
  // Metric(Celcius) is the default unit
  unit: 'C',
};

export default WeatherDetails;
