import axiosWithAuth from '../../utils/axiosWithAuth';
import axios from 'axios';

//Login Action

export const LOGIN_START ="LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (username, password) => dispatch => {
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
      .post(`/auth/login`, {
        username: username,
        password: password
      })
      .then(res => {
        localStorage.setItem('token',res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        return true
      })
      .catch(res => {

        // logout(callback => {
        //   console.log(username)
        //   alert(res);
        // });
        dispatch({
          type: LOGIN_FAILURE,
          payload: res.data
        });
      });
  };

  //Register Actions

export const REGISTRATION_START = 'REGISTRATION_START';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';

export const addUser = addUser => dispatch => {
  dispatch({ type: REGISTRATION_START });
  axiosWithAuth()
  .post(`/auth/register`, addUser)
  .then(res => {
    localStorage.setItem('token', res.data.token)
    dispatch({ type:REGISTRATION_SUCCESS, payload: res.data});
    return true;
  })
  .catch(err => {
    
    dispatch({type: REGISTRATION_FAILURE, payload: err.response})
  })
}

// Get Item

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchItem = () =>dispatch => {
  dispatch({ type: FETCH_START});
  axiosWithAuth()
    .get(`/techstuff/items` )
    .then(res => {
      console.log('fetched items', res)
      dispatch({type:FETCH_SUCCESS, payload:res.data})
    })
    .catch(err => {
      dispatch({type: FETCH_FAILURE, payload: err.response})
    });
}

// Add Action
export const ADD_START ="ADD_START";

export const addItem = (index) => dispatch => {
  dispatch({ type: ADD_START });
  axiosWithAuth()
  .post(`techstuff/items`, index)
  .then(res => {
    console.log('added item', res.data)
    dispatch({type: FETCH_SUCCESS, payload: res.data})
    return true
  })
  .catch (err =>{
    dispatch({type: FETCH_FAILURE})
  });
}