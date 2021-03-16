import React from 'react';
import { Field } from 'formik'
import ErrorMessage from './ErrorMessage'

function CheckBoxGroup({ label, name, options, ...rest }) {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => (
            <React.Fragment key={option.value}>
              <input
                type='checkbox'
                {...field}
                value={option.value}
                checked={field.value.includes(option.value)}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </React.Fragment>
          ));
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
}

export default CheckBoxGroup;
