/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/property-card.css';
import {
  FaRegBuilding, FaBath, FaBed, FaPoundSign, FaEnvelope,
} from 'react-icons/fa';

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card-container">
      <h3 className="property-card-title">{title}</h3>
      <p className="property-card__type-city">
        <FaRegBuilding className="property-icon-location" /> {type} - {city}
      </p>
      <p className="property-card__bathrooms">
        <FaBath className="property-icon-bathrooms" /> {bathrooms}
      </p>
      <p className="property-card__bedrooms">
        <FaBed className="property-icon-bedrooms" /> {bedrooms}
      </p>
      <p className="property-card__price">
        <FaPoundSign className="property-icon-price" /> {price}
      </p>
      <div>
        <a className="property-card__email-link" href={`mailto:${email}?subject=${title}`}>
          <FaEnvelope className="property-icon-email" />
          Email
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;

PropertyCard.defaultProps = {
  title: '',
  type: '',
  bathrooms: 0,
  bedrooms: 0,
  price: 0,
  city: '',
  email: '',
};

PropertyCard.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  bathrooms: PropTypes.number,
  bedrooms: PropTypes.number,
  price: PropTypes.number,
  city: PropTypes.string,
  email: PropTypes.string,
};
