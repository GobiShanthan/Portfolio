import React, { useState,useEffect } from 'react'


const ImageCard =({image}) =>{
    const [spans,setSpans] = useState()
    const ref = React.createRef()



    useEffect(()=>{
        ref.current.addEventListener('load',()=>{
                const height = ref.current.clientHeight;
                setSpans(Math.ceil(height/10))
        })
    },[ref])




    return(
        <div style={{gridRowEnd:`span ${spans}`}}>
           <img src={image.urls.full} ref={ref}  alt={image.alt_description} width='200px'/>
        </div>
    )
}

export default ImageCard