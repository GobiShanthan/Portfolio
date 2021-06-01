import React, {useState, useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import './screens.css'
import UsersTable from '../Component/UsersTable'
import {getAllUsersAction} from '../../action/userAction'
import {DELETE_USER_RESET} from '../../constant/userConstant'

const UsersList =({history}) =>{
const [usersList,setUsersList] = useState([])
const dispatch = useDispatch()

//LOGIN  DATA
const loginReducer = useSelector((state)=>state.loginReducer)
const {userLogin} = loginReducer

//GET USERS LIST DATA
const getAllUsersReducer = useSelector((state)=>state.getAllUsersReducer)
const {usersListData} = getAllUsersReducer

//DELETE USER
const deleteUserReducer = useSelector((state)=>state.deleteUserReducer)
const {deleteInfo} = deleteUserReducer



useEffect(()=>{

    if(!userLogin){
        history.push('/geekgrade/authuser')
    }
    if(userLogin  && !userLogin.isAdmin){
        history.push('/geekgrade')
    }
    if(userLogin && userLogin.isAdmin && !usersListData){
        dispatch(getAllUsersAction())
    }
    if(userLogin && userLogin.isAdmin && deleteInfo){
        dispatch({type:DELETE_USER_RESET})
        dispatch(getAllUsersAction())
    }
    if(usersListData){
        setUsersList(usersListData)
    }
},[userLogin,usersListData,dispatch,history,deleteInfo])

    return(
        <div className='userslist'>
            <div className='table'>
            <UsersTable usersList={usersList}/>
            </div>
        </div>
    )
}

export default UsersList