import React from 'react'
import {makeStyles} from '@material-ui/core'
import {Paper,Grid,Divider} from '@material-ui/core'
import {IconsDisplay} from './IconsDisplay'
import WeatherLoader from './WeatherLoader'



const ExtraCurrent = (weather) => {
    const useStyle = makeStyles({
        root:{
            margin:'10px'
        },
        paper:{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            width:"90%",
            color:'white'
        },
        text:{
            textAlign:'left'
        },
        icon:{
            fontSize:'60px',
        },
        data:{
            textAlign:'right',
        },
        divider:{
            backgroundColor:'white',
            margin:'50px'
        }
    })
    const classes = useStyle()

    let currentData = weather.weatherInfo


    if(currentData){
        return (
            <div>
                <Grid  direction='column' container alignContent='center'>
                <Paper className={classes.paper}>
                    <h2>Current Weather</h2>
                    <div className={classes.icon}>
                   <IconsDisplay icons={currentData.weather[0].description}/> 
                   <Divider className={classes.divider}/>
                    </div>
                    <Grid container direction="row">
                        <Grid item xs={2}></Grid>
                        <Grid item xs={5}><div className={classes.text}>Feels Like(Min) </div></Grid>
                        <Grid item xs={3} className={classes.data}>{(currentData.main.temp_min-273.15).toString().slice(0,4)}&#8451;</Grid>
                    </Grid>

                    <Divider className={classes.divider}/>

                    <Grid container direction="row">
                    <Grid item xs={2}></Grid>
                        <Grid item xs={5}><div className={classes.text}>Feels Like (Max)</div></Grid>
                        <Grid item xs={3} className={classes.data}>{(currentData.main.temp_max-273.15).toString().slice(0,4)}&#8451;</Grid>
                    </Grid>

                    <Divider className={classes.divider}/>

                    <Grid container direction="row">
                    <Grid item xs={2}></Grid>
                        <Grid item xs={5}><div className={classes.text}>Wind Gust Speed</div></Grid>
                        <Grid item xs={3} className={classes.data}>{Number(currentData.wind.gust.toString().slice(0,2))*3.6}km/h {currentData.wind.deg}&deg;</Grid>
                    </Grid>

                    <Divider className={classes.divider}/>

                    <Grid container direction="row">
                    <Grid item xs={2}></Grid>
                        <Grid item xs={5}><div className={classes.text}>Relative Humidity </div></Grid>
                        <Grid item xs={3} className={classes.data}>{currentData.main.humidity}%</Grid>
                    </Grid>

                    <Divider className={classes.divider}/>

                    <Grid container direction="row">
                        <Grid item xs={2}></Grid>
                        <Grid item xs={5}><div className={classes.text}>Clouds</div></Grid>
                        <Grid item xs={3} className={classes.data}>{currentData.clouds.all}%</Grid>
                    </Grid>

                    <Grid container direction="row">
                    <Grid item xs={2}></Grid>
                        {/* <Grid item xs={5}><div className={classes.text}>Clouds</div></Grid>
                        <Grid item xs={3} className={classes.data}>{currentData.clouds}</Grid> */}
                    </Grid>
                    <Divider className={classes.divider}/>
                </Paper>
                </Grid>
            </div>
        )
    }else{
        return(
            <div style={{backgroundColor:'black',height:'100vh',margin:'-20px'}}>
                <WeatherLoader text='Loading....'/>
            </div>

        )
    }

}

export default ExtraCurrent
