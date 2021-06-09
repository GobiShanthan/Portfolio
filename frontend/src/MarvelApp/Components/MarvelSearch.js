import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {Input,Button,makeStyles,Grid} from '@material-ui/core'
import {marvelGet} from '../../action/actions'
import {marvelCharGet} from '../../action/actions'

const MarvelSearch = () => {
const dispatch = useDispatch()
const [search,setSearch] = useState('')

const marvelSubmitHandler=(e)=>{
    e.preventDefault()
    dispatch(marvelGet(search))
    dispatch(marvelCharGet(search))
}


        const useStyles = makeStyles({
            root:{
                width:'100%',
            },
            searchBox:{
                display:'block',
                margin:'-5% auto 5% auto',
                minWidth:'200px',
                width:'20vw',
                background:'white',
                borderRadius:'25px',
            },
            button:{
                display:'block',
                marginLeft:'auto',
                marginRight:'auto',
                marginTop:'-2%',
                color:'white',
                border:'1px solid red',

            },
            title:{
                display:'block',
                marginTop:'3%',
                marginLeft:'auto',
                marginRight:'auto',
                color:'red',
                padding:'20px',
                fontSize: 'min(max(40px, 4vw), 22px)',
                maxWidth:'550px',
                textAlign:'center',
                fontFamily:'Comic Sans MS'
            }
        })
        const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container direction='column' alignContent='center'>
            <form onSubmit={marvelSubmitHandler}>
                <Grid item container direction='row'>
                    <Grid item xs={12} ><h2 className={classes.title}>Character Search</h2></Grid>
                <Grid item xs={12}>
                    <Input value={search} onChange={(e)=>setSearch(e.target.value)} disableUnderline className={classes.searchBox}/>
                </Grid>
                <Grid item xs={12} >
                    <Button variant="outlined"   className={classes.button} type='submit'>Search</Button>

                </Grid>
                </Grid>
            </form>
            </Grid>
       
        </div>
    )
}

export default MarvelSearch
