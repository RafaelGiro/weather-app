import React from 'react';
import PropTypes from 'prop-types';

import WeatherDetailsCity from '../WeatherDetailsCity';
import WeatherDetailsMinMax from '../WeatherDetailsMinMax';

/* WeatherDetails shows all the data except current temperature,
 * which is displayed at WeatherCurrent component.
 */

const WeatherDetails = props => {
  const { className, min, max, unit, city, country, icon } = props;
  return (
    <div className={`weather-result__details ${className}`}>
      <WeatherDetailsCity cityName={city} country={country} icon={icon} />
      <WeatherDetailsMinMax min={min} max={max} unit={unit} />
    </div>
  );
};

WeatherDetails.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
  // City Name
  city: PropTypes.string.isRequired,
  // Country Province of the city
  country: PropTypes.string.isRequired,
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
