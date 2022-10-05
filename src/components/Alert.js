import React from 'react';
import PropTypes from 'prop-types';
import '../styles/alert.css';

const Alert = ({ message, success }) => {
  if (!message) return null;

  return (
    <div className={`alert ${success ? 'success' : 'error'}`}>
      {message}
    </div>
  );
};

export default Alert;

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};
