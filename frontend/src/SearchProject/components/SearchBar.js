import '../search.css'
import {Button} from '@material-ui/core'
import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {getSearch,wikiGet,getYoutube,getImage} from '../../action/actions'


const SearchBar =()=>{
    const dispatch = useDispatch()
    const [search,setSearch] = useState('developer')

const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(getSearch(search))
    dispatch(wikiGet())
    dispatch(getYoutube())
    dispatch(getImage())
    setSearch('')

}

    return(
            <form className='searchbarfull' onSubmit={submitHandler} >
                <div  style={{color:'white'}}>
                    <div className="gsearch">
                        <label>Gobi Search</label>
                    </div>
                    <div >
                        <input 
                            className='input' 
                            type='text'
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                            />
                    </div>
                    <Button 
                        color='primary' 
                        variant='contained'
                        type='submit'
                        >Submit</Button>
                </div>
            </form>

    )
}

export default SearchBar