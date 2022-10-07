/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import Alert from './Alert';
import '../styles/properties.css';

const Properties = () => {
  const initialState = {
    properties: [],
  };

  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState({ message: '', isSuccess: false });

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/v1/PropertyListing/')
      .then(({ data }) => setProperties(data))
      .catch((error) => {
        console.log(error);
        setAlert({
          message: 'Error adding property. Please try again later.',
          isSucces: false,
        });
      });
  }, []);

  return (
    <div className="properties-title-container">
      <h2>View a Property</h2>
      <Alert message={alert.message} success={alert.isSuccess} />
      {properties.map((property) => (
        <PropertyCard {...property} />
      ))}
    </div>
  );
};

export default Properties;
