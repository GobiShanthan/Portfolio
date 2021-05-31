import axios from "axios"

const KEY = 'AIzaSyCIL_RbUc0s0bfVDrcLjwvuvcV3W881BNQ'

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
params:{
    part: "snippet",
    maxResults: 20,
    key: KEY
    }
})