import {
//login
LOGIN_USER_REQUEST,
LOGIN_USER_SUCCESS,
LOGIN_USER_FAIL,

//register
REGISTER_USER_REQUEST,
REGISTER_USER_SUCCESS,
REGISTER_USER_FAIL,

//all users
GET_ALLUSERS_REQUEST,
GET_ALLUSERS_SUCCESS,
GET_ALLUSERS_FAIL,

//get logged  user
GET_USER_PROFILE_REQUEST,
GET_USER_PROFILE_SUCCESS,
GET_USER_PROFILE_FAIL,

//update logged user
UPDATE_USER_PROFILE_REQUEST,
UPDATE_USER_PROFILE_SUCCESS,
UPDATE_USER_PROFILE_FAIL,

//delete user 
DELETE_USER_REQUEST,
DELETE_USER_SUCCESS,
DELETE_USER_FAIL,
DELETE_USER_RESET,

//logout user
LOGOUT,

//get user by id
GET_USER_BY_ID_REQUEST,
GET_USER_BY_ID_SUCCESS,
GET_USER_BY_ID_FAIL,

//update user by id
UPDATE_USER_BY_ID_REQUEST,
UPDATE_USER_BY_ID_SUCCESS,
UPDATE_USER_BY_ID_FAIL,
UPDATE_USER_BY_ID_RESET,
}
from '../constant/userConstant'

//LOGIN REDUCER 
export const loginReducer = (state={},action)=>{
    switch(action.type){
        case LOGIN_USER_REQUEST:
            return {loading:true}
        case LOGIN_USER_SUCCESS:
            return {loading:false,userLogin:action.payload}
        case LOGIN_USER_FAIL:
            return {loading:false,loginError:action.payload}
        case LOGOUT:
            return state={}
        default:
            return state
    }
}


//REGISTER REDUCER
export const regisReducer = (state={},action)=>{
    switch(action.type){
        case REGISTER_USER_REQUEST:
            return {loading:true}
        case REGISTER_USER_SUCCESS:
            return {loading:false,userRegis:action.payload}
        case REGISTER_USER_FAIL:
            return {loading:false,regisError:action.payload}
        default:
            return state
    }
}


//GET PROFILE REDUCER
export const getProfileReducer = (state={},action)=>{
    switch(action.type){
        case GET_USER_PROFILE_REQUEST:
            return {loading:true}
        case GET_USER_PROFILE_SUCCESS:
            return {loading:false,userProfile:action.payload}
        case GET_USER_PROFILE_FAIL:
            return {loading:false,profileError:action.payload}
        default:
            return state={}
    }
}


//UPDATE PROFILE REDUCER
export const updateProfileReducer =(state={},action)=>{
    switch(action.type){
        case UPDATE_USER_PROFILE_REQUEST:
            return {loading:true}
        case UPDATE_USER_PROFILE_SUCCESS:
            return {loading:false,updateProfile:action.payload}
        case UPDATE_USER_PROFILE_FAIL:
            return {loading:false,updateProfileError:action.payload}
        default:
            return state
    }
}


//GET ALL USERS 
export const getAllUsersReducer =(state={},action)=>{
    switch(action.type){
        case GET_ALLUSERS_REQUEST:
            return {loading:true}
        case GET_ALLUSERS_SUCCESS:
            return {loading:false,usersListData:action.payload}
        case GET_ALLUSERS_FAIL:
            return {loading:false,usersListError:action.payload}
        default:
            return state
    }
}


//GET USER BY ID
export const getUserByIdReducer = (state={},action)=>{
    switch(action.type){
        case GET_USER_BY_ID_REQUEST:
            return {loading:true}
        case GET_USER_BY_ID_SUCCESS:
            return {loading:false,getUserInfo:action.payload}
        case GET_USER_BY_ID_FAIL:
            return {loading:false,getUserInfoError:action.payload}
        default:
            return state
    }
}


//UPDATE USER BY ID
export const updateUserByIdReducer = (state={},action)=>{
    switch(action.type){
        case UPDATE_USER_BY_ID_REQUEST:
            return {loading:true}
        case UPDATE_USER_BY_ID_SUCCESS:
            return {loading:false,updateUserInfo:action.payload}
        case UPDATE_USER_BY_ID_FAIL:
            return {loading:false,updateUserError:action.payload}
        case UPDATE_USER_BY_ID_RESET:
            return state={}
        default:
            return state
    }
}


//DELETE USER
export const deleteUserReducer =(state={},action)=>{
    switch(action.type){
        case DELETE_USER_REQUEST:
            return{loading:true}
        case DELETE_USER_SUCCESS:
            return{loading:false,deleteInfo:action.payload}
        case DELETE_USER_FAIL:
            return{loading:false,deleteInfo:action.payload}
        case DELETE_USER_RESET:
            return{}
        default:
            return state
    }
}

