import React from 'react'
import ImageCard from './ImageCard'
import '../../search.css'


const ImageList = ({images}) =>{



    if(images){
        return(
            <div style={{color:'white',marginTop:'5vh'}} className="image-list">

                {images.map((image)=>(
                        <ImageCard image={image} key={image.id} />
                ))}
            </div>
        )
    }else{
        return null
    }
    
}

export default ImageList