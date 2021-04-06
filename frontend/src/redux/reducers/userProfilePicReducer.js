import { USER_PIC_UPLOAD_REQUEST, USER_PIC_UPLOAD_SUCCESS , USER_PIC_UPLOAD_FAIL } from '../actions/actionTypes';


const userProfilePicReducer = (state = {}, action) => {
  switch (action.type) {
        case USER_PIC_UPLOAD_REQUEST:
          return {
            loading: true,
          };
        case USER_PIC_UPLOAD_SUCCESS:
          return {
            userInfo: action.payload,
          };
        case USER_PIC_UPLOAD_FAIL:
          return{
            error: action.payload,
          };
      default:
      return state;
  }
}
export { userProfilePicReducer };