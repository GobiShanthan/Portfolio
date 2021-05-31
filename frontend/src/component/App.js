import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import NavBar from './Header'
import Home from '../Screens/Home'
import Footer from './Footer'
import SearchScreen from '../SearchProject/screens/SearchScreen'
import GeekGrade from '../GeekGrade/GeekGrade'
import WeatherMain from '../WeatherProject/Screens/WeatherApp'
import WeatherDay from '../WeatherProject/Screens/WeatherDay'
import MarvelMain from '../MarvelApp/Screens/MarvelMain'
import Comic from '../MarvelApp/Components/Comic'
import '../index.css'


const App =() =>{
    return(
        <BrowserRouter>
            <div className='fullApp'>
                <div className='header'>
                    <Route component={NavBar}/>
                </div>
                <div className='main'>
                    <Route path='/' component={Home} exact/>
                    <Route path='/geekgrade' component={GeekGrade}/>
                    <Route path='/searchpage' component={SearchScreen}/>
                    <Route path='/weather' component={WeatherMain}/>
                    <Route path='/weatherday/:id' component={WeatherDay}/>
                    <Route path='/marvel' component={MarvelMain}/>
                    <Route path='/comic/:id' exact component={Comic}/>
                </div>
                <div className='footer'><Route component={Footer}/></div>
            </div>
        </BrowserRouter>
    )
}


export default App