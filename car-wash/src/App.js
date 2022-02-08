import React, { Component, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Service from './components/service/Service'
import Contact from './components/contact/Contact'
import Signup from './components/login/Signup'
import Signin from './components/login/Signin'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const setAuth = boolean => {
    setIsAuthenticated();
  }




  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/signin' component={Signin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;