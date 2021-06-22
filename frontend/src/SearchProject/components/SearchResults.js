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
            <h4 style={{color:'white'}}> Try submitting your own search request</h4>
        )
    }
}


export default SearchResult