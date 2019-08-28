import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Registration from './components/registration/registration';
import Home from './components/pages/home';
import NavPage from './components/pages/NavPage';
import UserForm from './components/login/login';
// import ListItem from './components/pages/listItem';
import ListedItem from './components/pages/listedItem';
import EditItem from './components/pages/editItem';
import MyItems from './components/pages/myItems';
import AddItem from './components/pages/addItem';
// import PrivateRoute from './utils/authRouter';
import './App.css'

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/login" component={UserForm} />
        <Route path="/registration" component={Registration} />
        {/* <Route path='/list' component={ListItem} /> */}
        <Route path='/item' component={ListedItem} />
        <Route path='/myitems' component={MyItems} />
        <Route path='/edit' component={EditItem} />
        <Route path='/add' component={AddItem} />
        <Route path='/protected' component={NavPage} />
      </Switch>
    </div>
  );
}

export default App;