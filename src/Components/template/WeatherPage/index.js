import React from 'react';
import PropTypes from 'prop-types';

import CityNav from '../../organisms/CityNav';
import WeatherResult from '../../organisms/WeatherResult';

/* WeatherPage is the top level component to display information about a specific location
 * It contains the navigation to different API Calls
 * And the local state to pass through props
 */

const WeatherPage = props => {
  const { className } = props;
  return (
    <div className={`weather-page ${className}`}>
      <CityNav />
      <WeatherResult city="London" state="GB" temp={45} min={19} max={35} unit="C" icon="03d" />
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
