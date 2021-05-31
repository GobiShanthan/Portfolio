import axios from "axios"



export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
params:{
    access_key : '21ea6901058a76cf34c990f60dc48c78',
    maxResults: 20,
    query : 'New York'
    }
})


