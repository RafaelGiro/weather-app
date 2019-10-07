import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { setMaxTemp, setMinTemp } from '../../../actions';

import CityNav from '../../organisms/CityNav';
import WeatherResult from '../../organisms/WeatherResult';

/* WeatherPage is the top level component to display information about a specific location
 * It contains the navigation to different API Calls
 * And the local state to pass through props
 */

const WeatherPage = props => {
  const { className, currentValues, setCurrentValues } = props;
  const { minWeather, maxWeather } = useSelector(state => state.minMax);
  const dispatch = useDispatch();

  // Default City Options
  const cityOptions = {
    city1: { name: 'Rio de Janeiro - BR', id: '3451190' },
    city2: { name: 'Toronto - CA', id: '6167865' },
    city3: { name: 'San Franciso - US', id: '5391959' },
  };

  // Function to handle API Call when the user clicks on a city name
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

    // Converts temperature to number
    const temp = Number(res.main.temp.toFixed());
    const min = Number(res.main.temp_min.toFixed());
    const max = Number(res.main.temp_max.toFixed());
    // Create a new values object based on the response data
    const newValues = {
      city: res.name,
      country: res.sys.country,
      temp,
      min,
      max,
      unit: unitDesc,
      icon: res.weather[0].icon,
      inactive: false,
    };

    // Check if is the first call
    if (currentValues.inactive) {
      // If it is, then both values are set on the store
      dispatch(setMaxTemp({ city: res.name, country: res.sys.country, temp: max }));
      dispatch(setMinTemp({ city: res.name, country: res.sys.country, temp: min }));
    } else {
      // If not, check min and high temperatures with what is in the store
      if (max > maxWeather.temp) {
        dispatch(setMaxTemp({ city: res.name, country: res.sys.country, temp: max }));
      }
      if (min < minWeather.temp) {
        dispatch(setMinTemp({ city: res.name, country: res.sys.country, temp: min }));
      }
    }

    // Then set new state values for currentValues
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
  // currentValues state validation
  currentValues: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    temp: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    unit: PropTypes.string,
    icon: PropTypes.string,
    inactive: PropTypes.bool,
  }).isRequired,
  // setCurrentValues function
  setCurrentValues: PropTypes.func.isRequired,
};

WeatherPage.defaultProps = {
  // Default value of no aditional classes
  className: '',
};

export default WeatherPage;
