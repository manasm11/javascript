import React from 'react'
import classes from './ErrorText.module.css'

function ErrorText({ children }) {
  return (
    <div className={classes.error}>
      {children}
    </div>
  )
}

export default ErrorText
