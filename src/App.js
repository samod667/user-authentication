import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from './Auth'

import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Login" component={Login} />
      </Router>
    </AuthProvider>
  );
}

export default App;
