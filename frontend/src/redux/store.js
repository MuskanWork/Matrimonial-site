import {createStore , combineReducers ,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {userRegReducer} from './reducers/userRegisterReducer';
import {userLogReducer} from './reducers/userLoginReducer';
import {userProfilePicReducer} from './reducers/userProfilePicReducer';
import {userProfileDataReducer} from './reducers/userProfileDataReducer';
import {userProfileImgReducer} from './reducers/userProfileImgReducer';

const middlewares = [thunk]; 

const reducer = combineReducers({
    userRegister: userRegReducer,//for Register
     userLogin : userLogReducer ,// for Login
     userProfilePic : userProfilePicReducer, //upload profile pic
     getProfileData : userProfileDataReducer, //get profile data
     getProfileImg : userProfileImgReducer //get profile img
});

//getting user from localStorage and save it into our store
console.log("userA")
const userAuthFromStorage = localStorage.getItem('userRegisterData','userLoginData','userProfilePicData','userProfileImgData','userProfileData')
? JSON.stringify(localStorage.getItem('userRegisterData','userLoginData','userProfilePicData','userProfileImgData','userProfileData')) : null;


const initialState = {
    userRegister: {userInfo: userAuthFromStorage},
    userLogin: {userInfo: userAuthFromStorage},
    userProfilePic : {userInfo: userAuthFromStorage},
    getProfileData : {userInfo: userAuthFromStorage},
    getProfileImg : {userInfo: userAuthFromStorage}
}

export const store = createStore(reducer, initialState ,composeWithDevTools(applyMiddleware(...middlewares)));
