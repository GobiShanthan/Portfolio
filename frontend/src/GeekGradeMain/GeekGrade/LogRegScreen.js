import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import '../Component/LogRegCard'
import LogRegCard from '../Component/LogRegCard'

const LogRegScreen  = ({history}) =>{
    const loginReducer = useSelector((state)=>state.loginReducer)
    const {userLogin} = loginReducer
    
    const regisReducer = useSelector((state)=>state.regisReducer)
    const {userRegis} = regisReducer
    

    useEffect(()=>{
        if(userLogin){
            history.push('/geekgrade')
        }
        if(userRegis){
            history.push('/')
        }
    },[userLogin,userRegis,history])

    return(
        <div style={{height:'100vh',backgroundColor:'#3A6EA5',color:'#3A6EA5'}}>
            <LogRegCard/>
        </div>
    )
}

export default LogRegScreen