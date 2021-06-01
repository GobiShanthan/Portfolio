import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Paper,TextField,Button,Grid} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Checkbox from '@material-ui/core/Checkbox';
import {getUserByIdAction,updateUserByIdAction} from '../../action/userAction'
import {UPDATE_USER_BY_ID_RESET} from '../../constant/userConstant'




const UpdateUserPage = ({match,history}) =>{
  const dispatch = useDispatch()
  const userId = match.params.id
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [isAdmin,setIsAdmin] = useState(false)

  //GET USER BY ID INFO
  const getUserByIdReducer = useSelector((state)=>state.getUserByIdReducer)
  const {getUserInfo} = getUserByIdReducer

  //UPDATE USER INFO
  const updateUserByIdReducer = useSelector((state)=>state.updateUserByIdReducer)
  const {updateUserInfo} = updateUserByIdReducer


  useEffect(()=>{
    dispatch({type:UPDATE_USER_BY_ID_RESET})
    if(!getUserInfo || getUserInfo._id !== userId || updateUserInfo){
      dispatch(getUserByIdAction(userId))
    }else{
      setFirstName(getUserInfo.firstName)
      setLastName(getUserInfo.lastName)
      setEmail(getUserInfo.email)
      setIsAdmin(getUserInfo.isAdmin)
    }
  },[dispatch,getUserInfo,userId,updateUserInfo])

  const userSubmit=(e)=>{
    e.preventDefault()
    dispatch(updateUserByIdAction({_id:userId,firstName,lastName,email,isAdmin:isAdmin?'true':'false',password}))
  }

    return(
        <div className='userList'>
          <Grid container justify='center'>
            <Paper className="userUpdatePaper" elevation={22}>
              <Grid item xs={12}>
                <AccountCircleIcon style={{fontSize:120, marginTop:'40px'}}/>
              </Grid>
              <form className='userupdateform' onSubmit={userSubmit}>
              <Grid item xs ={12}>
              <TextField
              label='First Name'
              fullWidth
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}
              
              />
              </Grid>
              <Grid item xs ={12}>
              <TextField
              label='Last Name'
              fullWidth
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}
              />
              </Grid>
              <Grid item xs ={12}>
              <TextField
              label='Email'
              fullWidth
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              />
              </Grid>
              <Grid item xs ={12}>
              <TextField
              label='Rest Password'
              fullWidth
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              />
              </Grid>
              <Grid xs ={12} item style={{marginTop:'20px'}}>
                Is Admin
              <Checkbox
              checked={isAdmin}
              onClick={(e)=>setIsAdmin(e.target.checked)}

              />
              <Grid>
                <Button variant="contained" color="secondary" style={{marginBottom:'40px',marginTop:'40px'}} type='submit'>Update</Button>
              </Grid>
              </Grid>
              </form>
            </Paper>
          </Grid>
        </div>

    )
}

export default UpdateUserPage