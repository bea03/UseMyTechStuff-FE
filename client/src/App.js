import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Registration from './components/registration/registration';
import Home from './components/pages/home';
import NavPage from './components/pages/NavPage';
import UserForm from './components/login/login';
// import ListItem from './components/pages/listItem';
import ListedItem from './components/pages/listedItem';
import PrivateRoute from './utils/authRouter';
import './App.css'

function App() {
  
  return (
    <div className="App">
      {/* <NavPage /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/login" component={UserForm} />
        <Route path="/registration" component={Registration} />
        {/* <Route path='/list' component={ListItem} /> */}
        <Route path='/item' component={ListedItem} />
        <Route path='/protected' component={NavPage} />
      </Switch>
    </div>
  );
}

export default App;