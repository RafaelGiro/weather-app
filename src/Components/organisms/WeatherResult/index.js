import React from 'react';
import PropTypes from 'prop-types';

import WeatherCurrent from '../../atoms/WeatherCurrent';
import WeatherDetails from '../../molecules/WeatherDetails';

/* WeatherResult component is the container to show all API values passed through props
 * from the WeatherPage component
 */

const WeatherResult = props => {
  const { className, city, country, temp, min, max, unit, icon, inactive } = props;

  const inactiveClass = inactive ? 'weather-result--inactive' : '';

  return (
    <div className={`weather-result ${inactiveClass} ${className}`}>
      <WeatherCurrent unit={unit}>{temp}</WeatherCurrent>
      <WeatherDetails city={city} country={country} min={min} max={max} unit={unit} icon={icon} />
    </div>
  );
};

WeatherResult.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
  // City Name
  city: PropTypes.string.isRequired,
  // Country Province of the city
  country: PropTypes.string.isRequired,
  // Current temperature from API Call
  temp: PropTypes.number.isRequired,
  // Min temperature from API Call
  min: PropTypes.number.isRequired,
  // Max temperature from API Call
  max: PropTypes.number.isRequired,
  // Icon describing the weather from API Call
  icon: PropTypes.string.isRequired,
  // Temperature Unit
  unit: PropTypes.oneOf(['C', 'F', 'K']),
  // Flag to see if some API call has been made
  inactive: PropTypes.bool.isRequired,
};

WeatherResult.defaultProps = {
  // Default value of no aditional classes
  className: '',
  // Metric(Celcius) is the default unit
  unit: 'C',
};

export default WeatherResult;
