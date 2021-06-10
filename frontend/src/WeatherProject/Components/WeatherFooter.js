import React from 'react'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    weatherOustide:{
        height:'100%',
    },
    weatherInside:{
        fontSize:'14px',
        textAlign:'center',
        height:'100%',
        color:'white'
    },
})


const WeatherFooter = () => {
    const classes = useStyles()
    return (
        <div className={classes.weatherOustide} >
        <h6 className={classes.weatherInside}>Copyright &copy; Weather Metrics</h6>
    </div>
    )
}

export default WeatherFooter
