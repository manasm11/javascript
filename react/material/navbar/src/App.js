import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/' component={Home} exact />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
