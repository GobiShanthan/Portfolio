import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {marvelComicGet} from '../../action/actions'
import {makeStyles,Grid} from '@material-ui/core'



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
                    <img src={`${comic.images[0].path}.${comic.images[0].extension}`} alt={comic.title} className={classes.image}/>
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
