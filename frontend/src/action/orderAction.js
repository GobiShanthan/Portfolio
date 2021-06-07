import axios from 'axios'
import {
    //CREATE NEW ORDER
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,

    //GET ORDER BY PARAMS
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAIL,

    //PAY ORDER
    PAY_ORDER_REQUEST,
    PAY_ORDER_SUCCESS,
    PAY_ORDER_FAIL,

    //GET ORDER LIST
    GET_ORDER_LIST_REQUEST,
    GET_ORDER_LIST_SUCCESS,
    GET_ORDER_LIST_FAIL,

    //UPDATE TO DELIVERED
    UPDATE_DELIVERED_REQUEST,
    UPDATE_DELIVERED_SUCCESS,
    UPDATE_DELIVERED_FAIL,

    //REMOVE ORDER FROM LIST
    REMOVE_ORDER_REQUEST,
    REMOVE_ORDER_SUCCESS,
    REMOVE_ORDER_FAIL,
} from '../constant/orderConstant'


const createOrder =(order)=>async(dispatch,getState)=>{
    try{
        dispatch({type:CREATE_ORDER_REQUEST})
        const {loginReducer:{userLogin}} = getState()
        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${userLogin.token}`
            }
        }

        const {data} = await axios.post(`/api/orders/`,order,config)
       dispatch({type:CREATE_ORDER_SUCCESS,payload:data})
    }catch(error){
        const message = error.response && error.response.data.message?error.response.data.message:error.message
        dispatch({type:CREATE_ORDER_FAIL,payload:message})
    }
}


const getOrderListAction =()=>async(dispatch,getState)=>{
    try{
        dispatch({type:GET_ORDER_LIST_REQUEST})
        const {loginReducer:{userLogin}} = getState()
        const config={
            headers:{
                Authorization: `Bearer ${userLogin.token}`
            }
        }
        const {data} = await axios.get(`/api/orders/`,config)
        dispatch({type:GET_ORDER_LIST_SUCCESS,payload:data})
    }catch(error){
        const message = error.response && error.response.data.message?error.response.data.message:error.message
        dispatch({type:GET_ORDER_LIST_FAIL,payload:message})
    }
}


const getOrderAction =(id)=>async(dispatch,getState)=>{

    try{
        dispatch({type:GET_ORDER_REQUEST})
        const {loginReducer:{userLogin}} = getState()
        const config={
            headers:{
                Authorization:`Bearer ${userLogin.token}`
            }
        }

        const { data } = await axios.get(`/api/orders/${id}`,config)

        dispatch({type:GET_ORDER_SUCCESS,payload:data})
    }catch(error){
        const message = error.response && error.response.data.message? error.response.data.message:error.message
        dispatch({type:GET_ORDER_FAIL,payload:message})
    }
}


const payOrderAction =(orderId,paymentResult)=>async(dispatch,getState)=>{

    try{
        dispatch({type:PAY_ORDER_REQUEST})
        const {loginReducer:{userLogin}} = getState()
        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userLogin.token}`
            }
        }
        const { data } = await axios.put(
            `/api/orders/${orderId}/pay`,
            paymentResult,
            config
          )
          dispatch({type:PAY_ORDER_SUCCESS, payload:data})
    }catch(error){
        const message = error.response&& error.response.data.message? error.response.data.message:error.message
        dispatch({type:PAY_ORDER_FAIL, payload:message})
    }
}


const updateDeliveredAction =(id)=>async(dispatch,getState)=>{

    try{
        dispatch({type:UPDATE_DELIVERED_REQUEST})
        const {loginReducer:{userLogin}} = getState()
        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${userLogin.token}`
            }
        }
        const {data} = await axios.put(`/api/orders/${id}/deliver`,{},config)
        dispatch({type:UPDATE_DELIVERED_SUCCESS, payload:data})
    }catch(error){
        const message = error.response&& error.response.data.message?error.response.data.message:error.message
        dispatch({type:UPDATE_DELIVERED_FAIL,payload:message})
    }
}


const deleteOrderAction =(id)=>async(dispatch,getState)=>{
    try{
        dispatch({type:REMOVE_ORDER_REQUEST})
        const {loginReducer:{userLogin}} = getState()
        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${userLogin.token}`
            }
        }

        const {data} = await axios.delete(`/api/orders/${id}`,config)
        dispatch({type:REMOVE_ORDER_SUCCESS,payload:data})
    }catch(error){
        const message = error.response && error.response.data.message ? error.response.data.message:error.message
        dispatch({type:REMOVE_ORDER_FAIL,payload:message})
    }
}


export {createOrder,getOrderAction,payOrderAction,getOrderListAction,updateDeliveredAction,deleteOrderAction}
