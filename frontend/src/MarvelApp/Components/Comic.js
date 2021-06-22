import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {marvelComicGet} from '../../action/actions'
import {makeStyles,Grid} from '@material-ui/core'
import googlePic from '../marvelPics/googleplay.png'
import appstorePic from '../marvelPics/appstore.png'


const Comic = ({match}) => {
    const dispatch = useDispatch()
    const digitalId = match.params.id

    const useStyles = makeStyles({
        root:{
            color:'white',
            textAlign:'center',
            minHeight:'100vh'
        },
        image:{
            display:'block',
            marginTop:"5%",
            marginLeft:'auto',
            marginRight:'auto',
            width:'80%',
            maxWidth:'500px'
        },
        title:{
            textAlign:'center'
        },
        price:{
            fontSize:'30px',
            marginTop:'-20px'
        },
        role:{
            fontSize:'25px'
        },
        name:{
            fontSize:'15px'
        },
        creator:{
            marginTop:"5%"
        },
        app:{
            margin:"20px",
            border:'solid white 2px',
            paddingTop:'15px'
        },
        appLogo:{
            width:'30%',
            '&:hover': {
                width: "40%",
              }
        }
    })

    const classes = useStyles()

    const marvelComicReducer  = useSelector((state)=>state.marvelComicReducer)
    const {comicInfo} = marvelComicReducer
    
    useEffect(()=>{
        if(!comicInfo || comicInfo.data.results[0].id.toString() !== digitalId){
            dispatch(marvelComicGet(digitalId))
        }
    },[comicInfo,digitalId,dispatch])
   

    if(comicInfo){
        const comic = comicInfo.data.results[0]
    
        return (
            <div style={{backgroundColor:'black'}} className={classes.root}>
                <Grid container direction='row'>
                <Grid item xs={12} md={6}>
                    <img src={`${comic.images[0].path.slice(0,4)+'s'+comic.images[0].path.slice(4)}.${comic.images[0].extension}`} alt={comic.title} className={classes.image}/>

                </Grid>
                <Grid item xs={12} md={6} container direction='column'>
                    <h1 className={classes.title}>{comic.title}</h1>
                    <div className={classes.price}>{`Price: $${comic.prices[0].price}`}</div>
                    <Grid  container direction='row'  className={classes.creator}>
                    <Grid item xs={12} md={6}>
                            <div className={classes.role}>Writer</div>

                                {comic.creators.items.map(creator=>{
                                    if(creator.role ==='writer'){
                                        return(
                                            <div key={creator.name}>
                                                {creator.name}
                                            </div>
                                        )
                                    }else{
                                        return null
                                    }
                                })}
                        </Grid>

                        {comic.creators.items.map(creator=>{
                            if(creator.role ==='writer'){
                                return null
                            }else{
                                return(
                                    <Grid item xs={12} md={6} style={{paddingBottom:'50px'}}  key={creator.name}>
                                        <div className={classes.role}> {creator.role[0].toUpperCase()+creator.role.slice(1)}</div>
                                        <div className={classes.name}>{creator.name}</div>
                                    </Grid>
                                )
                            }
                        })}
                <Grid item xs={12}>
                    <div>
                        <div>
                            {comic.characters.available >0?
                            <div className={classes.role}>
                            Characters 
                            </div>
                            :null
                            }
                            
                            <div>{comic.characters.items.map((char)=>{
                                return(
                                    <div key={char.name} className={classes.name}>
                                        {char.name}
                                    </div>
                                )
                            })}</div>
                        </div>
                    </div>
                </Grid>
                <Grid  item xs={12} className={classes.app} >
                       <div style={{fontSize:'20px'}}>Download the Marvel Comics app today!</div>
                        <div style={{fontSize:'12px'}}>Read online on your iPhone, Ipad or Android Device</div>
                        <div style={{marginTop:'10px'}}><a href="http://play.google.com/store/apps/details?id=com.marvel.comics&hl=en_US"><img src={googlePic} className={classes.appLogo}  alt='googlePlayStore'/></a></div>
                        <div><a href="http://apps.apple.com/us/app/marvel-comics/id350027738"><img src={appstorePic} className={classes.appLogo} alt='appleAppStoreLink'/></a></div>
                        <div style={{fontSize:'8px',margin:"10px"}}>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android and Google Play are trademarks of Google, Inc.</div>
                </Grid>

                    </Grid>
                </Grid>    


                </Grid>

            </div>
        )
    }else{
        return(
            
            <div>
                loading...
            </div>
        )
    }

}

export default Comic
