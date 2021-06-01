import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Paper,Grid,makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'
import CartItem from '../Component/CartItem'
import {getProductAction} from '../../action/productAction'
import { Card,List } from '@material-ui/core'
import { ListItem,Button } from '@material-ui/core'
import { Divider } from '@material-ui/core'




const useStyles = makeStyles((theme) => ({
    root: {
        textAlign:'center',
        backgroundColor:'#3A6EA5',
        minHeight: '110vh',
        height: '100%'
    },
    card:{
        textAlign:'center',
        minWidth:'250px',
        marginTop:'10px',
        marginBottom:'20px'
    },
    paper:{
        width:'90%',
        maxWidth:'900px'
    }
  }));



const Cart = ({match,location,history}) =>{
    const dispatch = useDispatch()
    const classes = useStyles()

    // Single Product state
    const getProductReducer = useSelector((state)=>state.getProductReducer)
    const {productInfo} = getProductReducer

    // Add To Cart Reducer
    const cartReducer = useSelector((state)=>state.cartReducer)
    const {cartItems} = cartReducer

    //Add Decimals to price
    const addDecimals = (num)=>{
        return ((num*100)/100).toFixed(2)
    }


    useEffect(()=>{
        if(!productInfo)
            dispatch(getProductAction())
    },[productInfo,dispatch])




        return(
            <Grid container direction='column' alignContent='center' className={classes.root}>
                <Paper className={classes.paper}>
                <Grid container direction='row'>
                <Grid item xs={12}> <h2>Shopping Cart</h2></Grid>
                <Grid item xs={12} md ={8}>
                    <Grid item  xs={12} md={8}>
                        <CartItem  match={match} history={history} location={location}/>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                        <Grid item xs={12} md={6} container direction='column' alignItems='center'>
                            <Card className={classes.card} >
                                <List dense >
                                    <Grid item >
                                    <ListItem  >
                                        <h3> Subtotal {cartItems && cartItems.length > 0?`(${cartItems.reduce((acc,item)=>acc+item.qty,0)})`:'(0)'}</h3>
                                    </ListItem>
                                    </Grid>
                                    <Grid item>
                                    <ListItem >
                                        <h4>Total Price: {cartItems && cartItems.length>0?`$${addDecimals(cartItems.reduce((acc,item)=>acc + item.qty*item.price,0))}`:'$0.00'}</h4>
                                    </ListItem>
                                    </Grid>
                                    <Divider/>
                                        <Grid item container direction='column' alignContent='center'>
                                            <Grid item>
                                            <ListItem >
                                            <Link to='/placeorder' style={{textDecoration:'none'}}> <Button variant='contained' color='secondary' size='small' >Checkout</Button></Link>
                                            </ListItem>
                                            </Grid>
                                    </Grid>
                                </List>
                            </Card>
                        </Grid>
                </Grid>
                </Grid>
                </Paper>
    
            </Grid>
        )
    
}


export default Cart