
import React from 'react';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {deleteProductAction} from '../../action/productAction'

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
  },
});



const ProductsTable =({productsList})=>{
  const dispatch = useDispatch()
  const classes = useStyles();


const usersRow = productsList.map((product)=>{
  return(
    <StyledTableRow key={product._id}>
        <StyledTableCell component="th" scope="row">
          {`${product._id}`}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {product.name}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          ${product.price}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          <div style={{fontSize:'20', marginLeft:'20px'}}>
            <Link to={`/geekgrade/productedit/${product._id}`}><CreateIcon className='updateIcon' /></Link>
            <CloseIcon  className='closeIcon' onClick={(e)=>dispatch(deleteProductAction(product._id))} />
          </div>
        </StyledTableCell>
  </StyledTableRow>


  )
})




  return (
    <TableContainer component={Paper} elevation={20}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product ID</StyledTableCell>
            <StyledTableCell >Name</StyledTableCell>
            <StyledTableCell >Price</StyledTableCell>
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


export default ProductsTable