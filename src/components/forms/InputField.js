import React from 'react';
import PropTypes from 'prop-types';

const getClassName = (shouldFitWidth) => {
  let className = 'field__input';

  return shouldFitWidth
    ? `${className} ${className}_width_short`
    : className
};

const InputField = ({
  input,
  label,
  id,
  type,
  shouldFitWidth,
  placeholder,
  meta: {
    touched,
    error
  }
}) => (
  <div className="body__field">
    <label className="field__label" htmlFor={id}>{label}</label>
    <input
      className={getClassName(shouldFitWidth)}
      id={id}
      {...input}
      placeholder={placeholder || label}
      type={type}
    />
    {touched && error && <span className="field__error-span">{error}</span>}
  </div>
);

InputField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired
  }).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.bool,
  shouldFitWidth: PropTypes.bool
};

export default InputField;
