import React from 'react'
import {Link} from 'react-router-dom'
import {Grid,Card,makeStyles,List,ListItem} from '@material-ui/core'
import {IconsDisplay} from '../Components/IconsDisplay'



const ForecastCard = ({weatherInfo}) => {
    const useStyles =  makeStyles({
        card:{
            backgroundColor: 'rgba(355, 255,255, 0.1)',
            color:'white',
            width:"90%",
            height:'100%',
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
    return (

        <Grid container direction='column' alignContent='center'>
        <Card className={classes.card}>
        <h2 style={{marginBottom:'60px'}}>16 Day Forecast</h2>

        <List style={{textAlignLast:'left'}} dense >
        {weatherInfo.data.map((w)=>(
                <div key={w.datetime}>
                <Link to={`/weatherday/${w.datetime}`} style={{textDecoration:'none',color:'white'}}>
                <Grid container direction='row'>
                <ListItem key={w.datetime} className={classes.listItem} >
                    <Grid item xs={2}><div>{w.datetime.slice(5)}</div></Grid>
                    <Grid item xs={3}className={classes.icon}>{IconsDisplay(w.weather.description)}</Grid>
                    <Grid item xs={5}className={classes.condtions}>
                        <div>{w.weather.description}</div>
                    </Grid>
                    <Grid item xs={2}>
                        <div>{w.temp}&#8451;</div>
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
}

export default ForecastCard
