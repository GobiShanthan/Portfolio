import React from 'react';
import {useSelector} from 'react-redux'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import dayTime from '../WeatherPics/daytime.jpeg'
import nightTime from '../WeatherPics/nighttime.jpg'
import AppBar from '@material-ui/core/AppBar'
import { Card } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import {IconsDisplay} from '../Components/IconsDisplay'
import {FaCloud, FaCloudRain, FaSun, FaTemperatureHigh,FaTemperatureLow,FaWind,FaArrowLeft} from 'react-icons/fa'
import {WiHumidity} from 'react-icons/wi'
import {Link} from 'react-router-dom'
import WeatherLoader from '../Components/WeatherLoader'



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width:'100vw',
    height:'100%'
  },
  card:{
    backgroundColor: 'rgba(355, 255,255, 0.1)',
    width:'100%',
    maxWidth:'500px',
    minWidth:'300px',
    minHeight:'100%',
    color:'white',
    textAlign:'center',
  },
  iconWeather:{
    marginTop:'-30px',
    fontSize:'min(max(16px, 100vw), 140px);',
  },
  text:{
    textAlign:'left',
  },
  dataText:{
    textAlign:'right',
    paddingRight:'20px'
  },
  divider:{
    backgroundColor:'white',
    margin:'15px'
  },
  temp:{
    fontSize:'40px',
    marginTop:"10px"
  },
  description:{
    marginTop:'-58px',
    paddingBottm:'50px'
  },
  list:{
    marginTop:'50px'
  }
}));


const WeatherDay=({match})=> {
const idDate = match.params.id

  const classes = useStyles();
  const [value, setValue] = React.useState(idDate);
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const weatherReducer= useSelector((state)=>state.weatherReducer)
  const {weatherInfo} = weatherReducer


  const hours = new Date().getHours()

 const ListItem =({icon,text,data,symbol,deg})=>{
   if(weatherInfo){
    return(
      <Grid container direction='row' className={classes.list} >
      <Grid item xs={2} >{icon}</Grid>
      <Grid item xs={5} className={classes.text}>{text}</Grid>
      <Grid item xs={5} className={classes.dataText}> {data}<sup>{symbol}</sup>{deg}</Grid>
      </Grid>
        )
   }else{
     return (
     <div>
       <WeatherLoader text='Loading....'/>
      </div>)
   }

  }


  if(weatherInfo){
    return (
        <div className={classes.root} >
           <AppBar position="fixed" style={{color:'white',backgroundColor: 'rgba(355, 255,255, 0.1)'}}>
            <Tabs
            value={1}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="inherit"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >     
            {weatherInfo.data.map((w)=>(
          <Tab
            label={w.datetime}
            {...a11yProps(w.datetime)}
            key={w.datetime}
            aria-controls={w.datetime}
            onClick={(e)=>setValue(w.datetime)}/>))}
                 </Tabs>
            </AppBar>
                 
        {weatherInfo.data.map((w)=>(
            <TabPanel key={w.datetime} value={value} index={w.datetime}style={{backgroundImage:`url(${hours > 6 && hours < 20?dayTime:nightTime})`,height:'100%',minHeight:'100vh',backgroundSize:'100% 99.99%', backgroundAttachment: 'fixed'}}>
                <Link to='/weather'>
                  <h4 style={{color:'white',marginTop:'40px'}}><FaArrowLeft style={{marginRight:'20px'}}/>Weather Page</h4>
                </Link>
                <Grid style={{color:'white'}} container direction='column' alignContent='center'>
                <Card className={classes.card}  >
                <Grid container direction='column' alignContent='center' style={{marginTop:'20px'}}>
                {w.datetime}
                <Grid item className={classes.temp}>{w.temp}&#8451;</Grid>
                <Grid item className={classes.iconWeather}>{IconsDisplay(w.weather.description)}</Grid>
                <Grid item className={classes.description}>{w.weather.description}</Grid>
                </Grid>

                <div className={classes.list}>
                <ListItem text='Feels Like(Min)' icon={FaTemperatureLow()} data={`${w.app_min_temp}`} symbol={'o'} deg={'C'}/>
                <Divider className={classes.divider}/>
                <ListItem text='Feels Like(Max)' icon={FaTemperatureHigh()} data={`${w.app_max_temp}`}symbol={'o'} deg={'C'}/>
                <Divider className={classes.divider}/>
                <ListItem text='Wind Gust Speed' icon={FaWind()}data={`${Number(w.wind_gust_spd.toString().slice(0,1))*3.6}km/h ${w.wind_cdir}`}/>
                <Divider className={classes.divider}/>
                <ListItem text='Chance Of Rain' icon={FaCloudRain()} data={`${w.pop}%`}/>
                <Divider className={classes.divider}/>
                <ListItem text='UV Index'  icon={FaSun()}data={w.uv.toString().slice(0,3)}/>
                <Divider className={classes.divider}/>
                <ListItem text='Humidity' icon={WiHumidity()} data={`${w.rh}%`}/>
                <Divider className={classes.divider}/>
                <ListItem text='Cloud Coverage' icon={FaCloud()} data={`${w.clouds}%`}/>
                <Divider className={classes.divider}/>
                </div>

              </Card>

                </Grid>
          </TabPanel>
    ))}
          
    </div>
      );
  }else{
      return (
        <div style={{backgroundColor:'black',height:'100vh',margin:'-20px'}}>
          <WeatherLoader text='Loading.....'/>
        </div>

      )
  }

}

export default WeatherDay