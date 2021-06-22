import React from 'react';
import {useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Grid} from '@material-ui/core'
import {removeFromYoutubePlaylist, youTubeChoice} from '../../../action/actions'
import {Button} from '@material-ui/core'
import {addToYoutubePlaylist} from '../../../action/actions'
import  LoadingSearch from '../../components/GobiSearchLoading'
const useStyles = makeStyles((theme) => ({
  root: {
    width:'80%',
    borderRadius:'25px',
    minWidth:'220px',
    marginLeft:'10%',
    marginRight:'10%',
    marginBottom:'10px'

  },
  Button:{
  float:'right'
  }
}));



const YoutubeList =({data,bgColor})=> {
const dispatch = useDispatch()
const classes = useStyles();



if(data){
  const listData = data.map((list,index)=>(

      <List className={classes.root}  key={index} style={{backgroundColor:bgColor,color:bgColor === 'white'?'black':'white'}} >
        <Grid container direction ='row'>
        <ListItem key={list.id.videoId} >
          <Grid item xs={2} style={{margin:'10px'}} onClick={(e)=>dispatch(youTubeChoice(list))}><img src={list.snippet.thumbnails.default.url} alt={list.snippet.title}  width='60px'/></Grid>
          <Grid item xs={9}  onClick={(e)=>dispatch(youTubeChoice(list))}><ListItemText primary={list.snippet.title} style={{margin:'10px'}}/></Grid>

          <Button  style={{background: bgColor==='white'?'#0f181b':'red',color:'white', borderRadius:'10px'}} onClick={bgColor ==='white'?()=>dispatch(addToYoutubePlaylist(list)):()=>dispatch(removeFromYoutubePlaylist(list))}>{bgColor==='white'?'Queue':'Remove'}</Button>       
        </ListItem>
        </Grid>
      </List>

  ))
      return(
        <div>
          {listData}
        </div>
      )
    }else{
      return(
        <div>
          <LoadingSearch/>
        </div>
      )
    }
  
}

export default YoutubeList







