import axios from 'axios'
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
    
    //get logged  user profile
    GET_USER_PROFILE_REQUEST,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAIL,
    
    //update logged user profile
    UPDATE_USER_PROFILE_REQUEST,
    UPDATE_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_FAIL,

    //Delete user by id
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    
    //Get user by id
    GET_USER_BY_ID_REQUEST,
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_FAIL,

    //Update user by id
    UPDATE_USER_BY_ID_REQUEST,
    UPDATE_USER_BY_ID_SUCCESS,
    UPDATE_USER_BY_ID_FAIL,

    //logout
    LOGOUT

    } from '../constant/userConstant'


    //LOGIN ACTION
    export const loginAction =(email,password) =>async(dispatch)=>{
        dispatch({type:LOGIN_USER_REQUEST})
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        try{
            const data = await axios.post(`/api/users/login`,{email,password},config)
            dispatch({type:LOGIN_USER_SUCCESS,payload:data.data})
            localStorage.setItem('userLogin',JSON.stringify(data.data))
        }catch(error){
            const message = error.response && error.response.data.message? error.response.data.message:error.message
            dispatch({type:LOGIN_USER_FAIL,payload:message})
        }
    }
    

    //REGISTER ACTION
    export const regisAction =(firstName,lastName,email,password) =>async(dispatch)=>{
        dispatch({type:REGISTER_USER_REQUEST})
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        try{
            const data = await axios.post('/api/users/',{firstName,lastName,email,password},config)
            dispatch({type:REGISTER_USER_SUCCESS,payload:data.data})
        }catch(error){
            const message = error.response && error.response.data.message? error.response.data.message:error.message
            dispatch({type:REGISTER_USER_FAIL,payload:message})
        }
    }


    //USER LOGOUT ACTION
    export const logoutAction =() =>async(dispatch)=>{
        dispatch({type:LOGOUT})
        localStorage.removeItem('userLogin')
        }


    //GET USER PROFILE
    export const getProfileAction =()=>async(dispatch,getState)=>{
        try{
            dispatch({type:GET_USER_PROFILE_REQUEST})
            const {loginReducer:{userLogin}} = getState()
            const config = {
                headers:{
                    Authorization: `Bearer ${userLogin.token}`
                }
            }
            const {data} = await axios.get('/api/users/loggeduser',config)
            dispatch({type:GET_USER_PROFILE_SUCCESS,payload:data})
        }catch(error){
            const message = error.response && error.response.data.message?error.data.response.message:error.message
            dispatch({type:GET_USER_PROFILE_FAIL,payload:message})
        }
    }


    //UPDATE USER PROFILE
    export const updateProfileAction=(user)=>async(dispatch,getState)=>{
        try{
            dispatch({type:UPDATE_USER_PROFILE_REQUEST})
            const {loginReducer:{userLogin}} = getState()
            const config = {
                headers:{
                    'Content-Type':'application/json',
                    Authorization: `Bearer ${userLogin.token}`
                }
            }
            const {data} = await axios.put(`/api/users/loggeduser`,user,config)
            dispatch({type:UPDATE_USER_PROFILE_SUCCESS,payload:data})
            dispatch(loginAction(user.email,user.password))
        }catch(error){
            const message = error.response && error.response.data.message?error.response.data.message:error.message
            dispatch({type:UPDATE_USER_PROFILE_FAIL,payload:message})
        }
    }

    
    //GET ALL USERS 
    export const getAllUsersAction =()=>async(dispatch,getState)=>{
        try{
            dispatch({type:GET_ALLUSERS_REQUEST})
            const {loginReducer:{userLogin}} = getState()
            const config = {
                headers:{
                    Authorization: `Bearer ${userLogin.token}`
                }
            }
            const {data} = await axios.get('/api/users',config)
            dispatch({type:GET_ALLUSERS_SUCCESS,payload:data})
        }catch(error){
            const message = error.response && error.response.data.message ? error.response.data.message : error.message
            dispatch({type:GET_ALLUSERS_FAIL,payload:message})
        }
    }


    //GET USER BY ID
    export const getUserByIdAction =(id)=>async(dispatch,getState)=>{
        try{
            dispatch({type:GET_USER_BY_ID_REQUEST})
            const {loginReducer:{userLogin}} = getState()
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: `Bearer ${userLogin.token}`
                }
            }
            const {data} = await axios.get(`/api/users/${id}`,config)
            dispatch({type:GET_USER_BY_ID_SUCCESS,payload:data})
        }catch(error){
            const message = error.response && error.response.data.message?error.response.data.message:error.message
            dispatch({type:GET_USER_BY_ID_FAIL,payload:message})
        }
    }


    //UPDATE USER BY ID 
    export const updateUserByIdAction =(user)=>async(dispatch,getState)=>{
        dispatch({type:UPDATE_USER_BY_ID_REQUEST})
        const {loginReducer:{userLogin}} = getState()
        const config ={
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${userLogin.token}`
            }
        }
        try{
            const {data} = await axios.put(`/api/users/${user._id}`,user,config)
            dispatch({type:UPDATE_USER_BY_ID_SUCCESS, payload:data})
        }catch(error){
            const message = error.response && error.response.data.message?error.response.data.message:error.message
            dispatch({type:UPDATE_USER_BY_ID_FAIL,payload:message})
        }
    }


    //DELETE USER
    export const deleteUserAction =(id)=>async(dispatch,getState)=>{
        try{
            dispatch({type:DELETE_USER_REQUEST})
            const {loginReducer:{userLogin}} = getState()
            const config={
                headers:{
                    Authorization: `Bearer ${userLogin.token}`
                }
            }
            const {data} = await axios.delete(`/api/users/${id}`,config)
            dispatch({type:DELETE_USER_SUCCESS,payload:data})
        }catch(error){
            const message = error.response && error.response.data.message ? error.response.data.message : error.message
            dispatch({type:DELETE_USER_FAIL,payload:message})
        }
    }

    