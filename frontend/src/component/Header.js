import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom'
import {Link as ScrollLink} from 'react-scroll'
import {Grid} from '@material-ui/core'
import marvelLogo from '../MarvelApp/marvelPics/marvelLogo.jpeg'
import {FaHome} from 'react-icons/fa'
import GeekGradeNavbar from '../GeekGradeMain/Component/GeekGradeNavbar'
import {CgMenuGridR} from 'react-icons/cg'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:0,
    margin:0,
  },
  menuButton: {
    marginRight: theme.spacing(),
  },
  title: {
    flexGrow: 1,
  },
  marvelImg:{
    width:'110px',
    height:'40px',
    marginTop:'-40px'
  },
  HomeIcon:{
    color:'white',
    fontSize:'25px',
    marginTop:'40px',
    marginLeft:'8px',
    marginBottom:'-10px',
    cursor:'pointer',
    textDecoration:'none',
    '&:hover': {
      fontSize: "30px",
      color:'#264653',
    }
  },
  HomeIcon2:{
    color:'white',
    fontSize:'20px',
    cursor:'pointer',
    textDecoration:'none',
    '&:hover': {
      fontSize: "25px",
      color:'#FFFFFF',
    }
  },
WeatherFont:{
  fontSize:'9px',
  color:'white',
  marginTop:'2px',
  marginLeft:'1px',
  marginBottom:'-10px',
  cursor:'pointer',
  textDecoration:'none',
},
headerSpace:{
  marginLeft:"20px"
},

  

}));

const Header=({location})=>{
  const classes = useStyles();
if(location.pathname.slice(0,10) ==='/geekgrade'){
  return(
    <GeekGradeNavbar location={location}/>
  )
}
if(location.pathname === '/weather'){
  return(
    <div className={classes.root} >
      <AppBar position="fixed" style={{backgroundColor: 'rgba(355, 255,255, 0.1)',height:"55px"}}>
        <Toolbar variant='dense'>
          <Grid container direction='row'>
            <Grid item xs={4} >
            <Link to='/' >
              <FaHome className={classes.HomeIcon}/>
            <div className={classes.WeatherFont}>G-HOME</div>
            </Link>
            </Grid>
              <Grid container direction='column' alignContent='center'>
              <Grid item xs={12}><h3 style={{color:'white', marginTop:'-10px',fontSize: 'min(max(18px, 4vw), 26px)'}}>WeatherMetrics</h3></Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

if(location.pathname.slice(0,11) ==='/weatherday'){
  return null
}

if(location.pathname.slice(0,6) === '/comic' || location.pathname === '/marvel'){
  return(
    <div>
      <AppBar position="static"  style={{backgroundColor:'#F0131E'}}>
        <Toolbar variant='dense'>
          <Grid container direction='row' >
          <Grid item xs={4} style={{marginBottom:'-9px',marginTop:"4px"}}><Link to='/' className={classes.HomeIcon}><FaHome /><div style={{fontSize:'15px',marginTop:'-10px',marginLeft:'-12px'}}>G-HOME</div></Link></Grid>
              <Grid item container direction='column' alignContent='center' >
              <Grid item xs={12}>
                <Link to='/marvel'><img src={marvelLogo} alt='marvelLogo' className={classes.marvelImg}/></Link>
              </Grid>
            </Grid>

          </Grid>
        </Toolbar>

      </AppBar>
    </div>
  )
}else{
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar variant='dense'>
          <div style={{display:'flex',flexGrow:'1'}}>
          <h3 style={{color:'white'}}><Link to='/' className={classes.HomeIcon2}><FaHome /><div style={{fontSize:'10px',marginTop:'-8px',marginLeft:'-12px'}}>G-HOME</div></Link></h3>
            <Typography variant ='h6'>
            <div className={classes.headerSpace}><ScrollLink to='portfolio' smooth={true} duration={2000}><h3>Portfolio</h3></ScrollLink></div>
            </Typography>
            <Typography variant ='h6'>
            <div className={classes.headerSpace}><ScrollLink to='about' smooth={true} duration={2000}><h3>About me</h3></ScrollLink></div>
            </Typography>
            <Typography variant ='h6'>
            <div className={classes.headerSpace}><ScrollLink to='contact' smooth={true} duration={2000}><h3>Contact me</h3></ScrollLink></div>
            </Typography>
            </div>
            <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <CgMenuGridR/>
    </IconButton>

        </Toolbar>
      </AppBar>
    </div>
  );
}

}

export default Header