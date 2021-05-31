import WikiSearch from '../components/WikiSearch'
import VideoSearch from '../components/YoutubeComponents/VideoSearch'
import ImageSearch from '../components/ImageSearch'


const SearchResult =({resultScreen}) =>{
    if(resultScreen ==='image')
    return(
        <div>
            <ImageSearch/>
        </div>
    )
    if(resultScreen === 'youtube')
    return(
        <div>
            <VideoSearch/>
        </div>
    )
    if(resultScreen === 'wiki')
    return(
        <div>
            <WikiSearch/>
        </div>
    )
    else{
        return(
            <h5 style={{color:'white'}}>Try the search</h5>
        )
    }
}


export default SearchResult