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
        const data  = await axios.post('http://localhost:8000/login', LoginData)
        try{
          alert("login succesfull")
           window.location = "/Profile"
        }catch(e){
          alert(e);
        }
        console.log(data);
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: data
        });
        //saving user to localstorage
        localStorage.setItem('userLoginData', JSON.stringify(data));
      } catch (error) {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: alert('invalid id password'),
        });
      }
    };
  };
  export { userLoginAction};
  