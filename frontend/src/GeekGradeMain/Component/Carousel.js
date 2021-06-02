import React,{useEffect} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button,makeStyles,Grid } from '@material-ui/core'
import {topRatedProductAction} from '../../action/productAction'
import Rating from './Rating'

const useStyles = makeStyles({
    root:{

        width:'90%',
        textAlign:'center',
        minWidth:'275px',
        borderRadius:'2%'
    },
    image:{
        width:'40%',
        maxWidth:'350px',
        height:'150px'
    },
    button:{
        marginBottom:'20px'
    },

})


const CarouselItem = ()=>{
    const dispatch = useDispatch()
    const classes = useStyles()
    const topThreeReducer = useSelector((state)=>state.topThreeReducer)
    const {topThree} = topThreeReducer


    useEffect(()=>{
        if(!topThree){
            dispatch(topRatedProductAction())
        }
    },[dispatch,topThree])


    if(topThree){
        return(
                <Carousel >
                {topThree.map((item)=>(

                <Grid container direction='column' alignContent='center'>
                <Paper key={item._id} className={classes.root} style={{maxWidth:'800px'}}>
                    <Grid item style={{paddingTop:"5px"}}><h1>Top Rated Products</h1></Grid>
                <Grid container direction='column' alignContent='center'>
                <img className={classes.image}  src={item.image} alt={item.name}/>
                <div className={classes.subHeading}>
                <h2>{item.brand +" "+item.name}</h2>
                <Rating rating={item.rating}/>
                <p>{item.description}</p>

                </div>
                </Grid>
    
                <Button variant='contained' color='secondary' className={classes.button}>
                    <Link to={`/geekgrade/product/${item._id}`} style={{color:'white',textDecoration:'none'}}>
                    ADD TO CART
                    </Link>
                </Button>
            </Paper>
                </Grid>  
                ))}
                
                </Carousel>

        )
    }else{
        return(
            <h3>loading.....</h3>
        )
    }
    
}
export default CarouselItem