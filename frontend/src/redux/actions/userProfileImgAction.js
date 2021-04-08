import { GET_PROFILE_IMG_REQUEST, GET_PROFILE_IMG_SUCCESS  ,GET_PROFILE_IMG_FAIL  } from './actionTypes';
import axios from 'axios';

const userProfileImgAction = () => {
    return async dispatch => {
      try {
        dispatch({
          type: GET_PROFILE_IMG_REQUEST
        })
       
       const temp =  await axios.get('http://localhost:8000/upload')
       const data = temp.data
        console.log(data);

        dispatch({
          type: GET_PROFILE_IMG_SUCCESS,
          payload: data
        });
        //saving user to localstorage
        localStorage.setItem('userProfileImgData', JSON.stringify(data));
      } catch (error) {
        dispatch({
          type: GET_PROFILE_IMG_FAIL,
          payload: console.warn("Image failed to get" + error),
        });
      }
    };
  };
  export { userProfileImgAction};
  