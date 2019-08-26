import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axiosWithAuth from '../../utils/axiosWithAuth';

const Registration = ({ values, errors, touched, status }) => {
    
    useEffect(() => {
        const [users, setUsers] = useState([]);
    useEffect(() => {
        if (status) {
            setUsers([...users, status])
        }
    }, [status]);

    return (
        <div>
            <Form>
            <div className='login-info'>
                    <h2>User Login</h2>
                    <label>
                        Username
                        {touched.name&& errors.name && <p className='error'>{errors.name}</p>}
                        <Field className='field-input' type='text' name='username' placeholder='Username' />
                    </label>
                    <label>
                        Email
                        {touched.email && errors.email && <p className='error'>{errors.email}</p>}
                        <Field className='field-input' type='email' name='email' placeholder='Email' />
                    </label>
                    <label>
                        Password
                        {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                        <Field className='field-input' type='password' name='password' placeholder='Password' />
                    </label>
                </div>
            </Form>
        </div>
    )
}

const FormikRegistration = withFormik({
    mapPropsToValues({ username, email, password }) {
        return {
            username: username || '',
            email: email || '',
            password: password || ''
        }
    }

    validationSchema: Yup.object().shape({
        username: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(15, 'Must be less than 15 characters')
        .required('Username is required'),
        password: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(18, 'Must be less than 18 characters')
        .required('Password is required'),
    }),

    handleSubmit(values, { setStatus }) {
        axiosWithAuth
        .post('https://use-my-techstuff.herokuapp.com/api/auth/register', values)
        .then(res => {
            setStatus(res.data)
        })
        .catch(err => console.log(err.response))
    }
})(Registration);

export default Registration