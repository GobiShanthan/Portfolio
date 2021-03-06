import axios from 'axios'

import {
    //GET ALL PRODUCTS 
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAIL,

    //GET SINGLE PRODUCT WITH PARAMS ID
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_FAIL,
    GET_PRODUCT_SUCCESS,

    //DELETE SINGLE PRODUCT WITH PARAMS ID
    REMOVE_PRODUCT_REQUEST,
    REMOVE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT_FAIL,

    //UPDATE SINGLE PRODUCT WITH PARAMS ID
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,

    //CREATE PRODUCT,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,

    //CREATE REVIEW 
    CREATE_REVIEW_REQUEST,
    CREATE_REVIEW_FAIL,
    CREATE_REVIEW_SUCCESS,

    //TOP RATED PRODUCTS
    TOP_RATED_PRODUCTS_REQUEST,
    TOP_RATED_PRODUCTS_SUCCESS,
    TOP_RATED_PRODUCTS_FAIL,


} from '../constant/productConstant'



//GET ALL PRODUCTS
export const getAllProductsAction = ()=>async(dispatch)=>{
    try{
        dispatch({type:GET_ALL_PRODUCTS_REQUEST})
        const {data} = await axios.get('/api/products')
        dispatch({type:GET_ALL_PRODUCTS_SUCCESS, payload:data})

    }catch(error){
        const message = error.response && error.response.data.message ? error.response.data.message : error.message
        dispatch({type:GET_ALL_PRODUCTS_FAIL,payload:message})
    }
}


//GET SINGLE PRODUCT WITH PARAMS ID
export const getProductAction = (id) =>async(dispatch)=>{
    try{
        dispatch({type:GET_PRODUCT_REQUEST})
        const {data} = await axios.get(`/api/products/${id}`)
        dispatch({type:GET_PRODUCT_SUCCESS,payload:data})
    }catch(error){
        const message = error.response && error.response.data.message ? error.response.data.message:error.message
        dispatch({type:GET_PRODUCT_FAIL,payload:message})
    }
}


// DELETE SINGLE PRODUCT WITH PARAMS ID
export const deleteProductAction =(id)=>async(dispatch,getState)=>{
    try{
        dispatch({type:REMOVE_PRODUCT_REQUEST})
        const {loginReducer:{userLogin}} = getState()
        const config ={
            headers:{
                Authorization: `Bearer ${userLogin.token}`
            }
        }
        const {data} = await axios.delete(`/api/products/${id}`,config)
        dispatch({type:REMOVE_PRODUCT_SUCCESS, payload:data})
        }catch(error){
        const message = error.response && error.response.data.message ? error.response.data.message:error.message
        dispatch({type:REMOVE_PRODUCT_FAIL,payload:message})
    }
}


// UPDATE SINGLE PRODUCT WITH PARAMS ID
export const updateProductAction =(product)=>async(dispatch,getState)=>{
    try{
        dispatch({type:UPDATE_PRODUCT_REQUEST})
        const {loginReducer:{userLogin}} = getState()
        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${userLogin.token}`
            }
        }
        const {data} = await axios.put(`/api/products/${product._id}`,product,config)
        dispatch({type:UPDATE_PRODUCT_SUCCESS,payload:data})
    }catch(error){
        const message = error.response && error.response.data.config ? error.response.data.config: error.message
        dispatch({type:UPDATE_PRODUCT_FAIL,payload:message})
    }
}


//CREATE SAMPLE PRODUCT
export const createProductAction =(data)=>async(dispatch,getState)=>{
    try{
        dispatch({type:CREATE_PRODUCT_REQUEST})
        const {loginReducer:{userLogin}} = getState()
        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${userLogin.token}`
            }
        }
        const {data} = await axios.post('/api/products',{},config)
        dispatch({type:CREATE_PRODUCT_SUCCESS,payload:data})
    }catch(error){
        const message = error.response && error.response.data.message ? error.response.data.message :error.message
        dispatch({type:CREATE_PRODUCT_FAIL,payload:message})
    }
}


//WRITE REVIEW FOR PRODUCT
export const writeReviewAction =(review)=>async(dispatch,getState)=>{
    try{
        dispatch({type:CREATE_REVIEW_REQUEST})
        const {loginReducer:{userLogin}}= getState()
        const config ={
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userLogin.token}`
            }
        }
        const {data} = await axios.post(`/api/products/${review._id}/reviews/`,review,config)
        dispatch({type:CREATE_REVIEW_SUCCESS,payload:data.message})
    }catch(error){
        const message = error.response && error.response.data.message ? error.response.data.message:error.message
        dispatch({type:CREATE_REVIEW_FAIL,payload:message})
    }
}

//GET TOP RATED PRODUCT
export const topRatedProductAction =()=>async(dispatch,getState)=>{
    try{
        dispatch({type:TOP_RATED_PRODUCTS_REQUEST})
        const {data} = await axios.get(`/api/products/top`)
        dispatch({type:TOP_RATED_PRODUCTS_SUCCESS,payload:data})
    }catch(error){
        const message = error.response && error.response.data.message ? error.response.data.message : error.message
        dispatch({type:TOP_RATED_PRODUCTS_FAIL,payload:message})
    }
}