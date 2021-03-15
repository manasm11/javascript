import { Field } from 'formik';
import React from 'react';
import ErrorMessage from './ErrorMessage';

function Input({ label, name, ...rest }) {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
}

export default Input;
