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
}) => (
  <div className="property-card-container">
    <div className="property-card-info">
      <div className="property-card-title">{title}</div>
      <div className="property-card-location">
        <FaRegBuilding className="property-icon-location" /> {type} - {city}
      </div>
      <div className="property-card-bathrooms">
        <FaBath className="property-icon-bathrooms" /> {bathrooms}
      </div>
      <div className="property-card-bedrooms">
        <FaBed className="property-icon-bedrooms" /> {bedrooms}
      </div>
      <div className="property-card-price">
        <FaPoundSign className="property-icon-price" /> {price}
      </div>
      <a className="property-card-email" href={`mailto:${email}?subject=${title}`}>
        <FaEnvelope className="property-icon-email" />
        Email
      </a>
    </div>
  </div>
);

export default PropertyCard;

PropertyCard.defaultProps = {
  title: '',
  type: '',
  bathrooms: 0,
  bedrooms: 0,
  price: '',
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
