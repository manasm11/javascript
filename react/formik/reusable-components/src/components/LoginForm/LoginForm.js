import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import FormControl from "../FormControl";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    email: yup.string().email("Invalid Email Format").required("Required"),
    password: yup.string().required("Required"),
  });
  const onSubmit = (values) => console.log("Form Values", values);
  return (
    <Formik {...{ initialValues, validationSchema, onSubmit }} validateOnMount>
      {(formik) => {
        return (
          <Form>
            <FormControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >Login</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
