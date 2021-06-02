import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {makeStyles,Grid,Paper} from '@material-ui/core'
import {getProductAction} from '../../action/productAction'
import Reviews from '../Component/Reviews'
import AddToCartBox from '../Component/AddToCartBox'
import Rating from '../Component/Rating'
import {CREATE_REVIEW_RESET} from '../../constant/productConstant'
import './screens.css'

const useStyles = makeStyles({
    root:{
        textAlign:'center',
        marginTop:"1%",
        marginLeft:"5%",
        marginRight:"5%",
        maxWidth:'1000px'
    },
    image:{
        width:"80%",
        maxHeight:"500px",
        maxWidth:'500px'
    },
    reviews:{
        marginTop:'2%',
    },
})

const ProductPage =({match,history})=>{
    const productId = match.params.id
    const dispatch = useDispatch()
    const classes = useStyles()


    const getProductReducer = useSelector((state)=>state.getProductReducer)
    const {productInfo} = getProductReducer


  const addDecimals=(num)=>{
    return ((num*100)/100).toFixed(2)
  }


    useEffect(()=>{
        if(!productInfo ) {
            dispatch(getProductAction(productId)) 
        }
        if(productInfo && productInfo._id !== productId ){
            dispatch(getProductAction(productId)) 
        }

    },[productInfo,productId,dispatch])







    if(productInfo){
        return(
            <div className='productpage'>
                <Grid container direction='column' alignContent='center'>
                <Paper className={classes.root} elevation={20} style={{width:'90%',maxWidth:'800px',marginBottom:'40px'}} >
                        <Grid container direction ='row' style={{marginTop:'8%'}}>
                            <Grid item container direction='row' xs={12} md={8}>
                                <Grid item xs={12} md={8}>
                                    <img src={productInfo.image} alt={productInfo.name} className ={classes.image}/>
                                </Grid>
                                <Grid item xs={12} md={3} >
                                    <h2>{productInfo.brand} {productInfo.name}</h2>
                                    <hr/>
                                    <Rating rating={productInfo.rating} />
                                    <div>{productInfo.numOfReviews} reviews</div>
                                    <hr/>
                                    <div>Price: ${addDecimals(productInfo.price)}</div>
                                    <hr/>
                                    <div> Description: {productInfo.description}</div>

                                </Grid>
                                <Grid item xs ={12} md={6} className={classes.reviews}>
                                    <Reviews product={productInfo}/>
                                </Grid>
                            </Grid>
                            <Grid item container direction='column' xs={12} md={4}>
                                <Grid item xs={12} md={4} style={{marginBottom:'40px'}}>
                                    <AddToCartBox product={productInfo}/>
                                </Grid>

                            </Grid>
                        </Grid>
                </Paper>
                </Grid>
            </div>
        )
    }else{
        return(
            <div>
                loading.......
            </div>
        )
    }
}

export default ProductPage


