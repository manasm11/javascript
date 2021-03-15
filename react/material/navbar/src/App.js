import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header'
import { Grid } from '@material-ui/core'

import About from './About';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <Grid container direction='column'>
      <Router>
        <Header />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/' component={Home} exact />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </Grid>
  );
}

export default App;
