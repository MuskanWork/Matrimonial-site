import { GET_PROFILE_DATA_REQUEST, GET_PROFILE_DATA_SUCCESS , GET_PROFILE_DATA_FAIL } from './actionTypes';
import axios from 'axios';

const userProfileDataAction = () => {
    return async dispatch => {
      try {
        dispatch({
          type: GET_PROFILE_DATA_REQUEST
        })
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
       const temp =  await axios.get('http://localhost:8000/register')
       const data = temp.data
        console.log(data);

        dispatch({
          type: GET_PROFILE_DATA_SUCCESS,
          payload: data
        });
        //saving user to localstorage
        localStorage.setItem('getProfileData', JSON.stringify(data));
      } catch (error) {
        dispatch({
          type: GET_PROFILE_DATA_FAIL,
          payload: console.warn("data failed to get" + error),
        });
      }
    };
  };
  export { userProfileDataAction};
  