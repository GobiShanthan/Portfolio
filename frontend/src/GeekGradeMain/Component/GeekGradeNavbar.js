import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import {logoutAction} from '../../action/userAction'
import geekLogo from '../../Pics/geekgradeLogo.svg'
import SimpleMenu from './SimpleMenu'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#3A6EA5'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:'#EBEBEB'
  },
}));

 const NavBar =()=>{
  const dispatch = useDispatch()
  const loginReducer = useSelector((state)=>state.loginReducer)
  const {userLogin} = loginReducer
  const classes = useStyles();

  return (

      <AppBar position="static" className={classes.root}>
        <Toolbar variant="dense">
          <Link to='/geekgrade' style={{color:'white',textDecoration:'none'}}>
          <img src={geekLogo} alt='geekgrade' style={{width:"100px"}}/>
          </Link>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          {userLogin?<SimpleMenu userLogin={userLogin}/>:null}
          <Button style={{color:'white',marginTop:'-45px'}}><PersonIcon style={{color:'black'}}/>{userLogin?<Link to='/geekgrade' onClick={()=>dispatch(logoutAction())} style={{color:'black',fontWeight:'bold'}}>Logout</Link>:<Link to='/geekgrade/authuser' style={{color:'black',textDecoration:'none',fontSize:'15px',fontWeight:'bolder'}}>Login</Link>}</Button>
        </Toolbar>
      </AppBar>

  );
}
export default NavBar