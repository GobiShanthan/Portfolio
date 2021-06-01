import React from 'react'
import ProductCard from '../Component/ProductCard'
import CarouselItem from '../Component/Carousel'
import {Grid} from '@material-ui/core'

const GeekGradeMain = () =>{

    return(
        <div style={{height:'100%',minHeight:'100vh',backgroundColor:'#3A6EA5',color:'white'}} >
            <div style={{marginBottom:"40px"}}>
            <CarouselItem/>
            </div>
            <ProductCard/>
            <Grid container direction='column' alignContent='center'>
            </Grid>



        </div>
    )
}

export default GeekGradeMain


