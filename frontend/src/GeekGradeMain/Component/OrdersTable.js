
import React from 'react';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import CreateIcon from '@material-ui/icons/Create';
import './component.css'
import {deleteOrderAction} from '../../action/orderAction'


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);




const useStyles = makeStyles({
  table: {
    minWidth: 50,
    heigh:"10px"
  },
});

const addDecimals =(num)=>{
  return ((num*100)/100).toFixed(2)
}

const OrdersTable =({List})=>{
  const dispatch = useDispatch()
  const classes = useStyles();


const usersRow = List.map((order)=>{
  return(
    <StyledTableRow key={order._id}>
        <StyledTableCell component="th" scope="row">
          {`${order._id}`}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
        ${addDecimals(order.totalPrice)}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
        {order.isPaid?<h3 style={{color:'green'}}>Paid</h3>:<h4 style={{color:'red'}}>Not Paid</h4>}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
        {order.isDelivered?<h3 style={{color:'green'}}>Delivered</h3>:<h4 style={{color:'red'}}>Not Delivered</h4>}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          <div style={{fontSize:'20', marginLeft:'20px'}}>
            <Link to={`/geekgrade/order/${order._id}`}><CreateIcon className='updateIcon' /></Link>
            <CloseIcon  className='closeIcon' onClick={(e)=>dispatch(deleteOrderAction(order._id))} />
          </div>
          
        </StyledTableCell>
        
  </StyledTableRow>


  )
})




  return (
    <TableContainer component={Paper} elevation={20} >
      <Table className={classes.table} aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell>Order ID</StyledTableCell>
            <StyledTableCell >Order Amount</StyledTableCell>
            <StyledTableCell >Paid</StyledTableCell>
            <StyledTableCell >Delivered</StyledTableCell>
            <StyledTableCell >Update/Delete</StyledTableCell>           
          </TableRow>
        </TableHead>
        <TableBody>
          {usersRow}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default OrdersTable