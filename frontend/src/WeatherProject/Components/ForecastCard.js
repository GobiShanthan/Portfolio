import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Grid,Card,makeStyles,List,ListItem} from '@material-ui/core'
import {IconsDisplay} from '../Components/IconsDisplay'
import WeatherLoader from './WeatherLoader'


const ForecastCard = () => {

    const weatherHourReducer = useSelector((state)=>state.weatherHourReducer)
    const {hours} = weatherHourReducer


    const useStyles =  makeStyles({
        card:{
            backgroundColor: 'rgba(355, 255,255, 0.1)',
            color:'white',
            width:"90%",
            height:'100%',
            marginTop:'40px'
        },
        description:{
            fontSize:'15px',
            margin:'10px'
        },
        listItem:{
            fontSize:'12px',
            '&:hover': {
                fontSize:'16px'
                  }
        },
        icon:{
            fontSize:'35px',
            color:'white',
        }

    })
    const classes = useStyles()
    if(hours){
        return (

            <Grid container direction='column' alignContent='center'>
            <Card className={classes.card}>
            <h2 style={{marginBottom:'60px'}}>7 Day Forecast</h2>
    
            <List style={{textAlignLast:'left'}} dense >
            {hours.daily.map((w,index)=>(
                    <div key={w.dt}>
                    <Link to={`/weatherday/${index}`} style={{textDecoration:'none',color:'white'}}>
                    <Grid container direction='row'>
                    <ListItem key={w.dt} className={classes.listItem} >
                        <Grid item xs={2}><div>{new Date(w.dt*1000).toString().slice(0,10)}</div></Grid>
                        <Grid item xs={3}className={classes.icon}><IconsDisplay icons={w.weather[0].description}/></Grid>
                        <Grid item xs={5}className={classes.condtions}>
                            <div>{w.weather[0].description}</div>
                        </Grid>
                        <Grid item xs={2}>
                            <div>{w.temp.day.toString().slice(0,2)}&#8451;</div>
                        </Grid>
                    </ListItem>
                    </Grid>
                    </Link>
                    <hr/>
                    </div>
            ))}
            </List>
            </Card>
            </Grid>
        )
    }else{
        return(
            <WeatherLoader/>
        )
    }
    
}

export default ForecastCard
