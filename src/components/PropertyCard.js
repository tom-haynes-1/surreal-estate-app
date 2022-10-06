/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/property-card.css';
import {
  FaRegBuilding, FaBath, FaBed, FaPoundSign,
} from 'react-icons/fa';

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => (
  <div className="property-card">
    I am a property card
    <h3 className="property-card-title">{title}</h3>
    <p className="property-card__type-city">
      <FaRegBuilding /> {type} - {city}
    </p>
    <p className="property-card__bathrooms">
      <FaBath /> {bathrooms}
    </p>
    <p className="property-card__bedrooms">
      <FaBed /> {bedrooms}
    </p>
    <p className="property-card__price">
      <FaPoundSign /> {price}
    </p>
    <div>
      <a className="property-card__email-link" href={`mailto:${email}?subject=${title}`}>
        Email
      </a>
    </div>
  </div>
);

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
