import React from 'react'
import MarvelSearch from '../Components/MarvelSearch'
import MarvelData from '../Components/MarvelData'


const MarvelMain = () => {
        return (
            <div style={{backgroundColor:'black',height:'100%',minHeight:'100vh'}}>
              <MarvelSearch/>
              <MarvelData/>
            </div>
        )
    
    
}

export default MarvelMain
