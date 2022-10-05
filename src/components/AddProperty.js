/* eslint-disable no-console */
import React, { useState } from 'react';
import '../styles/add-property.css';

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '',
      city: 'Manchester',
      type: 'Flat',
      bedrooms: '',
      bathrooms: '',
      price: '',
      email: '',
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="add-property-container">
        <h2>Add a Property</h2>
      </div>
      <div>
        <form className="add-property-form" onSubmit={handleAddProperty}>
          <div>
            <label htmlFor="title">
              Title
              <input
                id="title"
                name="title"
                value={fields.title}
                onChange={handleFieldChange}
                placeholder="2 Bedroom Flat"
              />
            </label>
            <label htmlFor="city">
              City
              <select
                id="city"
                name="city"
                value={fields.city}
                onChange={handleFieldChange}
              >
                <option value="Manchester">Manchester</option>
                <option value="Leeds">Leeds</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Liverpool">Liverpool</option>
              </select>
            </label>
            <label htmlFor="type">
              Type
              <select
                id="type"
                name="type"
                value={fields.type}
                onChange={handleFieldChange}
              >
                <option value="flat">Flat</option>
                <option value="detached">Detached</option>
                <option value="semi-detached">Semi-Detached</option>
                <option value="terraced">Terraced</option>
                <option value="end-of-terrace">End of Terrace</option>
                <option value="cottage">Cottage</option>
                <option value="bungalow">Bungalow</option>
              </select>
            </label>
            <label htmlFor="bedrooms">
              Bedrooms
              <input
                id="bedrooms"
                name="bedrooms"
                value={fields.bedrooms}
                onChange={handleFieldChange}
                placeholder="1, 2, 3 ..."
              />
            </label>
            <label htmlFor="bathrooms">
              Bathrooms
              <input
                id="bathrooms"
                name="bathrooms"
                value={fields.bathrooms}
                onChange={handleFieldChange}
                placeholder="1, 2, 3 ..."
              />
            </label>
            <label htmlFor="price">
              Price
              <input
                id="price"
                name="price"
                value={fields.price}
                onChange={handleFieldChange}
                placeholder="£100,000"
              />
            </label>
            <label htmlFor="email">
              Email Address
              <input
                id="email"
                name="email"
                value={fields.email}
                onChange={handleFieldChange}
                placeholder="john.smith@gmail.com"
              />
            </label>
            <button className="form-btn" type="submit">Add</button>
          </div>
        </form>
      </div>

    </>
  );
};

export default AddProperty;
