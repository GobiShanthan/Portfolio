import '../index.css'
import PortFolioCard from '../component/PortfolioCard'
import gsearch from '../SearchProject/searchPics/gSearch.png'
import {searchProjectInfo} from '../projectInfo/portfolioCardDescriptions'
import WeatherMain from '../Pics/WeatherMain.png'
import GeekgradePic from '../Pics/GeekGradePortfolioPic.png'
import MarvelPic from "../Pics/MarvelPic.png"



const PortfolioProjects =() =>{
    return(
        <div id='portfolio'>
            <div className='projectTitle'><h1>Projects</h1></div>
            <div className='pCards'>
                <PortFolioCard Title='Gobi Search App' Content='React redux app with api calls to multiple sources' image={gsearch} link={`/searchpage`} projectInfo={searchProjectInfo}/>
                <PortFolioCard Title='Marvel App' Content='React redux app with api calls to Marvel Api ' link={`/marvel`} image={MarvelPic}/>
                <PortFolioCard Title='Weather App' Content={'React redux weather api app'} link={`/weather`} image={WeatherMain}/>
                <PortFolioCard Title='GeekGrade Computers' Content={'Full Mern Stack ecommerce aplication'} link={`/geekgrade`} image={GeekgradePic}/> 
            </div>
        </div>
    )
}

export default PortfolioProjects