import React from 'react'
import {makeStyles} from '@material-ui/core'


const useStyles = makeStyles({
    gobiSearchOustide:{
        height:'20px',
        backgroundColor:"#264653",
        height:"100%"
    },
    gobiSearchInside:{
        fontSize:'14px',
        textAlign:'center',
        height:"10px",
        color:'white'
    },
    gobiShanthanOustide:{
        height:'20px',
        height:"100%"
    },
    gobiShanthanInside:{
        fontSize:'14px',
        textAlign:'center',
        height:"10px",
        color:'black'
    },
    marvelApiOustide:{
        height:'20px',
        height:"100%",
        backgroundColor:'black'
    },
    marvelApiInside:{
        fontSize:'14px',
        textAlign:'center',
        height:"10px",
        color:'white'
    },
    weatherOustide:{
        height:'20px',
        height:"100%",
      backgroundColor: 'rgba(355, 255,255, 0.1)'
    },
    weatherInside:{
        fontSize:'14px',
        textAlign:'center',
        height:"10px",
        color:'black'
    },
    geekGradeOustide:{
        height:'20px',
        height:"100%",
        backgroundColor:'#3A6EA5'
    },
    geekGradeInside:{
        fontSize:'14px',
        textAlign:'center',
        height:"10px",
        color:'white'
    },
})



const Footer = ({history}) =>{
    const urlLocation =history.location.pathname
    const classes = useStyles()

    if(urlLocation ==='/searchpage'){
        return(
        <div className={classes.gobiSearchOustide}>
            <h6  className={classes.gobiSearchInside}>Copyright &copy; Gobi Search</h6>
        </div>)

    }else if(urlLocation.slice(0,10) ==='/geekgrade'){
        return(
            <div className={classes.geekGradeOustide}>
            <h6 className={classes.geekGradeInside}>Copyright &copy; GeekGrade</h6>
        </div>
        )
    }else if(urlLocation === '/weather'){
        return(
            <div className={classes.weatherOustide} style={{backgroundColor: 'rgba(355, 255,255, 0.1)'}}>
                <h6 className={classes.weatherInside}>Copyright &copy; Weather Metrics</h6>
            </div>
        )
    }else if(urlLocation.slice(0,6) === '/comic' || urlLocation === '/marvel'){
        return(
            <div className={classes.marvelApiOustide}>
            <h6 className={classes.marvelApiInside}>Copyright &copy; Marvel Api</h6>
        </div>
        )
    }else{
        return(
            <div className={classes.gobShanthanOustide} >
            <h6 className={classes.gobiShanthanInside}>Copyright &copy; Gobi Shanthan</h6>
        </div>
        )
    }
    
}

export default Footer