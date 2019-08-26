import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import UserForm from './components/login/login';

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
      <UserForm />
      {/* <Route path="/login" component={UserForm} /> */}
      {/* <ProtectedRoute path="/friends" component={Friends}/> */}
    </div>
  );
}

export default App;