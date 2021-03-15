import React from 'react'
import classes from './ErrorMessage.module.css'

import {ErrorMessage} from 'formik'

function ErrorMessage_(props) {
  return (
    <div className={classes.errorMessage}>
      <ErrorMessage {...props} />
    </div>
  )
}

export default ErrorMessage_
