import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Grid} from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {ListItemText} from '@material-ui/core'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CloseIcon from '@material-ui/icons/Close';
import {addToCartAction, deleteFromCartAction} from '../../action/cartAction'
import {Alert} from '@material-ui/lab'
import { Divider } from '@material-ui/core';




const CartItem =({match,location,history})=> {
  const dispatch = useDispatch()
  const productId= match.params.id
  const qty = Number(location.search.split('=')[1])


  const addDecimals =(num)=>{
    return((num*100)/100).toFixed(2)
  }

  //CART STATE
  const cartReducer = useSelector((state)=>state.cartReducer)
  const {cartItems} = cartReducer

  useEffect(()=>{
    if(productId){
      dispatch(addToCartAction(productId,qty))
    }
  },[productId,qty,dispatch])



if( cartItems && cartItems.length > 0){
  return(
    <div>
      <Grid>
        <List dense>
        {cartItems.map((item)=>(
          <>
        <ListItem>
          <div style={{marginRight:'10px'}}><img src={item.image} alt={item.name} style={{width:"50px", height:"30px"}}/></div>

          <ListItemText>
          {`${item.name}`}
          </ListItemText>
          <ListItemText>
            {`Price: $${addDecimals(item.price)}`}
          </ListItemText>
          <ListItemText>
          <select name="Qty" id='stock' value={item.qty} onChange={(e)=>dispatch(addToCartAction(item.product,Number(e.target.value)))}style={{width:'40px'}} >
              {[...Array(item.countInStock).keys()].map(
                (x)=>(
                  <option value={x+1} key={x+1} >
                    {x+1}
                  </option>
                )
              )}
            </select>
          </ListItemText>
          <ListItemSecondaryAction>
          <CloseIcon style={{color:'red'}}  onClick={(e)=>dispatch(deleteFromCartAction(item.product))}/>
      </ListItemSecondaryAction>
      </ListItem>
      <Divider/>
        </>
      ))}
        </List>
        <Alert color='info' style={{margin:'10px'}}>Want to add more to cart?<Link to='/geekgrade'> Go back</Link></Alert>

      </Grid>
    </div>
  )
}else{
  return(
    <div>
      <Alert color='info' style={{margin:'10px'}}>Cart is empty!
      <Link to='/geekgrade'> Go back</Link>
      </Alert>
    </div>
  )
}



  
}

export default CartItem