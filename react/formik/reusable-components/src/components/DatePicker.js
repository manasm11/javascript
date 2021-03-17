import React from "react";
import DateView from "react-date-picker";
import ErrorMessage from "./ErrorMessage";
import { Field } from "formik";

function DatePicker({ label, name, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              maxDetail="decade"
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
}

export default DatePicker;
