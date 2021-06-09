import React from 'react';
import {useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {Card} from '@material-ui/core'
import {IconsDisplay} from '../Components/IconsDisplay'
import WeatherLoader from '../Components/WeatherLoader'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',

  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    backgroundColor: 'rgba(255, 255, 255, 0.00)',
    width:'90vw',
    margin:'10px'
  },
  title: {
    color: theme.palette.primary.light,
  },
  listBar: {
    marginTop:'80px',
    minWidth:'85px'
  },
  card:{
    backgroundColor: 'rgba(355, 255,255, 0.1)',
    height:'100px',
    color:'white',
  },
  icon:{
      fontSize:'40px',
  },
  temp:{

      fontSize:'25px'
  },
  date:{
    marginTop:'2px'
  }

}));



const HourlyCard=()=> {

const weatherHourReducer = useSelector((state)=>state.weatherHourReducer)
const {hours} = weatherHourReducer



  const classes = useStyles();
  if(hours){
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          
          {hours.data.map((h) => (
            <div key={h.datetime}>
            { 
            <GridListTile key={h.datetime} className={classes.listBar}cols={0.22}rows={0.6} >         
              <Card className={classes.card} key={h.datetime}>
                    <div className={classes.date} >{h.timestamp_utc.slice(11,16)}</div>
                    <div className={classes.icon}>{IconsDisplay(h.weather.description)}</div>
                    <div className={classes.temp}>{h.temp}&#8451;</div>
                </Card>
            </GridListTile>}
            
            </div>
          ))}
    
        </GridList>
      </div>
    );
  }else{
    return(
      <div style={{backgroundColor:'black',height:'100vh',margin:'-20px'}}>
      <WeatherLoader text='Loading....'/>
      </div>

    )
  }
  
}






export default HourlyCard


