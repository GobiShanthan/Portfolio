import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Grid,List,ListItem,ListItemText,ListItemSecondaryAction,Button} from '@material-ui/core'
import { Divider,makeStyles } from '@material-ui/core'
import {createOrder} from '../../action/orderAction'

const useStyles = makeStyles({
  section:{
    textAlign:'center',
    margin:'20px'
  },
  list:{
    border:'1px solid black',
    margin:'20px',
    minWidth:'200px'
  }
})


const PlaceOrderPage = ({history}) => {
  const classes = useStyles()
    const dispatch = useDispatch()

    //Calculate prices 

  const addDecimals =(num)=>{
    return (Math.round(num*100)/100).toFixed(2)
  }

    //cart items from redux state
    const cartReducer = useSelector((state)=>state.cartReducer)
    const {cartItems,shippingAddress,paymentMethod} = cartReducer


    const createOrderReducer = useSelector((state)=>state.createOrderReducer)
    const {order} = createOrderReducer

    useEffect(()=>{
      if(order){
        history.push(`/geekgrade/order/${order._id}`)
      }
    },[order,history])


    const cartItemsCost = addDecimals(cartItems.reduce((acc,item)=>acc+item.qty*item.price,0))
    const shippingCost = addDecimals(cartItemsCost > 100? 40:100)
    const taxCostCad = addDecimals(cartItemsCost *.13)// For Canadian tax
    const totalCost = (
      Number(cartItemsCost) +
      Number(shippingCost) +
      Number(taxCostCad)
    ).toFixed(2)


    const orderHandler =()=>{
      dispatch(createOrder({
        orderItems:cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice:cartItemsCost,
        taxPrice:taxCostCad,
        shippingPrice:shippingCost,
        totalPrice:totalCost
      }))
    }




    return (
        <div>
            <Grid container direction ='row' >
                <Grid item  xs={12} md ={8} >
                    <Grid item xs={12} className={classes.section}>
                        <h2>Shipping</h2>
                        <strong>Address:</strong> {shippingAddress?shippingAddress.address+" "+ shippingAddress.city+ " "+shippingAddress.postalCode+" " + shippingAddress.country:null}
                        <hr/>
                        <h2>Payment Method</h2>
                        <strong>Method:</strong> {paymentMethod?paymentMethod:null}
                        <hr/>
                    </Grid>
                    <Grid item xs={12}  className={classes.section}>
                      <h2>Order Items</h2>
                    <List dense>
        {cartItems.map((item)=>(
          <>
        <ListItem>
          <div><img src={item.image} alt={item.name} style={{width:"50px", height:"30px"}}/></div>

          <ListItemText>
          {`${item.name}`}
          </ListItemText>
          <ListItemText>
            {`${item.qty} x $${item.price} = $${item.qty*item.price}`}
          </ListItemText>

      </ListItem>
      <hr/>


        </>
      ))}
        </List>
                    </Grid>
                </Grid >
                <Grid item xs={12} md={4} container direction="column">
                  <List border={1} className={classes.list}>
                    <ListItem>
                      <ListItemText style={{textAlign:'center'}}>
                        <strong>ORDER SUMMARY</strong>
                      </ListItemText>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <ListItemText>
                        <strong>Items</strong>

                      </ListItemText>
                      <ListItemSecondaryAction>
                        ${cartItemsCost}
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <ListItemText>
                          <strong>Shipping</strong>
                      </ListItemText>
                      <ListItemSecondaryAction>
                        ${shippingCost}
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <ListItemText>
                        <strong>Tax</strong>
                      </ListItemText>
                      <ListItemSecondaryAction>
                        ${taxCostCad}
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <ListItemText>
                        <strong>Total</strong>
                      </ListItemText>
                      <ListItemSecondaryAction>
                        ${totalCost}
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider/>
                    <Grid item container direction='column' alignContent='center'>
                    <Grid item>
                    <ListItem >
                      <Button variant='contained' color='secondary' onClick={orderHandler}>PLACE ORDER</Button>
                    </ListItem>
                    </Grid>
                    </Grid>
                   
                  </List>
                </Grid>
            </Grid>
        </div>
    )
}

export default PlaceOrderPage
