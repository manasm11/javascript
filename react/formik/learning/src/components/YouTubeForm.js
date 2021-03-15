import React from 'react';
import { useFormik } from 'formik';
import {Grid} from '@material-ui/core'

function YouTubeForm() {
  const f = useFormik({
    initialValues,
    onSubmit,
    validate
  });
  const _inpProps = {
    type: 'text',
    onChange: f.handleChange,
    autoComplete: 'off',
    onBlur: f.handleBlur
  };
  console.log('Visited Fields', f.touched)
  return (
    <Grid item>
      <form onSubmit={f.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            name='name'
            id='name'
            value={f.values.name}
            {..._inpProps}
          />
          {f.touched.name && f.errors.name && <div className='error-message'>{f.errors.name}</div>}
        </div>
        <div className='form-control'>
          <label htmlFor='email'>EMail</label>
          <input
            name='email'
            id='email'
            value={f.values.email}
            {..._inpProps}
          />
          {f.touched.email && f.errors.email && <div className='error-message'>{f.errors.email}</div>}
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input
            name='channel'
            id='channel'
            value={f.values.channel}
            {..._inpProps}
          />
          {f.touched.channel && f.errors.channel && <div className='error-message'>{f.errors.channel}</div>}
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
}

const onSubmit = (values, errors)=>{
  console.log(values)
}

const validate = values=>{
  const errors = {}
  if (!values.name) errors.name = 'Name cannot be empty'
  if (!values.email) errors.email = 'Email cannot be empty'
  else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email))
  errors.email = 'Invalid email'
  if (!values.channel) errors.channel = 'Channel cannot be empty'
  return errors
}