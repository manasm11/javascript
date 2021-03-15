import { Field } from 'formik';
import React from 'react';
import ErrorMessage from './ErrorMessage';
function TextArea({ label, name, ...rest }) {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field as='textarea' name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
}

export default TextArea;
