import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Paper,TextField,Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Alert} from '@material-ui/lab'
import './component.css'
import {loginAction, regisAction} from '../../action/userAction'


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
      color:'#C0C0C0'
    },
  },
}));


const LogRegCard = () =>{

const dispatch = useDispatch()
const [logged,setLogged] = useState('login')

//LOGIN
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

//LOGIN ERROR
const loginReducer = useSelector((state)=>state.loginReducer)
const {loginError} = loginReducer

//REGISTER
const [regisFirst,setRegisFirst] = useState('')
const [regisLast,setRegisLast] = useState('')
const [regisEmail,setRegisEmail] = useState('')
const [regisPassword,setRegisPassword] = useState('')

//REGISTER ERROR
const regisReducer = useSelector((state)=>state.regisReducer)
const {regisError} = regisReducer



const classes = useStyles()


const loginSubmit =(e)=>{
    e.preventDefault()
    dispatch(loginAction(email,password))
}

const regisSubmit =(e)=>{
  e.preventDefault()
  dispatch(regisAction(regisFirst,regisLast,regisEmail,regisPassword))
  setLogged('login')
}

if(logged === "register"){
  return(
        <div className='register'>
  <Paper elevation={20} style={{width:'300px',backgroundColor:"#EBEBEB"}} align='center' >
        <AccountCircleIcon style={{fontSize:80,marginTop:'40px'}} color="secondary" />

    <form className={classes.root} Validate autoComplete="on" onSubmit={regisSubmit}>
      <div>
      <TextField
          type='text'
          required
          id="firstName"
          label="FirstName"
          value={regisFirst}
          onChange={(e)=>setRegisFirst(e.target.value)}
        />
      <TextField
          type='text'
          required
          id="lastName"
          label="LastName"
          value={regisLast}
          onChange={(e)=>setRegisLast(e.target.value)}
        />
        <TextField
          type='email'
          required        
          id="regisEmail"
          label="Email"
          value={regisEmail}
          onChange={(e)=>setRegisEmail(e.target.value)}
        />
        <TextField
          type='password'
          required    
          id="regisPassword"
          label="Password"
          value={regisPassword}
          onChange={(e)=>setRegisPassword(e.target.value)}
        />
    {regisError?<Alert severity="error" variant='outline' style={{width:'90%',color:'red'}}>{regisError}</Alert>:null }
      <h5 onClick={()=>setLogged('login')} className='loginClick' style={{fontWeight:'bold',width:'80px'}}>Back to Login</h5>             
      </div>
      <Button variant="contained" color="secondary" style={{marginTop:"5px"}} type='submit'>Register</Button>
    </form>
  </Paper>
        </div>
  )
}else{
  return(
    <div className='login'>
    <Paper elevation={20} style={{width:'300px',backgroundColor:"#EBEBEB"}} align='center' >
    <AccountCircleIcon style={{fontSize:100,marginTop:'40px'}} color="secondary" />

<form className={classes.root} autoComplete="on" Validate onSubmit={loginSubmit}>
  <div>
    <TextField
      type='email'
      required
      id="email"
      label="Email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
    />
    <TextField
      type='password'
      required
      id="password"
      label="Password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
    
    />
    {loginError?<Alert severity="error" variant='outline' style={{width:'70%',color:'red'}}>{loginError}</Alert>:null }   

  </div>
  <div >
    <h5>Not Registered? <div onClick={(e)=>setLogged('register')}  className='signup' style={{width:'80px'}}>Signup Here</div></h5>
  </div>
  <Button variant="contained" color="secondary" style={{marginTop:'25px'}} type='submit'>Login</Button>
</form>
        </Paper>
    </div>
)
}
}
export default LogRegCard



