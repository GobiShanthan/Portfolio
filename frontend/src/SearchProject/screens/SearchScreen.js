import SearchBar from '../components/SearchBar'
import BreadCrumbsNav from '../components/BreadCrumbNav'
import '../search.css'

const SearchScreen =() =>{
    return(
        <div className='searchfull'>
                <SearchBar/>
                <BreadCrumbsNav/>
        </div>
    )
}

export default SearchScreen