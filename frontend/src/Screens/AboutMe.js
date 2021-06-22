import React,{useEffect} from 'react'
import GobiPic from '../Pics/GobiPic.jpg'
import './gobiCss.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {aboutMeDescription} from '../projectInfo/portfolioCardDescriptions'


const AboutMe = () => {
    useEffect(()=>{
        Aos.init({duration:800})
    },[])

    return (
        <div id='about' className='aboutMeMain'>
            <div  className="aboutTitle">About Me</div>
            <div className='aboutMeSec'>
            <div  className='aboutMeDescription'>
                {aboutMeDescription}
            </div>
            <div className='gobiPic'>
                <img src={GobiPic} alt="Gobi" className='aboutMePic' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-out" data-aos-duration="16000"/>
            </div>
            </div>
            
        </div>
    )
}

export default AboutMe
