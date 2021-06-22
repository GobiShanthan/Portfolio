import React from 'react'
import {useSelector} from 'react-redux'
import {makeStyles} from '@material-ui/core'


const useStyles = makeStyles({
    gobiSearchOustide:{
        backgroundColor:"#264653",
        height:'100%',

    },
    gobiSearchInside:{
        fontSize:'14px',
        textAlign:'center',
        height:"10px",
        color:'white'
    },
    gobiShanthanOustide:{
        height:'100%',

    },
    gobiShanthanInside:{
        fontSize:'14px',
        textAlign:'center',
        height:"10px",
        color:'black'
    },
    marvelApiOustide:{
        height:'100%',

        backgroundColor:'black'
    },
    marvelApiInside:{
        fontSize:'14px',
        textAlign:'center',
        height:"10px",
        color:'white'
    },
    geekGradeOustide:{
        backgroundColor:'#3A6EA5',
        height:'100%',
    },
    geekGradeInside:{
        fontSize:'14px',
        textAlign:'center',
        color:'white'
    },
})



const Footer = ({history}) =>{
    //url pathname
    const urlLocation =history.location.pathname

    //material ui make styles
    const classes = useStyles()

    //marvelInfo
    const marvelReducer = useSelector((state)=>state.marvelReducer)
    const {marvelInfo} = marvelReducer



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
    }else if(urlLocation.slice(0,8)==='/weather'){
        return null
    }else if(urlLocation.slice(0,6) === '/comic' || urlLocation === '/marvel'){
        return(
            <div className={classes.marvelApiOustide}>
            <h6 className={classes.marvelApiInside}>{marvelInfo? marvelInfo.attributionText:"© Gobi Shanthan"}</h6>
        </div>
        )
    }
    else{
        return(
            <div className={classes.gobShanthanOustide} >
            <h6 className={classes.gobiShanthanInside}>Copyright &copy; Gobi Shanthan</h6>
        </div>
        )
    }
    
}

export default Footer