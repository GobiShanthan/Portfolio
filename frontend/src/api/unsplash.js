import axios from "axios"


export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: 'Client-ID 7XVf8IapkWXTgNB6v08j9bkInKzBfXJTh7H67Fk9WJQ',sameSite:true,httpOnly:true
    }
})


