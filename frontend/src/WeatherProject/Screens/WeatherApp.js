import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Paper,Grid,makeStyles,Button,TextField} from '@material-ui/core'
import {weatherGet, weatherHourGet} from '../../action/actions'
import dayTime from '../WeatherPics/daytime.jpeg'
import nightTime from '../WeatherPics/nighttime.jpg'
import HourlyCard from '../Components/HourlyCard'
import {HiArrowNarrowDown, HiArrowNarrowUp} from 'react-icons/hi'
import ForecastCard from '../Components/ForecastCard'
import ExtraCurrent from '../Components/ExtraCurrent'
import WeatherLoader from '../Components/WeatherLoader'
import WeatherFooter from '../Components/WeatherFooter'

const useStyles = makeStyles({
    paper:{
        textAlign:'center',
        width:'100%',
        color:'white'
    },
    temp:{
        fontSize:"50px"
    },
    card:{
        margin:'10px',
        padding:'-11px',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        color:'white',
        borderRadius:'20px',

    },
    searchbox:{

    },
    search:{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius:'20px',
        textDecoration:'none',
        tabSize:'20px',
        height:'35px',
        textAlign:'center',
        color:'Colors.white',
        margin:'10px',

        
    },
    button:{
        borderRadius:'20px',
    },
    humidity:{
        fontSize:'20px'
    },
    arrow:{
        margin:'10px'
    },
    dirDown:{
        fontSize:'18px',
        display:'relative',
        color:'#1e90ff'
    },
    dirUp:{
        fontSize:'18px',
        color:'red'
    }
})


const WeatherMain = () => {
    const dispatch= useDispatch()
    const [weather,setWeather] = useState()
    const weatherReducer = useSelector((state)=>state.weatherReducer)
    const {weatherInfo} = weatherReducer

    const [city,setCity] = useState('markham')
    const classes = useStyles()



    useEffect(()=>{
        if(!weatherInfo){
            dispatch(weatherGet(city))
            dispatch(weatherHourGet(city))
        }
        setWeather(weatherInfo)
    },[weatherInfo,dispatch,city])


        const newDate = new Date()
        const date =  newDate.toLocaleDateString()
        const hours = new Date().getHours()
        
    const changeWeatherLocation =()=>{
        dispatch(weatherGet(city))
        dispatch(weatherHourGet(city))
    }

        if(weather){
            const address = weather.city_name
            const currentWeather = weather.data[0]
            return (
                <Grid container direction='column' alignContent='center'>
                    <Paper className={classes.paper} style={{backgroundImage:`url(${hours > 6 && hours < 20?dayTime:nightTime})`,height:'100%',minHeight:'100vh',backgroundSize:'100% 99.99%', backgroundAttachment: 'fixed'}}>
                    <Grid item xs={12} style={{marginTop:'80px'}}>
                        <div>{date}</div>
                        <h2>{address}</h2>
                        <p>{currentWeather.weather.description}</p>
                        <p>{currentWeather.conditions}</p>
                        <div className={classes.temp}>{currentWeather.temp}&#8451;</div>
                        <Grid container direction='column' alignContent='center'>
                        <div className={classes.arrow}>
                        <HiArrowNarrowDown className={classes.dirDown}/>{currentWeather.app_min_temp}
                            <HiArrowNarrowUp className={classes.dirUp}/>{currentWeather.app_max_temp}

                        </div>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.searchbox}xs={12}>
        
                    <form onSubmit={changeWeatherLocation}>
                    <TextField
                        className={classes.search}
                        InputProps={{disableUnderline: true,min: 0, style: {color:'white',paddingLeft:'30%',paddingRight:'30%'}}} 
                        onChange={(e)=>setCity(e.target.value)} 
                    />
                    <div>
                    <Button  variant="contained"  style={{width:'135px',backgroundColor:"rgba(255, 255, 255, 0.3)",color:'white'}}  className='button' type='submit' onClick={(e)=>dispatch(weatherGet(city))}>Change City</Button>
                    </div>
                    
                    </form>
                </Grid>
                    <Grid item style={{fontSize:'20px',marginBottom:'-70px',marginTop:'40px'}}>Hourly forecast</Grid>
                    <Grid item xs={12}>
                    <HourlyCard/>
                    </Grid>

                    <Grid container direction='row'>
                    <Grid item xs={12} md={6} style={{marginBottom:'40px',textAlign:'center',marginTop:'40px'}}  >
                    <ExtraCurrent weatherInfo={weather}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <ForecastCard weatherInfo={weather}/>
                    </Grid>
                    </Grid>
                    <WeatherFooter/>
                </Paper>

                </Grid>
                
            )
        }else{
            return(
                <div style={{backgroundColor:'black',height:'100vh',margin:'-20px'}}>
                    <WeatherLoader text='Api requests to Weatherbit have exceeded daily amount, try again tomorrow.'/>
                </div>
            )
        }
        

    }

export default WeatherMain

