import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './component.css'
import {getAllProductsAction} from '../../action/productAction'
import {UPDATE_PRODUCT_RESET} from '../../constant/productConstant'
import './component.css'
import Rating from './Rating'




const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    marginLeft:'20px',
    marginBottom:'10px',
  
  },
  media: {
    display:'flex',
    justifyContent:'center',
    margin:'30px',
    height: '125px', 
    width: '80%', 
  },
  Typography:{
    fontSize:"16px",

  },
  typographyTitle:{
    fontSize:'20px',
    marginBottom:'-8px',
    fontWeight:'bolder'
  }
});

const  ProductCard=()=>{
  const dispatch = useDispatch()
  const [products,setProducts] = useState([])
  const classes = useStyles();



  const allProductsReducer = useSelector((state)=>state.allProductsReducer)
  const {allProductsInfo} = allProductsReducer

  const updateProductReducer = useSelector((state)=>state.updateProductReducer)
  const {updateProductInfo} = updateProductReducer

  const addDecimals=(num)=>{
    return ((num*100)/100).toFixed(2)
  }


  useEffect(()=>{
    if(!allProductsInfo || updateProductInfo){
      dispatch({type:UPDATE_PRODUCT_RESET})
      dispatch(getAllProductsAction())
    }
    setProducts(allProductsInfo)
  },[dispatch,allProductsInfo,updateProductInfo])


if(products){

 return(
   <div className='projectCard'>
     {products.map(product=>(
       <Card key={product._id} className='projectCard' elevation={22}>
  <CardActionArea>
        <img
          className={classes.media}
          src={product.image}
          alt={product.name}
        />
        <CardContent>
        <Typography gutterBottom  className={classes.typographyTitle}>
            {product.brand}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2" className={classes.Typography}>
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea >
      <div style={{marginTop:'-20px'}}>
      {`$${addDecimals(product.price)}`}
      </div>
      <Rating rating={product.rating}/>

      <Link to={`/geekgrade/product/${product._id}`} style={{textDecoration:'none'}}>
        <Button type='button' variant='contained' color='secondary' size='large' style={{marginLeft:'20%',marginRight:'20%',marginBottom:'5%'}}>Add To Cart</Button>        
      </Link>
       </Card>
     ))}
   </div>
 )
}else{
  return(
    <div>
      loading.....
    </div>
  )
}
}



export default ProductCard

