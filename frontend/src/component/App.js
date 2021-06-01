import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import NavBar from './Header'
import Home from '../Screens/Home'
import Footer from './Footer'
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



const App =() =>{
    return(
        <BrowserRouter>
            <div className='fullApp'>
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
                    <Route path='/geekgrade/user/:id' component={UpdateUser}/>
                    <Route path ='/geekgrade/productslist' component={ProductsList}/>
                    <Route path='/productedit/:id' component={ProductEdit}/>
                    <Route path='/cart/:id' component={Cart}/>
                    <Route path ='/product/:id' component={ProductPage}/>
                    <Route path='/geekgrade/placeorder/' component={OrderStepper}/>
                    <Route path='/order/:id' component={OrderScreen}/>
                    <Route path='/geekgrade/orderlist' component={OrderList}/>

                </div>


                <div className='footer'><Route component={Footer}/></div>
            </div>
        </BrowserRouter>
    )
}


export default App