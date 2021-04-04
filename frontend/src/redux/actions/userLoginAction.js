import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from './actionTypes';
import axios from 'axios';

const userLoginAction = (LoginData) => {
    return async dispatch => {
      try {
        dispatch({
          type: USER_LOGIN_REQUEST
        })
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const { data } = axios.post('http://localhost:8000/login', LoginData)
         .then(res => alert("login succesfull"), window.location = "/Profile")
         .catch(err => alert("invalid id password"));
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: data
        });
        //saving user to localstorage
        localStorage.setItem('userLoginData', JSON.stringify(data));
      } catch (error) {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: error.response && error.response.data.message,
        });
      }
    };
  };
  export { userLoginAction};
  