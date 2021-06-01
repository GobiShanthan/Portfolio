
import {
        //ADD TO CART
        ADD_TO_CART_FAIL,
        ADD_TO_CART_SUCCESS,
    
        //REMOVE FROM CART
        REMOVE_FROM_CART_SUCCESS,
        REMOVE_FROM_CART_FAIL,

        //SHIPPING ADDRESS
        SHIPPING_ADDRESS_SUCCESS,

        //SELECTED PAYMENT METHOD
        PAYMENT_METHOD_SUCCESS,


}from '../constant/cartConstant'



//cart reducer
export const cartReducer = (state={cartItems:[]},action)=>{
    switch(action.type){
        case ADD_TO_CART_SUCCESS:
            const item = action.payload
            const existItem = state.cartItems.find((x)=>x.product === item.product)

            if(existItem){
                return {
                    ...state,cartItems:state.cartItems.map((x)=>x.product === existItem.product ? item:x)
                }
            }else{
                return{
                    cartItems:[...state.cartItems,action.payload]
                }
            }
        case REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                cartItems:state.cartItems.filter((x)=>x.product !== action.payload)
            }
        case ADD_TO_CART_FAIL:
            return {addToCartError:action.payload}
        case REMOVE_FROM_CART_FAIL:
            return {removeFromCartError:action.payload}
        case PAYMENT_METHOD_SUCCESS:
            return {...state,paymentMethod:action.payload}
        case SHIPPING_ADDRESS_SUCCESS:
            return {...state,shippingAddress:action.payload}
        default:
            return state
    }
}

