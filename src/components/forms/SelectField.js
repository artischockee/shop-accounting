import React from 'react';
import PropTypes from 'prop-types';

const SelectField = ({
  label,
  id,
  input,
  payload,
  containsEmptyOption,
  meta: {
    touched,
    error
  }
}) => (
  <div className="body__field">
    <label className="field__label" htmlFor={id}>{label}</label>
    <select className="field__input field__input_width_short" id={id} {...input}>
      {containsEmptyOption ? <option label="Choose category"></option> : null}
      {payload.map((category, index) => (
        <option key={index} value={category}>{category}</option>
      ))}
    </select>
    {touched && error && <span className="field__error-span">{error}</span>}
  </div>
);

SelectField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.bool,
  containsEmptyOption: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default SelectField;
