import React from 'react'
import {useSelector} from 'react-redux'
import {makeStyles,Grid} from '@material-ui/core'
import {Link} from 'react-router-dom'


const MarvelComics = () => {
    const marvelReducer = useSelector((state)=>state.marvelReducer)
    const {marvelInfo} = marvelReducer
    const useStyles =makeStyles({
        image:{
            position: 'relative',
            top:'0',
            width:'100%',
            maxWidth:'275px',
            cursor:'pointer',
            '&:hover': {
                postion: "relative",
                top:'-10px',
             },
        },
        comicList:{
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center'
        },
        comic:{
            minWidth:'355px',
            margin:'1px'
        }

    })
    const classes = useStyles()


    if(marvelInfo){
        const comicsInfo = marvelInfo.data.results
        return (
            <div >
                <Grid container direction='column'>
                <h1>Comics</h1>
                </Grid>
                <div className={classes.comicList}>
                {comicsInfo.map((comic)=>(
                    <div key={comic.id} elevation={22} className={classes.comic}>
                        <h5 style={{color:'white'}}>{comic.title}</h5>
    
                        <Link to={`/comic/${comic.id}`} >
                        <img className={classes.image} src={`${comic.thumbnail.path.slice(0,4)+'s'+comic.thumbnail.path.slice(4)}.jpg`} alt='comic.thumbnail.path' />
                        </Link>   

                      
                    </div>
                ))}
                </div>
            </div>
        )
    }else return null
   
}

export default MarvelComics
