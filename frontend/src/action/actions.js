import {
    SEARCH_SUCCESS,
    SEARCH_FAIL,

    SEARCH_HISTORY_ERASE,
    SEARCH_HISTORY_ERASE_FAIL,

    ADD_TO_YOUTUBE_PLAYLIST_SUCCESS,
    ADD_TO_YOUTUBE_PLAYLIST_ERROR,

    REMOVE_FROM_YOUTUBE_PLAYLIST_SUCCESS,
} from '../constant/SearchConstants'

import {
    //WIKI REQUEST
    WIKI_SEARCH_REQUEST,
    WIKI_SEARCH_SUCCESS,
    WIKI_SEARCH_FAIL,

    //UNSPLASH REQUEST
    IMAGE_SEARCH_REQUEST,
    IMAGE_SEARCH_SUCCESS,
    IMAGE_SEARCH_FAIL,

    //YOUTUBE REQUEST
    YOUTUBE_SEARCH_REQUEST,
    YOUTUBE_SEARCH_SUCCESS,
    YOUTUBE_SEARCH_FAIL,

    //YOUTUBE CHOICE
    YOUTUBE_CHOICE_SUCCESS,
    YOUTUBE_CHOICE_FAIL,

    //WEATHER API 16 DAY FORCAST
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAIL,

    //WEATHER API 24 HOURS
    GET_WEATHER_HOUR_REQUEST,
    GET_WEATHER_HOUR_SUCCESS,
    GET_WEATHER_HOUR_FAIL,

    //GET MARVEL PUBLIC COMICS
    GET_MARVEL_REQUEST,
    GET_MARVEL_SUCCESS,
    GET_MARVEL_FAIL,

    //GET MARVEL CHARACTER
    GET_MARVEL_CHAR_REQUEST,
    GET_MARVEL_CHAR_SUCCESS,
    GET_MARVEL_CHAR_FAIL,

    //GET COMIC BY ID
    GET_COMIC_BY_ID_REQUEST,
    GET_COMIC_BY_ID_SUCCESS,
    GET_COMIC_BY_ID_FAIL,
    
}from '../constant/ResultsConstants'

import {
    SPAN_EDIT_SUCCESS,
    SPAN_EDIT_ERROR
} from '../constant/StylingConstant'

import {
    //POST INFO FROM CONTACT ME
    POST_PORT_CONTACT_REQUEST,
    POST_PORT_CONTACT_SUCCESS,
    POST_PORT_CONTACT_FAIL
} from  '../constant/portfolioContant'



import unsplash from '../api/unsplash'
import wikiSearch from '../api/wikiSearch'
import youtube from '../api/youtube'
import axios from 'axios'
import md5 from 'js-md5'

//POST REQUEST TO MONGODB SERVER CONTACT MAIL
export const postPortfolioContactInfo =(userInfo)=>async(dispatch)=>{

    dispatch({type:POST_PORT_CONTACT_REQUEST})
    try{
        const {data} = await axios.post('api/portfolio/comment',userInfo)
        dispatch({type:POST_PORT_CONTACT_SUCCESS,payload:data})
    }catch(error){
        const message = error.response && error.response.data.message?error.response.data.message:error.message
        dispatch({type:POST_PORT_CONTACT_FAIL,payload:message})
    }
}

//GET SEARCH REQUEST VALUE
export const getSearch =(search)=>{
    try{
        return{
            type:SEARCH_SUCCESS,
            payload:search
        }
    }catch{
        return{
            type:SEARCH_FAIL
        }
    }
}

//ERASE SEARCH HISTORY
export const eraseHistory =()=>{
    try{
        return{
            type:SEARCH_HISTORY_ERASE
        }
    }catch{
        return{
            type :SEARCH_HISTORY_ERASE_FAIL,
            payload:'An error has occured trying to delete your history!'
        }
    }
}

//GET WEATHERBIT FORECAST 16DAY API 
export const weatherGet=(city)=>async(dispatch)=>{
    try{
        dispatch({type:GET_WEATHER_REQUEST})
        const {data} = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=7507d40292714bf6a919dcf4bfeae9cb&`,{
            params:{
                units:'M',
            }
        })

        dispatch({type:GET_WEATHER_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:GET_WEATHER_FAIL, payload:error})
    }
}

//GET WEATHERBIT 24 HOUR API
export const weatherHourGet=(city)=>async(dispatch)=>{
    try{
        dispatch({type:GET_WEATHER_HOUR_REQUEST})
        const {data} = await axios.get(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&key=7507d40292714bf6a919dcf4bfeae9cb&hours=24`,{
            params:{
                units:'M',
            }
        })
        dispatch({type:GET_WEATHER_HOUR_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:GET_WEATHER_HOUR_FAIL,payload:error})
    }
}

//GET MARVEL PUBLIC COMICS API
export const marvelGet =(search)=>async(dispatch,getState)=>{
    dispatch({type:GET_MARVEL_REQUEST})
    try{
    const PUBLIC_KEY = 'be95bbc73ce4e1d24214e14b81b80d64'; // your public key
    const PRIVATE_KEY = 'e2066198ffed2b6b695ae0ad1b2c77158f46ded3'; // youur private key
    const ts = Number(new Date());
    const hash = md5.create();
    hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);

        const {data} = await axios.get(
            `https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&limit=20&apikey=${PUBLIC_KEY}&hash=${hash}`,{
                params:{
                    title:search
                }
            }
          );
        dispatch({type:GET_MARVEL_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:GET_MARVEL_FAIL,payload:error})
    }
}

//GET MARVEL CHARACTER API
export const marvelCharGet=(search)=>async(dispatch)=>{
    try{
        dispatch({type:GET_MARVEL_CHAR_REQUEST})
        const PUBLIC_KEY = 'be95bbc73ce4e1d24214e14b81b80d64'; // your public key
        const PRIVATE_KEY = 'e2066198ffed2b6b695ae0ad1b2c77158f46ded3'; // your private key
        const ts = Number(new Date());
        const hash = md5.create();
        hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
        const {data} = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&name=${search}&apikey=${PUBLIC_KEY}&hash=${hash}`);
    dispatch({type:GET_MARVEL_CHAR_SUCCESS,payload:data})

    }catch(error){
    
        dispatch({type:GET_MARVEL_CHAR_FAIL,payload:error})
    }
}

export const marvelComicGet =(id)=>async(dispatch)=>{
    try{
        dispatch({type:GET_COMIC_BY_ID_REQUEST})
        const PUBLIC_KEY = 'be95bbc73ce4e1d24214e14b81b80d64'; // your public key
        const PRIVATE_KEY = 'e2066198ffed2b6b695ae0ad1b2c77158f46ded3'; // your private key
        const ts = Number(new Date());
        const hash = md5.create();
        hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
        const {data} = await axios.get(`https://gateway.marvel.com:443/v1/public/comics/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
        dispatch({type:GET_COMIC_BY_ID_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:GET_COMIC_BY_ID_FAIL,payload:error})
    }
}

//GET WIKI API 
export const wikiGet =()=>async(dispatch,getState)=>{
    const {searchReducer:{searchR}} = getState()
    dispatch({type:WIKI_SEARCH_REQUEST})
    try{
        const {data} = await wikiSearch.get(`${searchR}`)
    dispatch({type:WIKI_SEARCH_SUCCESS,payload:data})
    }catch{
        dispatch({type:WIKI_SEARCH_FAIL,payload:'An error occured trying to fetch data from Wiki Api'})
    }
}

//GET YOUTUBE API
export const getYoutube =() =>async(dispatch,getState)=>{
    const {searchReducer:{searchR}} = getState()
    dispatch({type:YOUTUBE_SEARCH_REQUEST})
    try{
        const {data} = await youtube.get('/search',{params:{q:searchR}})
        dispatch({type:YOUTUBE_SEARCH_SUCCESS,payload:data})
    }catch{
        dispatch({type:YOUTUBE_SEARCH_FAIL,payload:'An error occured trying to fetch data from Youtube Api'})
    }
}

//YOUTUBE CHOCIE
export const youTubeChoice=(choice)=>{
    try{
        return{
            type:YOUTUBE_CHOICE_SUCCESS,
            payload:choice
        }
    }catch{
        return{
            type:YOUTUBE_CHOICE_FAIL,
            payload:'An error has occured trying to find your video choice.'
        }
    }   
}

//ADD TO YOUTUBE PLAYLIST
export const addToYoutubePlaylist =(choice)=>{
    try{
        return{
            type:ADD_TO_YOUTUBE_PLAYLIST_SUCCESS,
            payload:choice
        }
    }catch{
        return{
            type:ADD_TO_YOUTUBE_PLAYLIST_ERROR,
            payload:'An error has occured trying to add youtube item to your playlist'
        }
    }
}

//REMOVE FROM YOUTBUE PLAYLIST
export const removeFromYoutubePlaylist =(list)=>(dispatch)=>{

        dispatch({type:REMOVE_FROM_YOUTUBE_PLAYLIST_SUCCESS,payload:list.id.videoId})

}

//GET UNSPLASH API 
export const getImage=()=>async(dispatch,getState)=>{
    const {searchReducer:{searchR}} = getState()
    dispatch({type:IMAGE_SEARCH_REQUEST})
    try{
        const {data} = await unsplash.get("search/photos",{
            params:{query : `${searchR}`},
        })
        dispatch({type:IMAGE_SEARCH_SUCCESS,payload:data})
    }catch{
        dispatch({type:IMAGE_SEARCH_FAIL,payload:'An error has occured trying to fetch data from Unsplash Api'})
    }
}

//SAVE SPAN FOR IMAGE
export const saveSpan=(span)=>(dispatch)=>{
    try{
        dispatch({type:SPAN_EDIT_SUCCESS,payload:span})
    }catch{
        dispatch({type:SPAN_EDIT_ERROR,payload:2})
    }
}


