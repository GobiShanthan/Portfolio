import axios from "axios"

export default axios.create({
    baseURL:`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=`
    
})