import axios from 'axios'
import {    
    //ADD TO CART 
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,

    //DELETE FROM CART
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_FAIL,

    //SHIPPING ADDRESS
    SHIPPING_ADDRESS_SUCCESS,
    SHIPPING_ADDRESS_FAIL,

    //SELECTED PAYMENT
    PAYMENT_METHOD_SUCCESS,
    PAYMENT_METHOD_FAIL,
}
from '../constant/cartConstant'





//ADD TO CART 
export const addToCartAction =(id,qty)=>async(dispatch,getState)=>{
    const {data} = await axios.get(`/products/${id}`)
    try{
        dispatch({
            type: ADD_TO_CART_SUCCESS,
            payload: {
              product: data._id,
              name: data.name,
              image: data.image,
              price: data.price,
              countInStock: data.countInStock,
              qty,
            },
          })
        
    localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
    }catch(error){
        const message = error.response && error.response.data.message?error.response.data.message:error.message
        dispatch({type:ADD_TO_CART_FAIL,payload:message})
    }
}

//DELETE ITEM FROM CART
export const deleteFromCartAction =(id)=>(dispatch,getState)=>{
    try{
        dispatch({type:REMOVE_FROM_CART_SUCCESS,payload:id})

        localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
    }catch(error){
        const message ='An error has occured trying to delete item from cart'
        dispatch({type:REMOVE_FROM_CART_FAIL,payload:message})
    }   
}   


export const addShippingAddressAction =(data)=>(dispatch)=>{
    try{
        dispatch({type:SHIPPING_ADDRESS_SUCCESS,payload:data})
        localStorage.setItem('shippingAddress',JSON.stringify(data))
    }catch(error){
        const message = error.response && error.response.data.message? error.response.data.message: error.message
        dispatch({type:SHIPPING_ADDRESS_FAIL,payload:message})
    }
}

export const addPaymentMethodAction = (data)=>(dispatch)=>{
    try{
        dispatch({type:PAYMENT_METHOD_SUCCESS,payload:data})
    }catch(error){
        const message = error.response && error.response.data.message? error.response.data.message:error.message
        dispatch({type:PAYMENT_METHOD_FAIL,payload:message})
    }
}

