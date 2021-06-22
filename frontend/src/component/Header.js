import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom'
import {Link as ScrollLink} from 'react-scroll'
import {Grid} from '@material-ui/core'
import marvelLogo from '../MarvelApp/marvelPics/marvelLogo.jpeg'
import {FaHome} from 'react-icons/fa'
import GeekGradeNavbar from '../GeekGradeMain/Component/GeekGradeNavbar'
import './Header.css'
import IconMenu from '../component/IconMenu'

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
link:{
  marginLeft:"20px"
},
gobisearch:{
  fontSize:'20px',
  marginTop:'-15px'
}

  

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
    <div className={classes.root}  >
      <AppBar position="fixed" style={{backgroundColor: 'rgba(355, 255,255, 0.1)',height:"55px"}}>
        <Toolbar variant='dense'>
          <Grid container direction='row'>
            <Grid item xs={4} >
            <Link to='/' >
              <FaHome className={classes.HomeIcon} />
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
}if(location.pathname.slice(0,11)==='/searchpage'){
  return(
    <div className={classes.root}  id='mainnav'>
    <AppBar position="static"  className='portfolioHeader'  >
      <Toolbar variant='dense'>
      <Grid container direction='row' >
          <Grid item xs={4} style={{marginBottom:'-9px',marginTop:"4px"}}><Link to='/' className={classes.HomeIcon3}><FaHome /><div style={{fontSize:'15px',marginTop:'-10px',marginLeft:'-12px'}}>G-HOME</div></Link></Grid>
              <Grid item container direction='column' alignContent='center' >
              <Grid item xs={12}>
                <h3 className={classes.gobisearch}>GOBISEARCH</h3>
              </Grid>
            </Grid>

          </Grid>
      </Toolbar>
    </AppBar>
  </div>
  )
}else{
  return (
    <div className={classes.root}  id='mainnav'>
      <AppBar position="static"  className='portfolioHeader' >
        <Toolbar variant='dense'>
          <div style={{display:'flex',flexGrow:'1'}}>
          <h3 style={{color:'white'}}><Link to='/' className={classes.HomeIcon2}><FaHome /><div style={{fontSize:'10px',marginTop:'-8px',marginLeft:'-12px'}}>G-HOME</div></Link></h3>
          <div className='links'>
            <div className={classes.link}> <ScrollLink to='portfolio' smooth={true} duration={2000}><h3>Portfolio</h3></ScrollLink></div>
            <div className={classes.link}> <ScrollLink to='about' smooth={true} duration={2000}><h3>About me</h3></ScrollLink></div>
            <div className={classes.link}> <ScrollLink to='contact' smooth={true} duration={2000}><h3>Contact me</h3></ScrollLink></div>
          </div>
            </div>
            <div className='iconMenu'>
              <IconMenu edge="end" className={classes.menuButton} color="inherit" aria-label="menu"/>
            </div>
            
        </Toolbar>
      </AppBar>
    </div>
  );
}

}

export default Header