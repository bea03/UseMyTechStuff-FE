import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from 'yup';

const Registration = ({ values, errors, touched, status }) => {

    return (
        <div className='reg-page'>
            <div className='reg-top'>
            <img src='https://via.placeholder.com/60'/>
            <h2>Join</h2>
            </div>
            <Form className='form'>
                <div className='reg-form'>
                        <label>
                            Name
                            {touched.username&& errors.name && <p className='error'>{errors.username}</p>}
                            <Field className='reg-input' type='text' name='username' placeholder='Username' />
                        </label>
                        <label>
                            Email
                            {touched.email && errors.email && <p className='error'>{errors.email}</p>}
                            <Field className='reg-input' type='email' name='email' placeholder='Email' />
                        </label>
                        <label>
                            Password
                            {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                            <Field className='reg-input' type='password' name='password' placeholder='Password' />
                        </label>
                        <label>
                            Confirm Password
                            {touched.passwordConfirmation && errors.passwordConfirmation && <p className='error'>{errors.confirmPassword}</p>}
                            <Field className='reg-input' type='password' name='confirmPassword' placeholder='Password' />
                        </label>
                        <label >
                           <p>Birthday *We require all our users to be 18 or older.</p>
                            {touched.birthday && errors.birthday && <p className='error'>{errors.birthday}</p>}
                            <Field className='bday' type="date" name="birthday" />
                        </label>
                        <div className='checkbox'>
                        
                            <Field type='checkbox' name='tos' checked={values.tos} />
                           <p>I agree to the Terms and Conditions</p>
                        
                        </div>
                        <button type='submit'>Join</button>
                </div>
            </Form>
        </div>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ username, email, password, birthday }) {
        return {
            username: username || '',
            email: email || '',
            // tos: tos || false,
            password: password || '',
            confirmPassword: '',
            birthday: birthday
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
        .min(6, 'First and last name required')
        .required('Name is required'),
        email: Yup.string()
        .email('Email not valid')
        .required('Email is required'),
        password: Yup.string()
        .min(8, 'Password must be 8 character or longer')
        .required('Password is required'),
        birthday: Yup.string()
        .required('Birthdate is required'),
    }),

    handleSubmit(values, { resetForm, setStatus })  {
        axios
        .post('https://use-my-techstuff.herokuapp.com/api/auth/register', {
            username: values.username,
            email: values.email,
            password: values.password,
            birthday: values.birthday
            // tos: values.tos,
        })
        .then(response  => { 
            console.log(response.data)
            setStatus(response.data)
        })
        .catch(error => {
            console.log(error);
        });
        resetForm();
    }

})(Registration)

export default FormikUserForm