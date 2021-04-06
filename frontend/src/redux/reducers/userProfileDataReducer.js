import { GET_PROFILE_DATA_REQUEST, GET_PROFILE_DATA_SUCCESS , GET_PROFILE_DATA_FAIL } from '../actions/actionTypes';


const userProfileDataReducer = (state = {}, action) => {
  switch (action.type) {
        case GET_PROFILE_DATA_REQUEST:
          return {
            loading: true,
          };
        case GET_PROFILE_DATA_SUCCESS:
          return {
            userInfo: action.payload,
          };
        case GET_PROFILE_DATA_FAIL:
          return{
            error: action.payload,
          };
      default:
      return state;
  }
}
export { userProfileDataReducer };