import React from 'react'
import ProductCard from '../Component/ProductCard'
import CarouselItem from '../Component/Carousel'


const GeekGradeMain = () =>{

    return(
        <div style={{height:'100%',minHeight:'100vh',backgroundColor:'#3A6EA5',color:'white'}} >
            <div style={{marginBottom:"40px"}}>
            <CarouselItem/>
            </div>
            <div style={{paddingBottom:'10%'}}>
            <ProductCard/>
            </div>

        </div>
    )
}

export default GeekGradeMain


