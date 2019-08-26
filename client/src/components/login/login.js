// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Form, Field, withFormik } from 'formik';
// import * as Yup from 'yup';
// // import './App.css';

// const UserForm = ({ errors, touched, values, handleSubmit, status }) => {
//   const [users, setUsers] = useState([]);
//   console.log(users);

//   useEffect(() => {
//     if (status) {
//       setUsers([...users, status]);
//     }
//   }, [status]);

// return (
//   <div className="user-form">
// <Form>
//     <label>
//  <Field type="text" name="Username" placeholder="Username" />
//  <p>{touched.Username && errors.Username}</p>
//  </label>
//  <Field type="password" name="Password" placeholder="Password" />
//  <p>{touched.Password && errors.Password}</p>


//  <button type="submit">Submit!</button>
// </Form>

// {users.map(user => (
//   <p key={user.Username}>{user.Username} {user.Password} </p>
// ))}
//   </div>
// );
// };

// const onBoarding = withFormik({
//   mapPropsToValues({ Username, Password }) {
//     return {
//       Username: Username || '',
//       Password: Password || ''

//     };
//   },



// validationSchema: Yup.object().shape({
//     Username: Yup.string()
//       .min(3, "Must be 3 characters or more")
//       .max(15, "Must be less than 15 characters")
//       .required("This field is required"),
//     Password: Yup.string()
//       .min(3, "Must be 3 characters or more")
//       .max(18, "Must be less than 18 characters")
//       .required("This field is required"),
//     PasswordConfirmation: Yup.string().oneOf(
//       [Yup.ref("password"), null],
//       "Passwords must match"
//     )
//   }),

// handleSubmit(values, { setStatus }) {
// axios
//   .post('https://use-my-techstuff.herokuapp.com/api/auth/login', values)
//   .then(res => {
//   setStatus(res.data);
// })
// .catch(err => console.log(err.response));
// }
// })(UserForm);

// export default UserForm;

import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2'
import styled from 'styled-components'


const H5 = styled.h5`
color:    #B22222;
`


function UserForm({ touched, errors }) {
  const token = localStorage.getItem('token');

//   if (token) {
//     return <Redirect to="/" />;
//   }

  return (
    <Form>
    <label htmlFor = "username">username</label>
    <Field id="username" type="username" autocomplete="off" placeholder="username" name = "username"/>
     <H5>{touched.username && errors.username}</H5>
    <label htmlFor = "password">password</label>
    <Field id="password" type="password" autocomplete="off" placeholder="password" name= "password"/>
    <H5>{touched.password && errors.password}</H5>
    {/* <label htmlFor = "confirmPassword">Confirm your password</label>
    <Field id="passwordConfirmation" type="password" placeholder="passwordConfirmation" name="passwordConfirmation"/>
   <H5>{touched.passwordConfirmation && errors.passwordConfirmation}</H5>
   <label htmlFor = "rememberPassword">Let us remember your password?</label>
    <Field id="rememberPassword" type="checkbox" name="rememberPassword"/>
    <H5>{touched.rememberPassword && errors.rememberPassword}</H5> */}
    <button type="submit">Login</button>
 </Form> 
  );
}

const FormikUserForm = withFormik({
  mapPropsToValues() {
    return {
        username: '',
        password: ''
        // confirmPassword: "",
        // rememberPassword: false
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
    .min(3, "Must be 3 characters or more")
    .max(30, "Must be less than 30 characters")
    .required("This field is required"),
  password: Yup.string()
    .min(3, "Must be 3 characters or more")
    .max(100, "Must be less than 100 characters")
    .required("Enter a password to continue"),
    // passwordConfirmation: Yup.string()
    // .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  }),
  handleSubmit(values, formikBag) {
    axios
      .post(`https://use-my-techstuff.herokuapp.com/api/auth/login`, values)
      .then((response) => {
        localStorage.setItem('token', response.data.payload);
        console.log('does token data exist:', response.data.payload)
        formikBag.props.history.push('/');
        formikBag.props.setToken(response.data.payload)
      })
      .catch((e) => {
        // console.log(e.response.data && response.data);
      });
    //   {if(token === null){
    //     Swal.fire({
    //         position: 'center',
    //         type: 'error',
    //         title: 'Try Again!',
    //         showConfirmButton: false,
    //         timer: 2500
    //       })
    //   }else{
        Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Welcome!',
            showConfirmButton: false,
            timer: 2500
          })
    //   }}

  }
})(UserForm);


export default FormikUserForm