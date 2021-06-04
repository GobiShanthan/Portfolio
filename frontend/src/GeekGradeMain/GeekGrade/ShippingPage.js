import React,{useEffect,useState} from 'react'
import {TextField,Grid,Button} from '@material-ui/core'
import {useDispatch,useSelector} from 'react-redux'
import {addShippingAddressAction} from '../../action/cartAction'



const ShippingPage = ({stateChanger}) => {
const dispatch = useDispatch()

//local states
const [address,setAddress] = useState('')
const [city,setCity] = useState('')
const [postalCode,setPostalCode] = useState('')
const [country,SetCountry] = useState('')

//REDUX STATES
//shipping address state
const cartReducer = useSelector(state=>state.cartReducer)
const {shippingAddress} = cartReducer

useEffect(()=>{
if(shippingAddress){
    setAddress(shippingAddress.address)
    setCity(shippingAddress.city)
    setPostalCode(shippingAddress.postalCode)
    SetCountry(shippingAddress.country)
}
},[shippingAddress])


const submitFormFoward =(e)=>{
    e.preventDefault()
    dispatch(addShippingAddressAction({address,city,postalCode,country}))
    stateChanger((prevActiveStep) => prevActiveStep + 1)

}

const BackWard =e=>{
    stateChanger((prevActiveStep) => prevActiveStep - 1)
}

    return (
<div style={{textAlign:'center'}}>
<h1>Shipping</h1>
 <form  autoComplete="on" onSubmit={submitFormFoward}>
     <Grid container direction='column'>
     <TextField required type='text' value={address} label='Address' onChange={(e)=>setAddress(e.target.value)}/>
     <TextField required type='text' value={city} label='City' onChange={(e)=>setCity(e.target.value)}/>
     <TextField required type='text' value={postalCode} label='Postal Code' onChange={(e)=>setPostalCode(e.target.value)}/>
     <TextField required type='text' value ={country} label='Country' onChange={(e)=>SetCountry(e.target.value)}/>
     </Grid>
     <Button onClick={BackWard} variant='contained' color='secondary' disabled>Back</Button>
     <Button type='submit' variant='contained' color='secondary'>Continue</Button>
 </form>
</div>
        
    )
}

export default ShippingPage
