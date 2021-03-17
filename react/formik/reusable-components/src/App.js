import './App.css';
import FormikContainer from './components/FormikContainer';
import { LinearProgress } from '@material-ui/core';
import r from 'react';
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import EnrollmentForm from './components/EnrollmentForm'
import ChakraInput from './components/ChakraInput'

function App() {
  const [loading, setLoading] = r.useState(false);
  return (
    <>
      {loading && <LinearProgress />}
      <div className='App'>
        {/* <FormikContainer {...{ setLoading }} /> */}
        {/* <LoginForm /> */}
        {/* <RegistrationForm/> */}
        {/* <EnrollmentForm/> */}
        <ChakraInput/>
      </div>
    </>
  );
}

export default App;
