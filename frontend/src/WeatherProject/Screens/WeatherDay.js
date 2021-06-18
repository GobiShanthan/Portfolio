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
    marginTop:'-10px',
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
    marginTop:'-48px',
    paddingBottm:'50px'
  },
  list:{
    marginTop:'50px'
  }
}));


const WeatherDay=({match})=> {
const idDate = match.params.id

  const classes = useStyles();
  const [value, setValue] = React.useState(Number(idDate));
  
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const weatherHourReducer = useSelector((state)=>state.weatherHourReducer)
  const {hours} = weatherHourReducer
  



  //date time now
  const hoursNow = new Date().getHours()

 const ListItem =({icon,text,data,symbol,deg})=>{
   if(hours){
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


  if(hours){
    return (
        <div className={classes.root} >
           <AppBar position="fixed" style={{color:'white',backgroundColor: 'rgba(355, 255,255, 0.1)'}}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="inherit"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >     
            {hours.daily.map((w,index)=>(
              
          <Tab
            label={new Date(w.dt*1000).toString().slice(0,10)}
            {...a11yProps(index)}
            key={index}
            aria-controls={(index)}
            onClick={(e)=>setValue(index)}/>))}

                 </Tabs>
            </AppBar>
                 
        {hours.daily.map((w,index)=>(
              
            <TabPanel key={(w.dt)} value={value} index={index}style={{backgroundImage:`url(${hoursNow > 6 && hoursNow < 20?dayTime:nightTime})`,height:'100%',minHeight:'100vh',backgroundSize:'100% 99.99%', backgroundAttachment: 'fixed'}}>
                <Link to='/weather'>
                  <h4 style={{color:'white',marginTop:'40px'}}><FaArrowLeft style={{marginRight:'20px'}}/>Weather Page</h4>

                </Link>
                <Grid style={{color:'white'}} container direction='column' alignContent='center'>
                <Card className={classes.card}  >
                <Grid container direction='column' alignContent='center' style={{marginTop:'20px'}}>
                {new Date(w.dt*1000).toString().slice(0,10)}
                <Grid item className={classes.temp}>{w.temp.day.toString().slice(0,2)}&#8451;</Grid>
                <Grid item className={classes.iconWeather}><IconsDisplay icons={w.weather[0].description}/></Grid>
                <Grid item className={classes.description}>{w.weather[0].description}</Grid>
                </Grid>

                <div className={classes.list}>
                <ListItem text='Feels Like(Min)' icon={FaTemperatureLow()} data={`${w.temp.min}`} symbol={'o'} deg={'C'}/>
                <Divider className={classes.divider}/>
                <ListItem text='Feels Like(Max)' icon={FaTemperatureHigh()} data={`${w.temp.max}`}symbol={'o'} deg={'C'}/>
                <Divider className={classes.divider}/>
                <ListItem text='Wind Gust Speed' icon={FaWind()}data={`${Number(w.wind_gust.toString().slice(0,1))*3.6}km/h ${w.wind_deg}`}/>
                <Divider className={classes.divider}/>
                <ListItem text='Chance Of Rain' icon={FaCloudRain()} data={`${w.pop}%`}/>
                <Divider className={classes.divider}/>
                <ListItem text='UV Index'  icon={FaSun()}data={w.uvi.toString().slice(0,3)}/>
                <Divider className={classes.divider}/>
                <ListItem text='Humidity' icon={WiHumidity()} data={`${w.humidity}%`}/>
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