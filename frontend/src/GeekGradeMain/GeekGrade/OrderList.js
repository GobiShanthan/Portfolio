import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import OrdersTable from '../Component/OrdersTable'
import {getOrderListAction} from '../../action/orderAction'
import {REMOVE_ORDER_RESET,CREATE_ORDER_RESET} from '../../constant/orderConstant'
import {Grid,makeStyles} from '@material-ui/core'


const useStyles = makeStyles({
    root:{
        width:"100%",
        minHeight:"100vh",
        height:'100%',
        textAlign:'center',
        backgroundColor:"#3A6EA5"
    },
    table:{
        width: '90%',
        maxWidth: '750px',
    }
})



const OrderList = () => {
const dispatch = useDispatch()
const classes = useStyles()

//GET ORDERLIST STATE
const getOrderListReducer = useSelector((state)=>state.getOrderListReducer)
const {orderList} = getOrderListReducer

//DELETE ORDERLIST STATE
const deleteOrderReducer = useSelector((state)=>state.deleteOrderReducer)
const {deleteSuccess} = deleteOrderReducer

//CREATE ORDERLIST STATE
const createOrderReducer = useSelector((state)=>state.createOrderReducer)
const {createOrderSuccess} = createOrderReducer

useEffect(()=>{
    if(!orderList){
        dispatch(getOrderListAction())
    }
    if(deleteSuccess){
         dispatch({type:REMOVE_ORDER_RESET})
    }
    if(createOrderSuccess){
        dispatch({type:CREATE_ORDER_RESET})
    }

},[dispatch,orderList,deleteSuccess,createOrderSuccess])

if(orderList){
    return (
        <Grid container direction='column' alignContent='center' className={classes.root}>
            <Grid item><h1>Orders</h1></Grid>
            <Grid item className={classes.table}>{<OrdersTable List={orderList}/>} </Grid>
        </Grid>
    )
}else{
    return (
        <h1>loading.....</h1>
    )
}
    
}

export default OrderList
