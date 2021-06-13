import React from 'react'
import PortfolioMain from './PortfolioMain'
import PortfolioProjects from './PortfolioProjects'
import AboutMe from '../Screens/AboutMe'
import ContactMe from '../Screens/ContactMe'
import '../index.css'



const Home =()=>{
    return(
        <div className='home'>

            <div className='pMain'><PortfolioMain/></div>
            <div className='pProjects'><PortfolioProjects/></div>
            <div className='aboutMe'><AboutMe/></div>
            <div className='contactMe'><ContactMe/></div>

        </div>
    )
}

export default Home