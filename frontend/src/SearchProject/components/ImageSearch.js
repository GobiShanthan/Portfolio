import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import ImageList from '../components/YoutubeComponents/ImageList'







const ImageSearch =() =>{
    const [images,setImages] = useState('')
    const imageReducer = useSelector((state)=>state.imageReducer)
    const {imageData} = imageReducer

        useEffect(()=>{
            if(imageData){
                setImages(imageData.results)
            }
        },[imageData])

        
    return(
        <div>
            <ImageList images={images}/>
        </div>
    )
}

export default ImageSearch