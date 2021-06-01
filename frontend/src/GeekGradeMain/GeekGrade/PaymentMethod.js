import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import {addPaymentMethodAction} from '../../action/cartAction'
   
const PaymentMethod = ({stateChanger}) => {
const dispatch = useDispatch()
const [paymentValue,setPaymentValue] = useState('PayPal')


const paymentSubmit=(e)=>{
e.preventDefault()
dispatch(addPaymentMethodAction(paymentValue))
stateChanger((prevActiveStep) => prevActiveStep + 1)
}


    return (
        <div style={{textAlign:'center'}}>
            <h1>Payment Method</h1>
            <br/>
            <form onSubmit={paymentSubmit}>
            <FormControl component="fieldset" >
      <FormLabel component="legend">Select Method</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel value="paypal"  control={
        <Radio 
            color="primary" 
            value='PayPal'
            onChange={(e) => setPaymentValue(e.target.value)} />} 
            label="PayPal or Credit Card" />
      </RadioGroup>
      <br/>
      <Button variant="contained" color='secondary' type="submit" style={{marginBottom:'20px'}}>Continue</Button>
    </FormControl>
    </form>
        </div>
    )
}

export default PaymentMethod
