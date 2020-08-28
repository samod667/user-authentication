import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'

function App() {
  return (
    
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
      </Router>
    
  );
}

export default App;
