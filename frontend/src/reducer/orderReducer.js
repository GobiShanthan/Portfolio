import {
//CREATE ORDER 
CREATE_ORDER_REQUEST,
CREATE_ORDER_SUCCESS,
CREATE_ORDER_FAIL,
CREATE_ORDER_RESET,

//GET ORDER BY PARAMS
GET_ORDER_REQUEST,
GET_ORDER_SUCCESS,
GET_ORDER_FAIL,

//PAY ORDER
PAY_ORDER_REQUEST,
PAY_ORDER_SUCCESS,
PAY_ORDER_FAIL,
PAY_ORDER_RESET,

//GET ORDER LIST
GET_ORDER_LIST_REQUEST,
GET_ORDER_LIST_SUCCESS,
GET_ORDER_LIST_FAIL,

//UPDATE ORDER LIST TO DELIVERED
UPDATE_DELIVERED_REQUEST,
UPDATE_DELIVERED_SUCCESS,
UPDATE_DELIVERED_FAIL,
UPDATE_DELIVERED_RESET,

//DELETE ORDER FROM LIST
REMOVE_ORDER_REQUEST,
REMOVE_ORDER_SUCCESS,
REMOVE_ORDER_FAIL,
REMOVE_ORDER_RESET,
} from '../constant/orderConstant'


export const createOrderReducer =(state={},action)=>{
    switch(action.type){
        case CREATE_ORDER_REQUEST:
             return {loading:true}
        case CREATE_ORDER_SUCCESS:
            return {loading:false,createOrderSuccess:true,order:action.payload}
        case CREATE_ORDER_FAIL:
            return {loading:false,createOrderError:action.payload}
        case CREATE_ORDER_RESET:
            return {}
        default:
            return state
    }
}

export const getOrderReducer =(state={},action)=>{
    switch(action.type){
        case GET_ORDER_REQUEST:
            return{loading:true}
        case GET_ORDER_SUCCESS:
            return {loading:false,orderInfo:action.payload}
        case GET_ORDER_FAIL:
            return {loading:false,orderError:action.payload}
        case PAY_ORDER_RESET:
            return state={}
        default: return state
    }
}

export const payOrderReducer = (state={},action)=>{
    switch(action.type){
        case PAY_ORDER_REQUEST:
            return{loading:true}
        case PAY_ORDER_SUCCESS:
            return{loading:false, payOrder:action.payload, success:true}
        case PAY_ORDER_RESET:
            return state={}
        case PAY_ORDER_FAIL:
            return {error:true}
        default:
            return state
    }
}

export const updateOrderDeliveredReducer =(state={},action)=>{
    switch(action.type){
        case UPDATE_DELIVERED_REQUEST:
            return {loading:true}
        case UPDATE_DELIVERED_SUCCESS:
            return{loading:false,deliverSuccess:action.payload}
        case UPDATE_DELIVERED_FAIL:
            return {loading:false,deliverError:action.payload}
        case UPDATE_DELIVERED_RESET:
            return state={}
        default:
            return state
    }
}

export const deleteOrderReducer =(state={},action)=>{
    switch(action.type){
        case REMOVE_ORDER_REQUEST:
            return{loading:true}
        case REMOVE_ORDER_SUCCESS:
            return{loading:false, deleteSuccess:action.payload}
        case REMOVE_ORDER_FAIL:
            return {loading:false, deleteError:action.payload}
        case REMOVE_ORDER_RESET:
                return {}
        default:
            return state
    }
}

export const getOrderListReducer =(state={},action)=>{
    switch(action.type){
        case GET_ORDER_LIST_REQUEST:
            return{loading:true}
        case GET_ORDER_LIST_SUCCESS:
            return {loading:false,orderList:action.payload}
        case GET_ORDER_LIST_FAIL:
            return {loading:false, orderListError:action.payload}
        case CREATE_ORDER_RESET:
                return state={}
        case REMOVE_ORDER_RESET:
                return state={}
        default:
            return state
    }
}