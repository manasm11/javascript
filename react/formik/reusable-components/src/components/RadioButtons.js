import React from 'react';
import {Field} from 'formik'

function RadioButtons({ label, name, options, ...rest }) {
  console.log(options)
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => (
            <React.Fragment key={option.value}>
            <input
              type='radio'
              {...field}
              value={option.value}
              checked={field.value === option.value}
            />
            <label htmlFor={option.value}>{option.key}</label>
            </React.Fragment>
          ));
        }}
      </Field>
    </div>
  );
}

export default RadioButtons;
