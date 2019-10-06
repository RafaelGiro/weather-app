import React from 'react';
import PropTypes from 'prop-types';

/* WeatherDetails is the child component from WeatherDetails responsible
 * of showing details of the current city that is being displayed.
 */

const WeatherDetailsCity = props => {
  const { className, cityName, state, icon } = props;
  return (
    <div className={`weather-result__details-city ${className}`}>
      <p className="weather-result__city-name">
        {cityName} - {state}
      </p>
      <img
        className="weather-result__img"
        alt="sunny/cloudy day"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
    </div>
  );
};

WeatherDetailsCity.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
  // Currently city name displaying the weather
  cityName: PropTypes.string.isRequired,
  // City's state province
  state: PropTypes.string.isRequired,
  // Weather icon from API
  icon: PropTypes.string.isRequired,
};

WeatherDetailsCity.defaultProps = {
  // Default value of no aditional classes
  className: '',
};

export default WeatherDetailsCity;
