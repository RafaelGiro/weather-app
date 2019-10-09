import React from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

import TempDisplay from '../../atoms/TempDisplay';
import WeatherDetailsCity from '../WeatherDetailsCity';

/* MinMaxCard component to hold information thats comming from the Redxus store
 *  This component is used on the MinMaxPage template
 */

const MinMaxCard = props => {
  const { title, cityName, country, temp, variant, className } = props;
  const classIcon = `min-max-card__icon min-max-card__icon--${variant}`;
  const bgIcon =
    variant === 'min' ? (
      <MdKeyboardArrowDown className={classIcon} />
    ) : (
      <MdKeyboardArrowUp className={classIcon} />
    );
  return (
    <div className={`min-max-card ${className}`}>
      <h2 className={`min-max-card__title min-max-card__title--${variant}`}>{title}</h2>
      <WeatherDetailsCity cityName={cityName} country={country} />
      <TempDisplay temp={temp} />
      {bgIcon}
    </div>
  );
};

MinMaxCard.propTypes = {
  // Extra classes that is passed
  className: PropTypes.string,
  // Title of the card
  title: PropTypes.string,
  // City name currently being displayed
  cityName: PropTypes.string.isRequired,
  // City's country
  country: PropTypes.string,
  // Temperature value
  temp: PropTypes.number.isRequired,
  // Variant of min/max or none for styling
  variant: PropTypes.string,
};

MinMaxCard.defaultProps = {
  // Default value of no aditional classes
  className: '',
  // Inactive Cards doesn't have a title
  title: '',
  // No country for the default value
  country: '',
  // No variant for the inactive state
  variant: '',
};

export default MinMaxCard;
