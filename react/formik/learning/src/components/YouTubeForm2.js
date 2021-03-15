import React from 'react';
import { useFormik } from 'formik';
import { Grid } from '@material-ui/core';
import * as yup from 'yup';

function YouTubeForm() {
  const f = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  const _inpProps = (name) => {
    return {
      type: 'text',
      autoComplete: 'off',
      name,
      id: name,
      ...f.getFieldProps(name),
    };
  };
  console.log('Visited Fields', f.touched);
  return (
    <Grid item>
      <form onSubmit={f.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input {..._inpProps('name')} />
          {f.touched.name && f.errors.name && (
            <div className='error-message'>{f.errors.name}</div>
          )}
        </div>
        <div className='form-control'>
          <label htmlFor='email'>EMail</label>
          <input {..._inpProps('email')} />
          {f.touched.email && f.errors.email && (
            <div className='error-message'>{f.errors.email}</div>
          )}
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input {..._inpProps('channel')} />
          {f.touched.channel && f.errors.channel && (
            <div className='error-message'>{f.errors.channel}</div>
          )}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </Grid>
  );
}

export default YouTubeForm;

const initialValues = {
  name: '',
  channel: '',
  email: '',
};

const onSubmit = (values, errors) => {
  console.log(values);
};

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Invalid Email'),
  channel: yup.string().required('Channel is required'),
});
