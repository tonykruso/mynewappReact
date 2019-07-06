import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Home from './screens/Home'
import About from './screens/About'
import Nav from './components/Nav'

function App() {
return (
  <Router>
    <>
    <Nav />
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    {/* <Route exact path='/nav' component={Nav} /> */}
    </>
  </Router>
);
}

export default App;
