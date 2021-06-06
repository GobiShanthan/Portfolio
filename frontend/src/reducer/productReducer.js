
import {
    //CREATE PRODUCT
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,
    CREATE_PRODUCT_RESET,

    //GET ALL PRODUCTS
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAIL,


    //GET SINGLE PRODUCT
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL,

    //REMOVE PRODUCT
    REMOVE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT_REQUEST,
    REMOVE_PRODUCT_FAIL,
    REMOVE_PRODUCT_RESET,
    
    //UPDATE PRODUCT
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_RESET,

    //CREATE REVIEW
    CREATE_REVIEW_SUCCESS,
    CREATE_REVIEW_REQUEST,
    CREATE_REVIEW_FAIL,
    CREATE_REVIEW_RESET,

    //TOP RATED PRODUCTS
    TOP_RATED_PRODUCTS_REQUEST,
    TOP_RATED_PRODUCTS_SUCCESS,
    TOP_RATED_PRODUCTS_FAIL,
 
    //SORT OPTIONS 
    SET_BY_BRAND,
    SET_BY_NAME,
    SET_BY_PRICE_LOW_TO_HIGH,
    SET_BY_PRICE_HIGH_TO_LOW,
    SET_BY_AVG_CUSTOMER_REIVEW,
    SET_BY_NEW_ARRIVAL
} 
from '../constant/productConstant'


//create product
export const createProductReducer =(state={},action)=>{
    switch(action.type){
        case CREATE_PRODUCT_REQUEST:
             return {loading:true}
        case CREATE_PRODUCT_SUCCESS:
            return {loading:false,createProductInfo:action.payload}
        case CREATE_PRODUCT_FAIL:
            return {loading:false,createProductError:action.payload}
        case CREATE_PRODUCT_RESET:
            return state ={}
        default:
            return state
    }
}


//get all products 
export const allProductsReducer = (state={},action)=>{
    switch(action.type){
        
        case GET_ALL_PRODUCTS_REQUEST:
            return {loading:true}
        case GET_ALL_PRODUCTS_SUCCESS:
            return {loading:false,allProductsInfo:action.payload}



        case SET_BY_BRAND:
                let newBrandList = action.payload
            return {loading:false,allProductsInfo:newBrandList.sort((a, b) => a.brand.localeCompare(b.brand))}
        case SET_BY_NAME:
            let setByName = action.payload
            return {loading:false,allProductsInfo:setByName.sort((a,b)=>a.name.localeCompare(b.name))}
        case SET_BY_PRICE_LOW_TO_HIGH:
            let priceLowToHigh = action.payload
            return {loading:false,allProductsInfo:priceLowToHigh.sort((a,b)=>a.price - b.price)}
        case SET_BY_PRICE_HIGH_TO_LOW:
            let priceHighToLow = action.payload
            return {loading:false,allProductsInfo:priceHighToLow.sort((a,b)=>b.price - a.price)}
        case SET_BY_AVG_CUSTOMER_REIVEW:
            let avgCustRemove = action.payload
            return {loading:false,allProductsInfo:avgCustRemove.sort((a,b)=>a.reviews.length - b.reviews.length)}
        case SET_BY_NEW_ARRIVAL:
            let newArrival = action.payload
            return {loading:false,allProductsInfo:newArrival.sort((a,b)=>a.createdAt - b.createdAt)}
        case GET_ALL_PRODUCTS_FAIL:
            return {loading:false,allProductsError:action.payload}       
        case CREATE_PRODUCT_RESET:
            return state={}
        case REMOVE_PRODUCT_RESET:
            return state={}
        case UPDATE_PRODUCT_RESET:
            return state={}
        default:
            return state
    }
}


//get product by id
export const getProductReducer = (state={},action)=>{
    switch(action.type){
        case GET_PRODUCT_REQUEST:
            return {loading:true}
        case GET_PRODUCT_SUCCESS:
            return {loading:false,productInfo:action.payload}
        case GET_PRODUCT_FAIL:
            return {loading:false,productError:action.payload}
        case UPDATE_PRODUCT_RESET:
            return state={}
        default:
            return state
    }
}


//delete product
export const deleteProductReducer =(state={},action)=>{
    switch(action.type){
        case REMOVE_PRODUCT_REQUEST:
            return {loading:true}
        case REMOVE_PRODUCT_SUCCESS:
            return {loading:false,deleteProductInfo:action.payload}
        case REMOVE_PRODUCT_FAIL:
            return {loading:false,deleteProductError:action.payload}
        case REMOVE_PRODUCT_RESET:
            return state={}
        default:
            return state
    }
}

//update product
export const updateProductReducer = (state={},action)=>{
    switch(action.type){
        case UPDATE_PRODUCT_REQUEST:
            return {loading:true}
        case UPDATE_PRODUCT_SUCCESS:
            return {loading:false,updateProductInfo:action.payload}
        case UPDATE_PRODUCT_FAIL:
            return {loading:false,updateProductFail:action.payload}
        case UPDATE_PRODUCT_RESET:
            return state={}
        default:
            return state
    }
}

//write review
export const reviewProductReducer = (state={},action)=>{
    switch(action.type){
        case CREATE_REVIEW_REQUEST:
            return{loading:true}
        case CREATE_REVIEW_SUCCESS:
            return{loading:false,reviewInfo:action.payload}
        case CREATE_REVIEW_FAIL:
            return {loading:false,reviewError:action.payload}
        case CREATE_REVIEW_RESET:
            return state={}
        default:
            return state
    }
}

//get top 3 rated products
export const topThreeReducer=(state={},action)=>{
    switch(action.type){
        case TOP_RATED_PRODUCTS_REQUEST:
            return{loading:true}
        case TOP_RATED_PRODUCTS_SUCCESS:
            return{loading:false,topThree:action.payload}
        case TOP_RATED_PRODUCTS_FAIL:
            return {loading:false,topThreeError:action.payload}
        default:
            return state
    }
}