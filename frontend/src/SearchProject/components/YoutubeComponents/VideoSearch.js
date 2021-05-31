import React,{useState,useEffect} from 'react'
import YoutubeList from '../YoutubeComponents/YoutubeList'
import YoutubeVideo from '../YoutubeComponents/YoutubeVideo'
import {useSelector} from 'react-redux'
import {Grid} from '@material-ui/core'


const VideoSearch =()=>{

    const [data,setData] = useState([])
    //full youtube list
    const youtubeReducer = useSelector((state)=>state.youtubeReducer)
    const {youtubeData} = youtubeReducer

    useEffect(()=>{
        if(youtubeData)setData(youtubeData.items)
    },[youtubeData])




    return(
        <div style={{paddingTop:'5vh'}}>
            <Grid container  justifycontent='center'>
                <Grid item={true} xs={12} md={6}><YoutubeVideo/></Grid>                
                <Grid item={true} xs={12} md={6} justifycontent='center'><YoutubeList data={data}  bgColor='white' /></Grid>  
            </Grid>
        </div>
    )
}

export default VideoSearch