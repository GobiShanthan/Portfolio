import React from 'react'
import sunLogo from '../WeatherPics/sunLogo.png'
import './CSS/main.css'



const WeatherLoader = ({text}) => {
    return (
        <div style={{marginLeft:'5vw',marginRight:'5vw'}}>
            <div style={{display:'flex',justifyContent:'center'}}>
            <img className="sunLogo" src={sunLogo} alt='sunLogo' style={{width:'200px',marginTop:'30vh'}}/>
            </div>
            <div>
                <h1 style={{color:'white',textAlign:'center'}}>{text}</h1>
            </div>

        </div>

    )
}

export default WeatherLoader
