import './App.css';
import FormikContainer from './components/FormikContainer';
import { LinearProgress } from '@material-ui/core';
import r from 'react';

function App() {
  const [loading, setLoading] = r.useState(false);
  return (
    <>
      {loading && <LinearProgress />}
      <div className='App'>
        <FormikContainer {...{ setLoading }} />
      </div>
    </>
  );
}

export default App;
