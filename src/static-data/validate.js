export const validate = (values) => {
  const errors = {};

  if (!values.name)
    errors.name = 'Required';

  if (!values.category)
    errors.category = 'Required';

  if (!values.price)
    errors.price = 'Required';
  else if (isNaN(Number(values.price)))
    errors.price = 'Must be a number';
  else if (Number(values.price) <= 0)
    errors.price = 'Must be greater than 0';

  if (!values.quantity)
    errors.quantity = 'Required';
  else if (isNaN(Number(values.quantity)))
    errors.quantity = 'Must be a number';
  else if (Number(values.quantity) <= 0)
    errors.quantity = 'Must be greater than 0';

  return errors;
};
