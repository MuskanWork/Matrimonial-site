import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL} from "../actions/actionTypes";


const userLogReducer = (state = {}, action) => {
  switch (action.type) {
        case USER_LOGIN_REQUEST:
          return {
            loading: true,
          };
        case USER_LOGIN_SUCCESS:
          return {
            userInfo: action.payload,
          };
        case USER_LOGIN_FAIL:
          return{
            error: action.payload,
          };
      default:
      return state;
  }
}
export { userLogReducer };