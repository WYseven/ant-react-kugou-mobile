import React, { Component } from 'react';
import Routers from './router/router'
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Routers />
      </Router>
    );
  }
}

export default App;
