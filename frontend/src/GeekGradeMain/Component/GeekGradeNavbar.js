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
import geekLogo from '../../Pics/GeekGrade.png'
import SimpleMenu from './SimpleMenu'
import SortMenu from './SortMenu'
import {FaHome} from 'react-icons/fa'

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
  HomeIcon3:{
    color:'white',
    fontSize:'25px',
    marginTop:'40px',
    marginLeft:'8px',
    marginBottom:'-10px',
    cursor:'pointer',
    textDecoration:'none',
    '&:hover': {
      fontSize: "30px",
      color:'ffffff',
    }
  }
}));

 const NavBar =({location})=>{
  const dispatch = useDispatch()
  const loginReducer = useSelector((state)=>state.loginReducer)
  const {userLogin} = loginReducer
  const classes = useStyles();

  return (
<div>
      <AppBar position="static" className={classes.root}>
        <Toolbar variant="dense">
          <div style={{marginTop:'-35px'}}>
          <Link to='/' className={classes.HomeIcon3}><FaHome /><div style={{fontSize:'15px',marginTop:'-10px',marginLeft:'-12px'}}>G-HOME</div></Link>
          </div>
          <Typography variant="h6" className={classes.title} style={{marginTop:'-35px',marginLeft:'40px'}}>
          {location.pathname === '/geekgrade'?<SortMenu/>:null}
          </Typography>
          <Link to='/geekgrade' className={classes.title} style={{color:'white',textDecoration:'none'}}>
          <img src={geekLogo} alt='geekgrade' style={{minWidth:"100px",width:'100%',maxWidth:"300px"}}/>
          </Link >
        
          {userLogin?<SimpleMenu userLogin={userLogin}/>:null}
          <Button style={{color:'white',marginTop:'-45px'}}><PersonIcon style={{color:'black'}}/>{userLogin?<Link to='/geekgrade' onClick={()=>dispatch(logoutAction())} style={{color:'black',fontWeight:'bold'}}>Logout</Link>:<Link to='/geekgrade/authuser' style={{color:'black',textDecoration:'none',fontSize:'15px',fontWeight:'bolder'}}>Login</Link>}</Button>
        </Toolbar>
      </AppBar>

      </div>
  );
}
export default NavBar