import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ItemDetail from './ItemDetail'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/shop' component={Shop} exact />
          <Route path='/shop/:itemId' component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return (
    <h1>HOME PAGE</h1>
  )
}
