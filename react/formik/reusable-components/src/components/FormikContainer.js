import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormControl from './FormControl';

function FormikContainer({ setLoading }) {
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
  };
  const onSubmit = (values, form) => {
    setLoading(true);
    console.log('Form Data', values);
    setInterval(() => {
      form.setSubmitting(false);
      setLoading(false);
    }, 4000);
  };
  const validationSchema = yup.object({
    email: yup.string().required('Required').email('Invalid'),
    description: yup.string().required('Required'),
    selectOption: yup.string().required('Required'),
    radioOption: yup.string().required('Required'),
  });
  const options = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
    { key: 'Option 4', value: 'option4' },
  ];
  const radioOptions = [
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' },
    { key: 'Option 4', value: 'option4' },
  ];
  return (
    <Formik {...{ initialValues, onSubmit, validationSchema }} validateOnMount>
      {(formik) => {
        return (
          <Form>
            <FormControl
              control='input'
              type='email'
              label='Email'
              name='email'
            />
            <FormControl
              control='textarea'
              name='description'
              label='Description'
            />

            <FormControl
              control='select'
              name='selectOption'
              label='Select an option'
              options={options}
            />

            <FormControl
              control='radio'
              name='radioOption'
              label='Radio Topic'
              options={radioOptions}
            />
            <button
              disabled={!formik.isValid || formik.isSubmitting}
              type='submit'
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
