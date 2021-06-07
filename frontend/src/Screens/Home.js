import React from 'react'
import PortfolioMain from './PortfolioMain'
import PortfolioProjects from './PortfolioProjects'
import '../index.css'

const Home =()=>{
    return(
        <div className='home'>
            <div className='pMain'><PortfolioMain/></div>
            <div className='pProjects'><PortfolioProjects/></div>
        </div>
    )
}

export default Home