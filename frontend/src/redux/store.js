import {createStore , combineReducers ,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {userRegReducer} from './reducers/userRegisterReducer';
import {userLogReducer} from './reducers/userLoginReducer';

const middlewares = [thunk]; 

const reducer = combineReducers({
    userRegister: userRegReducer,//for Register
     userLogin : userLogReducer // for Login
});

//getting user from localStorage and save it into our store
const userAuthFromStorage = localStorage.getItem('userRegisterData', 'userLoginData')
? JSON.parse(localStorage.getItem('userRegisterData','userLoginData')) : null;

const initialState = {
    userRegister: {userInfo: userAuthFromStorage},
    userLogin: {userInfo: userAuthFromStorage},

}

export const store = createStore(reducer, initialState ,composeWithDevTools(applyMiddleware(...middlewares)));
