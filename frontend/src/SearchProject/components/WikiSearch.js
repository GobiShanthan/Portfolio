import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import ListCard from '../../SearchProject/components/ListCard'
import '../search.css'


const WikiSearch =() =>{
const [wikiList,setWikiList] = useState([])
const wikiReducer = useSelector((state)=>state.wikiReducer)
const {wikiData} = wikiReducer

useEffect(()=>{
    if(wikiData){
        setWikiList(wikiData.query.search)
    }
},[wikiData])


return(
    <div  className='listCard' >
            <ListCard wikiList={wikiList}/>
    </div>
)
}
export default WikiSearch