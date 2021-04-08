import { USER_PIC_UPLOAD_REQUEST, USER_PIC_UPLOAD_SUCCESS , USER_PIC_UPLOAD_FAIL } from './actionTypes';
import axios from 'axios';

const userProfilePicAction = (filedata) => {
    return async dispatch => {
      try {
        dispatch({
          type: USER_PIC_UPLOAD_REQUEST
        })
        
        const data  = await axios.post('http://localhost:8000/upload', filedata)
       .then(alert('profile picture uploaded'))

        dispatch({
          type: USER_PIC_UPLOAD_SUCCESS,
          payload: data
        });
        //saving user to localstorage
        localStorage.setItem('userProfilePicData', JSON.stringify(data));
      } catch (error) {
        dispatch({
          type: USER_PIC_UPLOAD_FAIL,
          payload: alert('profile picture upload fail'),
        });
      }
    };
  };
  export { userProfilePicAction};
  