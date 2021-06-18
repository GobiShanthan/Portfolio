import {SEARCH_SUCCESS,SEARCH_FAIL,SEARCH_HISTORY_ERASE,SEARCH_HISTORY_ERASE_FAIL, ADD_TO_YOUTUBE_PLAYLIST_SUCCESS, ADD_TO_YOUTUBE_PLAYLIST_ERROR, REMOVE_FROM_YOUTUBE_PLAYLIST_SUCCESS} from '../constant/SearchConstants'
import {
    //WIKI SEARCH
    WIKI_SEARCH_REQUEST,
    WIKI_SEARCH_SUCCESS,
    WIKI_SEARCH_FAIL,

    //YOUTUBE SEARCH
    YOUTUBE_SEARCH_REQUEST,
    YOUTUBE_SEARCH_SUCCESS,
    YOUTUBE_SEARCH_FAIL,

    //YOUTUBE SELECTION
    YOUTUBE_CHOICE_SUCCESS,
    YOUTUBE_CHOICE_FAIL,

    //UNSPLASH SEARCH
    IMAGE_SEARCH_REQUEST,
    IMAGE_SEARCH_SUCCESS,
    IMAGE_SEARCH_FAIL,

    //WEATHER GET
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAIL,

    //WEATHER HOUR GET
    GET_WEATHER_HOUR_REQUEST,
    GET_WEATHER_HOUR_SUCCESS,
    GET_WEATHER_HOUR_FAIL,

    //WEATHER  FORCAST GET
    GET_WEATHER_FORCAST_REQUEST,
    GET_WEATHER_FORCAST_SUCCESS,
    GET_WEATHER_FORCAST_FAIL,    

    //GET COMIC LIST
    GET_MARVEL_REQUEST,
    GET_MARVEL_SUCCESS,
    GET_MARVEL_FAIL,

    //GET CHAR INFO
    GET_MARVEL_CHAR_REQUEST,
    GET_MARVEL_CHAR_SUCCESS,
    GET_MARVEL_CHAR_FAIL,

    //MARVEL COMIC BY ID
    GET_COMIC_BY_ID_REQUEST,
    GET_COMIC_BY_ID_SUCCESS,
    GET_COMIC_BY_ID_FAIL
} from '../constant/ResultsConstants'

import {
    SPAN_EDIT_SUCCESS,
    SPAN_EDIT_ERROR
} from '../constant/StylingConstant'

export const searchReducer =(state={searchH:[]},action)=>{
    switch(action.type){
        case SEARCH_SUCCESS:
            return {...state,searchH:[action.payload,...state.searchH],searchR:action.payload}
        case SEARCH_FAIL:
            return {searchE: 'An Error has occured with your search, please be patient!'}
        case SEARCH_HISTORY_ERASE:
            return {searchH:[]}
        case SEARCH_HISTORY_ERASE_FAIL:
            return {searchEraseError:action.payload}
            default:
                return state
    }
}

export const weatherReducer = (state={},action)=>{
    switch(action.type){
        case GET_WEATHER_REQUEST:
            return{loading:true}
        case GET_WEATHER_SUCCESS:
            return {loading:false,weatherInfo:action.payload}
        case GET_WEATHER_FAIL:
            return {loading:false,weatherError:action.payload}
        default:
            return state
    }
}

export const weatherForcastReducer = (state={},action)=>{
    switch(action.type){
        case GET_WEATHER_FORCAST_REQUEST:
            return{loading:true}
        case GET_WEATHER_FORCAST_SUCCESS:
            return {loading:false,weatherInfo:action.payload}
        case GET_WEATHER_FORCAST_FAIL:
            return {loading:false,weatherError:action.payload}
        default:
            return state
    }
}




export const weatherHourReducer =(state={},action)=>{
    switch(action.type){
        case GET_WEATHER_HOUR_REQUEST:
            return{loading:true}
        case GET_WEATHER_HOUR_SUCCESS:
            return {loading:false,hours:action.payload}
        case GET_WEATHER_HOUR_FAIL:
            return {loading:false,hourError:action.payload}
        default:
            return state
    }
}

export const wikiReducer =(state={},action)=>{
    switch(action.type){
        case WIKI_SEARCH_REQUEST:
            return {loading:true}
        case WIKI_SEARCH_SUCCESS:
            return {loading:false,wikiData:action.payload}
        case WIKI_SEARCH_FAIL:
            return {loading:false,wikiError:action.payload}
        default:
            return state
    }
}

export const youtubeReducer =(state={},action)=>{
    switch(action.type){
        case YOUTUBE_SEARCH_REQUEST:
            return {loading:true}
        case YOUTUBE_SEARCH_SUCCESS:
            return {loading:false,youtubeData:action.payload}
        case YOUTUBE_SEARCH_FAIL:
            return {loading:false,youtubeError:action.payload}
        default:
            return state
    }
}

export const youTubeChoiceReducer =(state={},action)=>{
    switch(action.type){
        case YOUTUBE_CHOICE_SUCCESS:
            return{videoChoice:action.payload}
        case YOUTUBE_CHOICE_FAIL:
            return {videoChoiceError:action.payload}
        default:
            return state
    }
}

export const youtubePlaylistReducer =(state=[],action)=>{
    switch(action.type){
        case ADD_TO_YOUTUBE_PLAYLIST_SUCCESS:
            return [...state,action.payload]
        case REMOVE_FROM_YOUTUBE_PLAYLIST_SUCCESS:
            return state.filter( state=> state.id.videoId !== action.payload)
        case ADD_TO_YOUTUBE_PLAYLIST_ERROR:
            return {playListError:action.payload}
        default:
            return state
    }
}

export const imageReducer =(state={},action)=>{
    switch(action.type){
        case IMAGE_SEARCH_REQUEST:
            return {loading:true}
        case IMAGE_SEARCH_SUCCESS:
            return {loading:false,imageData:action.payload}
        case IMAGE_SEARCH_FAIL:
            return {loading:false,imageError:action.payload}
        default:
            return state
    }
}

export const spanReducer =(state={},action)=>{
    switch(action.type){
        case SPAN_EDIT_SUCCESS:
            return {loadedSpan:action.payload}
        case SPAN_EDIT_ERROR:
            return {loadedSpanError:action.payload}
        default:
            return state
    }
}

export const marvelReducer =(state={},action)=>{
    switch(action.type){
        case GET_MARVEL_REQUEST:
            return {loading:true}
        case GET_MARVEL_SUCCESS:
            return {loading:false,marvelInfo:action.payload}
        case GET_MARVEL_FAIL:
            return {loading:false,marvelError:action.payload}
        default:
            return state
    }
}

export const marvelCharReducer = (state={},action)=>{
    switch(action.type){
        case GET_MARVEL_CHAR_REQUEST:
            return {loading:true}
        case GET_MARVEL_CHAR_SUCCESS:
            return {loading:false,marvelCharInfo:action.payload}
        case GET_MARVEL_CHAR_FAIL:
            return {loading:false,marvelCharError:action.payload}
        default:
            return state
    }
}

export const marvelComicReducer = (state={},action)=>{
    switch(action.type){
        case GET_COMIC_BY_ID_REQUEST:
            return {loading:true}
        case GET_COMIC_BY_ID_SUCCESS:
            return{comicInfo:action.payload}
        case GET_COMIC_BY_ID_FAIL:
            return{comicError:action.payload}
        default: 
            return state
    }
}