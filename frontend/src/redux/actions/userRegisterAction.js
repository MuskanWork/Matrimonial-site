import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS} from './actionTypes';
import axios from 'axios';

const userRegisterAction = (RegisterData) => {
  return async dispatch => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST
      })
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const data = await  axios.post('http://localhost:8000/register', RegisterData)
        .then(res => alert("register succesfull!!"))
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data ,
      });
      //saving user to localstorage
      localStorage.setItem('userRegisterData', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};
export { userRegisterAction};
