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
import TvList from './components/pages/TvList.js';
import ComputerList from './components/pages/ComputerList.js';
import CameraList from './components/pages/CameraList.js';
import ApplianceList from './components/pages/ApplianceList.js';
import AudioList from './components/pages/AudioList.js';
import GadgetList from './components/pages/GadgetList.js';
import ContactForm from './components/pages/ContactForm';
import './App.css'

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/login" component={UserForm} />
        <Route path="/registration" component={Registration} />
        {/* <Route path='/list' component={ListItem} /> */}
        <Route path='/item/:id' component={ListedItem} />
        <Route path='/myitems' component={MyItems} />
        <Route path='/items/:id/edit' component={EditItem} />
        <Route path='/add' component={AddItem} />
        <Route path='/protected' component={NavPage} />
        <Route path="/tv" component={TvList} />
        <Route path="/computer" component={ComputerList} />
        <Route path="/camera" component={CameraList} />
        <Route path="/appliance" component={ApplianceList} />
        <Route path="/audio" component={AudioList} />
        <Route path="/gadget" component={GadgetList} />
        <Route path='/contact' component={ContactForm} />
      </Switch>
    </div>
  );
}

export default App;
