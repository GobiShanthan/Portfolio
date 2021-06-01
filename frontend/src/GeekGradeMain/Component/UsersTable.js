
import React from 'react';
import {Link} from 'react-router-dom'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux'
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
import {deleteUserAction} from '../../action/userAction'

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



const UsersTable =({usersList})=>{
  const dispatch = useDispatch()
  const classes = useStyles();


const usersRow = usersList.map((user)=>{
  return(
    <StyledTableRow key={user._id}>
        <StyledTableCell component="th" scope="row">
          {`${user.firstName} ${user.lastName}`}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {user.email}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {user.isAdmin?<div style={{fontWeight:'bolder', color:'green'}}>True</div>:<div style={{fontWeight:'bolder', color:'red'}}>False</div>}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          <div style={{fontSize:'20', marginLeft:'20px'}}>
            <Link to={`/user/${user._id}`}><CreateIcon className='updateIcon' /></Link>
            <CloseIcon  className='closeIcon' onClick={()=>dispatch(deleteUserAction(user._id))}/>
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
            <StyledTableCell>Users Name</StyledTableCell>
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell >Admin</StyledTableCell>
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


export default UsersTable