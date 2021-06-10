import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'

//Main
import NavBar from './Header'
import Home from '../Screens/Home'
import Footer from './Footer'
import AboutMe from '../Screens/AboutMe'
import ContactMe from '../Screens/ContactMe'


//Projects
import SearchScreen from '../SearchProject/screens/SearchScreen'
import WeatherMain from '../WeatherProject/Screens/WeatherApp'
import WeatherDay from '../WeatherProject/Screens/WeatherDay'
import MarvelMain from '../MarvelApp/Screens/MarvelMain'
import Comic from '../MarvelApp/Components/Comic'

//GeekGrade Computer
import GeekGradeMain from '../GeekGradeMain/GeekGrade/GeekGradeMain'
import LogRegScreen from '../GeekGradeMain/GeekGrade/LogRegScreen'
import ProfilePage from '../GeekGradeMain/GeekGrade/ProfilePage'
import UsersList from '../GeekGradeMain/GeekGrade/UsersList'
import UpdateUser from '../GeekGradeMain/GeekGrade/UpdateUserPage'
import ProductsList from '../GeekGradeMain/GeekGrade/ProductsList'
import ProductEdit from '../GeekGradeMain/GeekGrade/ProductEdit'
import ProductPage from '../GeekGradeMain/GeekGrade/ProductPage'
import Cart from '../GeekGradeMain/GeekGrade/Cart'
import OrderStepper from '../GeekGradeMain/Component/OrderStepper'
import OrderScreen from '../GeekGradeMain/GeekGrade/Order'
import OrderList from '../GeekGradeMain/GeekGrade/OrderList'
import '../index.css'
import ScrollToTop from './ScrollToTop'



const App =() =>{
    return(
        <BrowserRouter>
            <div className='fullApp'>
                <ScrollToTop/>
                <div className='header'>
                    <Route component={NavBar}/>
                </div>
                <div className='main'>
                    <Route path='/' component={Home} exact/>
                    <Route path='/searchpage' component={SearchScreen}/>
                    <Route path='/weather' component={WeatherMain}/>
                    <Route path='/weatherday/:id' component={WeatherDay}/>
                    <Route path='/marvel' component={MarvelMain}/>
                    <Route path='/comic/:id' exact component={Comic}/>
                    <Route path='/geekgrade' exact component={GeekGradeMain}/>
                    <Route path ='/geekgrade/authuser' component={LogRegScreen}/>
                    <Route path='/geekgrade/profile' component={ProfilePage}/>
                    <Route path='/geekgrade/userslist' component={UsersList}/>
                    <Route path='/geekgrade/user/:id' exact component={UpdateUser}/>
                    <Route path ='/geekgrade/productslist' component={ProductsList}/>
                    <Route path='/geekgrade/productedit/:id' exact component={ProductEdit}/>
                    <Route path='/geekgrade/cart/:id' exact component={Cart}/>
                    <Route path ='/geekgrade/product/:id' exact component={ProductPage}/>
                    <Route path='/geekgrade/placeorder/' component={OrderStepper}/>
                    <Route path='/geekgrade/order/:id' exact component={OrderScreen}/>
                    <Route path='/geekgrade/orderlist' component={OrderList}/>
                </div>
                <Route component={Footer}/>
            </div>
        </BrowserRouter>
    )
}


export default App