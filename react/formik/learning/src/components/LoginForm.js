import React from 'react';
import {useFormik} from 'formik'
import {Grid} from '@material-ui/core'

function LoginForm() {

  const f = useFormik({
    initialValues: {
      email: '',
      password: ''
    }
  })

  return (
    <Grid item>
      <form>
        <label htmlFor='email'>EMail</label>
        <input type='email' name='email' id='email' onChange={f.handleChange} value={f.values.email} />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' onChange={f.handleChange} value={f.values.password} />
      </form>
    </Grid>
  );
}

export default LoginForm;
