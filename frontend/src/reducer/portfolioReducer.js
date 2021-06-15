import {
    //POST PORTFOLIO CONTACT INFO CONSTANT
    POST_PORT_CONTACT_REQUEST,
    POST_PORT_CONTACT_SUCCESS,
    POST_PORT_CONTACT_FAIL,
} from '../constant/portfolioContant'



export const postContactReducer=(state={},action)=>{
    switch(action.type){
        case POST_PORT_CONTACT_REQUEST:
            return{loading:true}
        case POST_PORT_CONTACT_SUCCESS:
            return{loading:false,postSuccess:action.payload}
        case POST_PORT_CONTACT_FAIL:
            return {loading:false,postError:action.payload}
        default:
            return state
    }
}
