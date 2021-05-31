import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core'
import YoutubeList from '../YoutubeComponents/YoutubeList'

const useStyles = makeStyles((theme) => ({
  root: {
    width:'92%',
    height:"40vh"
  },
  paper:{
    display:'flex',
    justifyContent:'center',
    color:'black',
    paddingBottom:'20px',
    margin:'10px',
    borderRadius:'25px'
  }
}));

export default function MediaControlCard() {
  const [myList,setMyList] = useState()
  const classes = useStyles();
  const youTubeChoiceReducer = useSelector((state)=>state.youTubeChoiceReducer)
  const {videoChoice} = youTubeChoiceReducer

    //My Youtube playlist 
    const youtubePlaylistReducer = useSelector((state)=>state.youtubePlaylistReducer)

    const youtubeReducer = useSelector((state)=>state.youtubeReducer)
    const {youtubeData} = youtubeReducer

   useEffect(()=>{
     if(youtubePlaylistReducer){
       setMyList(youtubePlaylistReducer)
     }
   },[youtubePlaylistReducer])


  if(videoChoice){
    return (
      <div >
      <iframe
      key={videoChoice.id.videoId}
      title={videoChoice.snippet.title}
      className={classes.root}
      src={`//www.youtube.com/embed/${videoChoice.id.videoId}?rel=0&autoplay=1`}
      allowFullScreen="allowFullScreen"
      mozallowfullscreen="mozallowfullscreen" 
      msallowfullscreen="msallowfullscreen" 
      oallowfullscreen="oallowfullscreen" 
      webkitallowfullscreen="webkitallowfullscreen"> </iframe>
      <Paper className={classes.paper} >
        <div><h3>{videoChoice.snippet.title}</h3>
      <h5>{videoChoice.snippet.description}</h5>
      </div>
      </Paper>
      <YoutubeList data={myList} bgColor='#264653' />
      </div>
);
  }else{
    if(youtubeData){
      const defaultYoutube = youtubeData.items[0]
      return(
        <div >
        <iframe
        key={defaultYoutube.id.videoId}
        title={defaultYoutube.snippet.title}
        className={classes.root}
        src={`//www.youtube.com/embed/${defaultYoutube.id.videoId}?rel=0&autoplay=1`}
        allowFullScreen="allowFullScreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"> </iframe>
        <Paper className={classes.paper} >
          <div><h3>{defaultYoutube.snippet.title}</h3>
        <h5>{defaultYoutube.snippet.description}</h5>
        </div>
        </Paper>
        <YoutubeList data={myList} bgColor='#264653' />
        </div>
      )
    }else{
      return null
    }
    
  }


}


