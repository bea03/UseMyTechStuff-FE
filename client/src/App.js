import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import UserForm from './components/login/login';
import Registration from './components/registration/registration';
import Home from './components/pages/home';
import NavPage from './components/pages/NavPage';
import './App.css'

// const ProtectedRoute = ({component: Component, ...rest}) => {
//   // const propsWithoutComponent = {...props, component: undefined};
//   return <Route {...rest} render={props => {
//     if (localStorage.getItem('token')) {
//       return <Component {...props} />;
//     } else {
//       return <Redirect to="/login"/>;
//     }
//   }}/>;
// };


function App() {
  return (
    <div className="App">
      <Registration />
      {/* <Switch> */}
      {/* <UserForm /> */}
      {/* <Registration /> */}
      {/* <Route exact path='/' component={Home} /> */}
      {/* <Route path="/login" component={UserForm} /> */}
      {/* <Route path="/registration" component={Registration} /> */}
      {/* <Route path='/nav' component={NavPage} /> */}
      {/* <ProtectedRoute path="/friends" component={Friends}/> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;