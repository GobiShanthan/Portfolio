import './screenCss/home.css'
import PortFolioCard from '../component/PortfolioCard'
import gsearch from '../SearchProject/searchPics/gSearch.png'
import {searchProjectInfo} from '../projectInfo/searchProjectInfo'
import WeatherMain from '../Pics/WeatherMain.png'

const PortfolioProjects =() =>{
    return(
        <div>
            <div className='projectTitle'><h1>Projects</h1></div>
            <div className='pCards'>
                <PortFolioCard Title='Gobi Search App' Content='React redux app with api calls to multiple sources' image={gsearch} link={`/searchpage`} projectInfo={searchProjectInfo}/>
                <PortFolioCard Title='Marvel App' Content='React redux app with api calls to Marvel Api ' link={`/marvel`}/>
                <PortFolioCard Title='Weather App' Content={'React redux weather api app'} link={`/weather`} image={WeatherMain}/>
                {/*<PortFolioCard Title='Fun Animations page' Content={'Having fun with effects'} link={`/funpage`}/>   */}         
            </div>
        </div>
    )
}

export default PortfolioProjects