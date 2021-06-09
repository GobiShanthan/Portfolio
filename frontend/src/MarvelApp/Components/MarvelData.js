import React from 'react'
import {useSelector} from 'react-redux'
import {Grid,makeStyles} from '@material-ui/core'
import MarvelComics from '../Components/MarvelComics'
import MarvelLoader from '../Components/MarvelLoader'
import Intro from '../marvelPics/Intro.mp4'




const MarvelData = () => {



const useStyles = makeStyles({
    root:{
        color:'white',
        marginLeft:'5%',
        marginRight:'5%',
        fontFamily:'Comic Sans MS',
        minHeight:'100vh',
        textAlign:'center'
    },
    charName:{
        fontSize:'50px',
        color:'white'
    },
    charImg:{
        display:'block',
        marginLeft:'auto',
        marginRight:'auto',
        width:'60vw',
        height:'60vh'
    },
    description:{
        margin:'5%'
    },
    marvelComic:{
    },
    intro:{
        display:'flex',
        justifyContent:'center',
        marginTop:'10px',
        minWidth:'320px'
    }   
})

//MARVEL CHARACTER STATE
const marvelCharReducer = useSelector((state)=>state.marvelCharReducer)
const {marvelCharInfo} = marvelCharReducer

//MARVEL COMIC STATE
const marvelReducer = useSelector((state)=>state.marvelReducer)
const {marvelInfo,loading} = marvelReducer

const classes = useStyles()



if(marvelCharInfo && marvelInfo){
    const marvelData = marvelCharInfo.data.results[0]
    if(marvelData){
        return (
            <div className={classes.root} >
                    <Grid container direction='column' alignContent="center" >
                        <h1 className={classes.charName}>{marvelData.name}</h1>

                    <Grid item xs={12}>
                        <img className={classes.charImg} src={marvelData.thumbnail.path +'.'+ marvelData.thumbnail.extension} alt=''/>
                    </Grid>
                    <Grid item xs={12}>
                        <p className={classes.description}>{marvelData.description}</p>
                    </Grid>
                    <Grid item xs={12} > 
                    <MarvelComics />

                </Grid>
                </Grid>
            </div>
        )
    }else{
        return(
            <div className={classes.root}>
            <h3>Invalid search name. Search Name must be exact </h3>
            <MarvelLoader/>
            </div>

        )
    }
   
}else if(loading === true){
    return(
        <div style={{color:'white'}}>loading......</div>
    )
}else{
    return (
        <div className={classes.intro}>

        <video  width="90%" height="20%"  autoPlay controls muted >
        <source src={Intro} type="video/mp4" />
        </video>

    </div>
    )
}
    
}

export default MarvelData
