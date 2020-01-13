import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routers from './layout/router/router';

function App() {
  return (
    <div className="App">
      <Router>
      <Routers />
      </Router>
    </div>
  );
}

export default App;
