import React, { useState } from 'react';
import '../styles/add-property.css';

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '',
      city: 'Manchester',
      type: '',
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    // eslint-disable-next-line
        console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (

    <div className="add-property-container">
      <h2>Add a Property</h2>
      <div className="form-container">
        <form onSubmit={handleAddProperty}>
          <label htmlFor="title">
            Title
            <input
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
          <label htmlFor="city">
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="London">London</option>
              <option value="Liverpool">Liverpool</option>
              <option value="Sheffield">Sheffield</option>
            </select>
          </label>
          <label htmlFor="type">
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detatched">Detatched</option>
              <option value="Semi-Detatched">Semi-Detatched</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
