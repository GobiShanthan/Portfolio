import React from 'react'
import {useSelector} from 'react-redux'
import {Grid,makeStyles} from '@material-ui/core'
import MarvelComics from '../Components/MarvelComics'
import MarvelLoader from '../Components/MarvelLoader'
import './marvelCss.css'
import deadpool from '../marvelPics/deadpool.png'
import hulk from '../marvelPics/hulk.png'
import spiderman from '../marvelPics/spiderman.png'
import sue from '../marvelPics/sue.png'
import scarlet from '../marvelPics/scarlet.png'
import marvelVerticle from '../marvelPics/marvelVerticle.jpg'
import unlabeledMarvel from '../marvelPics/unlabeledMarvel.jpg'
import ironman from '../marvelPics/ironman.png'
import storm from '../marvelPics/storm.png'
import wolverine from '../marvelPics/wolverine.png'

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
        <div className={classes.root}><MarvelLoader/></div>
    )
}else{
    return (
    <div className='characters'>
        <div className='charText' style={{textAlign:'center',fontFamily:'Comic Sans MS'}}>
        <div className='spidermantext'>Spider-man</div>
        <div  className='deadpoolText'>Deadpool</div>
        <div className='sueText'>Sue Storm</div>
        <div  className='hulkText'>Hulk</div>
        <div style={{color:'white'}} className='scarletText'>Scarlet Witch</div>
        <div style={{color:'white'}} className='ironmanText'>Iron man</div>
        <div style={{color:'white'}} className='stormText'>Storm</div>
        <div style={{color:'white'}} className='wolverineText'>Wolverine</div>
        <div className='ending'>Search from over 1000 marvel characters</div>
        <div className='ending2'>Exact names only</div>
        </div>


        <div className='charImage' style={{display:'flex',justifyContent:'center',marginTop:"30px",marginRight:'350px'}}>
        <div className="spider-man"><img src={spiderman} alt='spidermanpic'/></div>
        <div className='deadpool'><img src={deadpool} alt='deadpool'/></div>
        <div className='sue'><img src={sue} alt='sueStorm'/></div>
        <div className='hulk'><img src={hulk} alt='hulk'/></div>
        <div className='scarlet'><img src={scarlet} alt='scarlet'/></div>
        <div className='ironman'><img src={ironman} alt='ironman'/></div>
        <div className='storm'><img src={storm} alt='storm'/></div>
        <div className='wolverine'><img src={wolverine} alt='wolverine'/></div>
        </div>



        <div className='marvelVerticle'><img src={marvelVerticle} alt='marvelVerticle'/></div>
        <div className='unlabeledMarvel'><img src={unlabeledMarvel} alt='unlabeledMarvel'/></div>
    </div>
    )
}
    
}

export default MarvelData
