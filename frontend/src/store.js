import { createStore, applyMiddleware,combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import {
  searchReducer,
  wikiReducer,
  youtubeReducer,
  youTubeChoiceReducer,
  youtubePlaylistReducer,
  imageReducer,
  spanReducer,
  weatherReducer,
  weatherHourReducer,
  weatherForcastReducer,
  marvelReducer,
  marvelCharReducer,
  marvelComicReducer

} from './reducer/searchReducer'

//CONTACT ME REDUCER
import {postContactReducer} from './reducer/portfolioReducer'

//USER REDUCERS
import {loginReducer,regisReducer,getProfileReducer,updateProfileReducer,getAllUsersReducer,deleteUserReducer,getUserByIdReducer,updateUserByIdReducer} from './reducer/userReducer'

//PRODUCTS REDUCER
import {allProductsReducer,getProductReducer,deleteProductReducer,updateProductReducer,createProductReducer,reviewProductReducer,topThreeReducer} from './reducer/productReducer'

//CART REDUCER 
import {cartReducer} from './reducer/cartReducer'

//ORDER REDUCER
import {createOrderReducer,getOrderReducer,payOrderReducer,getOrderListReducer,updateOrderDeliveredReducer,deleteOrderReducer} from './reducer/orderReducer'


//INITIAL STATES

//login initial state
const userLoginFromStorage = localStorage.getItem('userLogin')?JSON.parse(localStorage.getItem('userLogin')):null

//cart initial state
const cartItemsFromStorage = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]

//shipping address initial state
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')?JSON.parse(localStorage.getItem('shippingAddress')):null





const initialState = {
  cartReducer: {
    cartItems: cartItemsFromStorage,
    shippingAddress:shippingAddressFromStorage
  },
  loginReducer: { userLogin: userLoginFromStorage },

}

const reducer = combineReducers({
//(Gobi Search) Search Reducers
searchReducer,

//Wiki Reducers
wikiReducer,

//Youtube Reducers
youtubeReducer,
youTubeChoiceReducer,
youtubePlaylistReducer,

//Image Reducers
imageReducer,
spanReducer,

//WeatherBit Reducers
weatherReducer,
weatherHourReducer,
weatherForcastReducer,

//Marvel Reducers
marvelReducer,
marvelCharReducer,
marvelComicReducer,

//User Reducers
loginReducer,
regisReducer,
getProfileReducer,
updateProfileReducer,
getAllUsersReducer,
deleteUserReducer,
getUserByIdReducer,
updateUserByIdReducer,

//Product Reducers
allProductsReducer,
getProductReducer,
deleteProductReducer,
updateProductReducer,
createProductReducer,
reviewProductReducer,

//Cart Reducer
cartReducer,
topThreeReducer,

//Order Reducer
createOrderReducer,
getOrderReducer,
payOrderReducer,
getOrderListReducer,
updateOrderDeliveredReducer,
deleteOrderReducer,

//Contact Me Reducer,
postContactReducer
})

const middleware = [thunk]


const store = createStore(reducer,initialState, composeWithDevTools(
  applyMiddleware(...middleware),
));
export default store