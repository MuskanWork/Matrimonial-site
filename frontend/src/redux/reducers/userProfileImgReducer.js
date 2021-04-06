import { GET_PROFILE_IMG_REQUEST, GET_PROFILE_IMG_SUCCESS  ,GET_PROFILE_IMG_FAIL  } from '../actions/actionTypes';


const userProfileImgReducer = (state = {}, action) => {
  switch (action.type) {
        case GET_PROFILE_IMG_REQUEST:
          return {
            loading: true,
          };
        case GET_PROFILE_IMG_SUCCESS:
          return {
            userInfo: action.payload,
          };
        case GET_PROFILE_IMG_FAIL:
          return{
            error: action.payload,
          };
      default:
      return state;
  }
}
export { userProfileImgReducer };