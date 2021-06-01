import React, {useState, useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {Paper,TextField,Button} from '@material-ui/core'
import './screens.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {getProfileAction,updateProfileAction} from '../../action/userAction'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '70%',
        color:'#C0C0C0',
      },
    },
  }));


const ProfilePage = ({history}) =>{

  const dispatch = useDispatch()
  
  //GET LOGIN INFO 
  const loginReducer = useSelector((state)=>state.loginReducer)
  const {userLogin} = loginReducer

  //GET PROFILE INFO
  const getProfileReducer = useSelector((state)=>state.getProfileReducer)
  const {userProfile} = getProfileReducer


  const classes = useStyles()
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState(``)
  const [email,setEmail] = useState(``)
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [image,setImage] = useState('')
  

  useEffect(()=>{
    if(!userLogin){
      history.push('/geekgrade')
    }
    if(!userProfile){
      dispatch(getProfileAction())
    }else{
      setFirstName(userProfile.firstName)
      setLastName(userProfile.lastName)
      setEmail(userProfile.email)
      setImage(userProfile.image)
    }

  },[userLogin,userProfile,history,dispatch])


  const updateProfileHandler =(e)=>{
    e.preventDefault()
    dispatch(updateProfileAction({firstName,lastName,email,password,image}))
  }



    return(
        <div className='profilepage'>
            <Paper 
            elevation={20}
            style={{
            width:'90%',
            maxWidth:'400px',
            backgroundColor:"#EBEBEB",
            marginBottom:'40px'
          }} 
            align='center' container
            className="profilepaper" 
            square={false}>
              

              <AccountCircleIcon style={{fontSize:100,marginTop:'40px'}} />
                <form className={classes.root} Validate autoComplete="on" onSubmit={updateProfileHandler} >
                <div style={{textAlign:'center'}}>
        
        <TextField
          type='text'
          id="firstName"
          label="FirstName"
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
        />
        <TextField
          type='text'
          id="lastName"
          label="LastName"
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}
        />
        <TextField
          type='email'  
          id="profileEmail"
          label="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField
          type='password'
          id="profilePassword"
          label="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <TextField
          type='password'
          id="profileConfirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
        />            
      </div>
      <Button variant="contained" color="secondary" style={{marginTop:"40px",marginBottom:"40px"}} type='submit'>Update</Button>
    </form>
            </Paper>

        </div>
    )
}


export default ProfilePage