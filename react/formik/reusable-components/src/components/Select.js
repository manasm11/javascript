import React from 'react';
import { Field } from 'formik';
import ErrorMessage from './ErrorMessage'

function Select({ name, label, options, ...rest }) {
  return (
    <div className='form-control'>
      <label htmlFor={name}></label>
      <Field as='select' name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name}/>
    </div>
  );
}

export default Select;
