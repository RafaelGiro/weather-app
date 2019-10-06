import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import CityNav from '../../organisms/CityNav';
import WeatherResult from '../../organisms/WeatherResult';

/* WeatherPage is the top level component to display information about a specific location
 * It contains the navigation to different API Calls
 * And the local state to pass through props
 */

const WeatherPage = props => {
  const { className } = props;
  const [currentValues, setCurrentValues] = useState({
    city: 'Selecione uma cidade',
    country: '',
    temp: 0,
    min: 0,
    max: 0,
    unit: 'C',
    icon: '13d',
    inactive: true,
  });

  // Default City Options
  const cityOptions = {
    city1: { name: 'São Carlos - Brasil', id: '3449319' },
    city2: { name: 'Toronto - Canadá', id: '6167865' },
    city3: { name: 'San Franciso - USA', id: '5391959' },
  };

  // Function to handle API Call when the user clicks the city name
  async function handleCall(city) {
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API;
    const unitAPI = 'metric';
    const unitDesc = 'C';
    // API Call by ID
    const cityId = city.id;
    const callURL = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=${unitAPI}`;
    // API Call by name if ID is not available
    /* const cityName = city.name.split(' - ');
     * const callByNameURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName[0]},${
     * cityName[1]
     * }&appid=${apiKey}&units=${unitAPI}`;
     */

    // Make the API Call
    const response = await axios.get(callURL);
    const res = response.data;

    // Create a new values object based on the response data
    const newValues = {
      city: res.name,
      country: res.sys.country,
      temp: Number(res.main.temp.toFixed()),
      min: Number(res.main.temp_min.toFixed()),
      max: Number(res.main.temp_max.toFixed()),
      unit: unitDesc,
      icon: res.weather[0].icon,
      inactive: false,
    };

    // Set new state values
    setCurrentValues(newValues);
  }

  const { city, country, temp, min, max, unit, icon, inactive } = currentValues;
  return (
    <div className={`weather-page ${className}`}>
      <CityNav handler={handleCall} cityOptions={cityOptions} />
      <WeatherResult
        city={city}
        country={country}
        temp={temp}
        min={min}
        max={max}
        unit={unit}
        icon={icon}
        inactive={inactive}
      />
    </div>
  );
};

WeatherPage.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
};

WeatherPage.defaultProps = {
  // Default value of no aditional classes
  className: '',
};

export default WeatherPage;
