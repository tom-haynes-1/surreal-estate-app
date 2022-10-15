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

  const endpoint = 'http://localhost:3000/api/v1/PropertyListing/';

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => setProperties(response.data))
      .catch((error) => {
        console.log(error);
        setAlert({
          message: 'Server error. Please try again later.',
          isSuccess: false,
        });
      });
  }, []);

  return (
    <div>
      <div className="view-property-title-container">
        <h2>View a Property</h2>
      </div>
      <div className="properties-container">
        <Alert message={alert.message} success={alert.isSuccess} />
        <div className="properties">
          {properties.map((property) => (
            <div key={property._id} className="item">
              <PropertyCard {... property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
