import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Grid} from '@material-ui/core'
import {getOrderAction,payOrderAction,updateDeliveredAction} from '../../action/orderAction'
import { Divider,List,ListItem,ListItemText,ListItemSecondaryAction,Button,Paper,makeStyles } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import axios from 'axios'
import {PAY_ORDER_RESET,UPDATE_DELIVERED_RESET} from '../../constant/orderConstant'
import {PayPalButton} from 'react-paypal-button-v2'


const useStyles = makeStyles({
    paper:{
        marginLeft:'5%',
        marginRight:'5%',
    },
    content:{
        margin:'5px'
    },
    alert:{
        margin:'10px'
    },
})




const Order = ({match,history}) => {
    const dispatch = useDispatch()
    const [sdkReady, setSdkReady] = useState(false)
    const OrderId = match.params.id
    const classes = useStyles()

    //GET ORDER STATE BY ID
    const getOrderReducer = useSelector((state)=>state.getOrderReducer)
    const {orderInfo} = getOrderReducer
    
    //GET LOGIN STATE
    const loginReducer = useSelector((state)=>state.loginReducer)
    const {userLogin} = loginReducer

    //GET PAY  STATE
    const payOrderReducer = useSelector((state)=>state.payOrderReducer)
    const {success:successPay,loading:loadingPay} = payOrderReducer

    //GET DELIVER STATE
    const updateOrderDeliveredReducer = useSelector((state)=>state.updateOrderDeliveredReducer)
    const {deliverSuccess} = updateOrderDeliveredReducer


    const deliverHandler =()=>{
        dispatch(updateDeliveredAction(OrderId))
    }

    const addDecimal =(num)=>{
        return ((num*100)/100).toFixed(2)
    }


    useEffect(()=>{
        if (!userLogin) {
            history.push('/geekgrade/authuser')
          }
            const addPayPalScript = async () => {
            const { data: clientId } = await axios.get('/api/config/paypal')
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
            script.async = true
            script.onload = () => {
              setSdkReady(true)
            }
            document.body.appendChild(script)
          }
        if(!orderInfo || successPay ||deliverSuccess || orderInfo._id !== OrderId){
            dispatch({type: UPDATE_DELIVERED_RESET})
            dispatch({type:PAY_ORDER_RESET})
            dispatch(getOrderAction(OrderId))
        }else if(!orderInfo.isPaid){
            if(!window.paypal){
                addPayPalScript()
            }else{
                setSdkReady(true)
            }
        }
    },[orderInfo,dispatch,OrderId,successPay,deliverSuccess,userLogin,history])
    
    const successPaymentHandler =(paymentResult) =>{
        dispatch(payOrderAction(OrderId,paymentResult))
    }


if(orderInfo){
    const totalItemsPrice = orderInfo.orderItems.reduce((acc,item)=>acc+item.qty*item.price,0)
    return (
        <Paper className={classes.paper}>
            <Grid container direction='row' className={classes.content}>
                <Grid item xs={12}> 
                <h2>ORDER # </h2>
                <Divider/>
                </Grid>

                <Grid item container direction='column' xs={12} md={8}>
                    <Grid>
                        <h3>Shipping</h3>
                        <div>User Id: {orderInfo.user._id}</div>
                        <div>Email: {orderInfo.user.email}</div>
                        <div>Address:{orderInfo.shippingAddress.address}, {orderInfo.shippingAddress.city}, {orderInfo.shippingAddress.postalCode}, {orderInfo.shippingAddress.country}</div>
                        {orderInfo.isDelivered?
                        <Alert severity="success" className={classes.alert}><strong>Successfully Shipped on</strong> {orderInfo.deliveredAt.slice(0,10)} <strong>Time </strong> {orderInfo.deliveredAt.slice(11,19)} </Alert>
                        :
                        <Alert severity="error" className={classes.alert}>Not Delivered</Alert >}
                    </Grid>
                    <Divider/>
                    <Grid>
                        <h3>
                        Payment Method
                        </h3>
                        <div>Method: {orderInfo.paymentMethod}</div>
                        {orderInfo.isPaid?
                        <Alert severity='success' className={classes.alert}><strong>Successfully paid on </strong>{orderInfo.paidAt.slice(0,10)} <strong>Time</strong> {orderInfo.paidAt.slice(11,19)}</Alert>
                        :
                        <Alert severity='error' className={classes.alert}>Not Paid</Alert>}
                    </Grid>
                    <Divider/>
                    <Grid>
                        <h3>Order Items</h3>
                        {orderInfo.orderItems.map((item)=>(
                            <List dense key={item.product}>
                            <ListItem key={item._id}>
                                <div><img style={{width:'50px'}} src={item.image} alt={item.name}/></div>
                                    <ListItemText>{item.name}</ListItemText>
                                    <ListItemSecondaryAction>{`${item.qty} x $${addDecimal(item.price)} = $${addDecimal(item.price*item.qty)}`}</ListItemSecondaryAction>
                            </ListItem>
                            <Divider/>
                        </List>
                        ))}  
                    </Grid>
                    <Divider/>
                </Grid>
                <Grid item xs={12} md={4} >
                    <List>
                        <ListItem>
                            <strong style={{textAlign:'center'}}>ORDER SUMMARY</strong>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText>Items</ListItemText>
                            <ListItemSecondaryAction>${addDecimal(totalItemsPrice)}</ListItemSecondaryAction>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText>Shipping</ListItemText>
                            <ListItemSecondaryAction>${addDecimal(orderInfo.shippingPrice)}</ListItemSecondaryAction>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText>
                                    Tax
                            </ListItemText>
                            <ListItemSecondaryAction>
                                ${addDecimal(orderInfo.taxPrice)}
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemText>
                                Total Price
                            </ListItemText>
                            <ListItemSecondaryAction>
                                ${addDecimal(orderInfo.totalPrice)}
                            </ListItemSecondaryAction>
                        </ListItem>
                        {!userLogin.isAdmin?
                        <div>
                        {!orderInfo.isPaid && (
                <ListItem>
                  {loadingPay && <h6>loading</h6>}
                  {!sdkReady ? (
                    <h6>loading</h6>
                  ) : (
                    <PayPalButton
                      amount={orderInfo.totalPrice}
                      onSuccess={successPaymentHandler}
                    />
                  )}
                </ListItem>
              )}
                        </div>:
                        <ListItem>
                            <Grid container direction='column' alignContent='center'>
                            <Button variant='contained' color='secondary' onClick={deliverHandler} className="button">Delivered</Button>
                            </Grid>
                        </ListItem>}

                
                    </List>

                </Grid>
            </Grid>
        </Paper>
    )
}else{
    return(
        <h3>Loading......</h3>
    )
}

}

export default Order
