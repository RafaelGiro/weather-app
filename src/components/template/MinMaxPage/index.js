import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import MinMaxCard from '../../molecules/MinMaxCard';

/* MinMaxPage is the top level component to display information coming from Redux
 * and rendering the maximum and minimum temperature seen from the API.
 */

const MinMaxPage = props => {
  const { className } = props;
  const { minWeather, maxWeather } = useSelector(state => state.minMax);
  const isEmpty = Object.entries(minWeather).length === 0 && minWeather.constructor === Object;

  switch (isEmpty) {
    case true:
      return (
        <div className={`min-max-page min-max-page--inactive ${className}`}>
          <MinMaxCard cityName="Aguardando chamada da API" temp={0} />
        </div>
      );

    default:
      return (
        <div className={`min-max-page ${className}`}>
          <MinMaxCard
            title="Cidade com a menor temperatura"
            cityName={minWeather.city}
            country={minWeather.country}
            temp={minWeather.temp}
            variant="min"
          />
          <MinMaxCard
            title="Cidade com a maior temperatura"
            cityName={maxWeather.city}
            country={maxWeather.country}
            temp={maxWeather.temp}
            variant="max"
          />
        </div>
      );
  }
};

MinMaxPage.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
};

MinMaxPage.defaultProps = {
  // Default value of no aditional classes
  className: '',
};

export default MinMaxPage;
