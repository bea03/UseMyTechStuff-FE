// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Form, Field, withFormik } from 'formik';
// import * as Yup from 'yup';
// import axiosWithAuth from '../../utils/axiosWithAuth';

// const Registration = ({ values, errors, touched, status }) => {
    
//     useEffect(() => {
//         const [users, setUsers] = useState([]);
//     useEffect(() => {
//         if (status) {
//             setUsers([...users, status])
//         }
//     }, [status]);

//     return (
//         <div>
//             <Form>
//             <div className='login-info'>
//                     <h2>User Login</h2>
//                     <label>
//                         Username
//                         {touched.name&& errors.name && <p className='error'>{errors.name}</p>}
//                         <Field className='field-input' type='text' name='username' placeholder='Username' />
//                     </label>
//                     <label>
//                         Email
//                         {touched.email && errors.email && <p className='error'>{errors.email}</p>}
//                         <Field className='field-input' type='email' name='email' placeholder='Email' />
//                     </label>
//                     <label>
//                         Password
//                         {touched.password && errors.password && <p className='error'>{errors.password}</p>}
//                         <Field className='field-input' type='password' name='password' placeholder='Password' />
//                     </label>
//                 </div>
//             </Form>
//         </div>
//     )
// }

// const FormikRegistration = withFormik({
//     mapPropsToValues({ username, email, password }) {
//         return {
//             username: username || '',
//             email: email || '',
//             password: password || '',
//         }
//     },

//     validationSchema: Yup.object().shape({
//         username: Yup.string()
//         .min(3, 'Must be 3 characters or more')
//         .max(15, 'Must be less than 15 characters')
//         .required('Username is required'),
//         password: Yup.string()
//         .min(3, 'Must be 3 characters or more')
//         .max(18, 'Must be less than 18 characters')
//         .required('Password is required'),
//     }),

//     handleSubmit(values, { resetForm, setStatus })  {
//         axiosWithAuth
//         .post('https://use-my-techstuff.herokuapp.com/api/auth/register', {
//             username: values.username,
//             email: values.email,
//             password: values.password,
//         })
//         .then(response  => { 
//             console.log(response.data)
//             setStatus(response.data)
//         })
//         .catch(error => {
//             console.log(error);
//         });
//         resetForm();
//     }

// })(Registration)

// export default FormikRegistration

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const Registration = ({ values, errors, touched, status }) => {

    return (
        <div>
            <Form>
                <div className='login-info'>
                    <h2>Register</h2>
                        <label>
                            Username
                            {touched.name&& errors.name && <p className='error'>{errors.name}</p>}
                            <Field className='field-input' type='text' name='username' placeholder='Username' />
                        </label>
                        {/* <label>
                            Email
                            {touched.email && errors.email && <p className='error'>{errors.email}</p>}
                            <Field className='field-input' type='email' name='email' placeholder='Email' />
                        </label> */}
                        <label>
                            Password
                            {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                            <Field className='field-input' type='password' name='password' placeholder='Password' />
                        </label>
                        <button type='submit'>Submit</button>
                </div>
            </Form>
        </div>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ username, email, password }) {
        return {
            username: username || '',
            // email: email || '',
            password: password || '',
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
        .min(6, 'First and last name required')
        .required('Name is required'),
        // email: Yup.string()
        // .email('Email not valid')
        // .required('Email is required'),
        password: Yup.string()
        .min(8, 'Password must be 8 character or longer')
        .required('Password is required'),
    }),

    handleSubmit(values, { resetForm, setStatus })  {
        axios
        .post('https://use-my-techstuff.herokuapp.com/api/auth/register', {
            username: values.username,
            // email: values.email,
            password: values.password,
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