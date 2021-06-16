import React from 'react'
import DrStrange from '../marvelPics/DrStrange.png'
import spinningRing from '../marvelPics/spinRing.png'
import './marvelCss.css'


const MarvelLoader = () => {
    return (
        <div className='drStrangeSpinn'>
            <img src={DrStrange} alt='DrStrange' style={{maxWidth:"600px",width:'33vw'}} />
       <img src={spinningRing} alt='spinningRing' className='spinningRing' /> 

        </div>

    )
}

export default MarvelLoader
