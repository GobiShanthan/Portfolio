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
  marvelReducer,
  marvelCharReducer,
  marvelComicReducer

} from './reducer/searchReducer'



const reducer = combineReducers({
searchReducer,
wikiReducer,
youtubeReducer,
youTubeChoiceReducer,
youtubePlaylistReducer,
imageReducer,
spanReducer,
weatherReducer,
weatherHourReducer,
marvelReducer,
marvelCharReducer,
marvelComicReducer
})

const initialState={}
const middleware=[thunk]


const store = createStore(reducer,initialState, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));


export default store