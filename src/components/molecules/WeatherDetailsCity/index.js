import React from 'react';
import PropTypes from 'prop-types';

/* WeatherDetails is the child component from WeatherDetails responsible
 * of showing details of the current city that is being displayed.
 */

const WeatherDetailsCity = props => {
  const { className, cityName, country, icon } = props;
  return (
    <div className={`weather-result__details-city ${className}`}>
      <p className="weather-result__city-name">
        {cityName} {country ? `- ${country}` : ''}
      </p>
      {icon ? (
        <img
          className="weather-result__details-city__img"
          alt="sunny/cloudy day"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        />
      ) : (
        <div />
      )}
    </div>
  );
};

WeatherDetailsCity.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
  // Currently city name displaying the weather
  cityName: PropTypes.string.isRequired,
  // City's country province
  country: PropTypes.string,
  // Weather icon from API
  icon: PropTypes.string,
};

WeatherDetailsCity.defaultProps = {
  // Default value of no aditional classes
  className: '',
  // No default country
  country: '',
  // Default icon in undefined, so it will not render an image
  icon: '',
};

export default WeatherDetailsCity;
