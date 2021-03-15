import React from 'react';
import { Formik, Form, Field } from 'formik';
import ErrorMessage from './ErrorMessage'
import * as yup from 'yup';

function YouTubeForm() {
  const _inpProps = (name) => {
    return {
      type: 'text',
      autoComplete: 'off',
      name,
      id: name,
    };
  };
  return (
    <Formik
      {...{
        initialValues,
        onSubmit,
        validationSchema,
        validate: values=>{
          const errors = {}
          if(values.email.length < 5 ) errors.email = 'Email too short'
          return errors
        }
      }}
    >
      <Form>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <Field {..._inpProps('name')} />
          <ErrorMessage name='name' />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>EMail</label>
          <Field {..._inpProps('email')} />
          <ErrorMessage name='email' />
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field {..._inpProps('channel')} />
          <ErrorMessage name='channel' />
        </div>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
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
