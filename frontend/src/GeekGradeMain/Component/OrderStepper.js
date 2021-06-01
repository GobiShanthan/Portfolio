import React from 'react';
import {useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShippingPage from '../GeekGrade/ShippingPage';
import PaymentMethod  from '../GeekGrade/PaymentMethod';
import PlaceOrderPage from '../GeekGrade/PlaceOrderPage';
import { Grid,Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    margin:'2% 10% 5% 10%',
    color:'secondary',
    backgroundColor:'#3A6EA5'
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
      display:"flex",
      justifyContent:'center',
  },
  paper:{

  }
}));

function getSteps() {
  return ['Sign In', 'Shipping Information', 'Payment Method','Place Order'];
}


export default function HorizontalLabelPositionBelowStepper({history}) {

  //REDUX GLOBAL STATE

  //login state
    const loginReducer = useSelector((state)=>state.loginReducer)
    const {userLogin} = loginReducer

  //shipping info state


  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();




  function getStepContent(stepIndex) {

    switch (stepIndex) {
      case 0:
        return userLogin?setActiveStep(1):history.push('/geekgrade/authuser');
      case 1:
        return <ShippingPage stateChanger={setActiveStep} />;
      case 2:
        return <PaymentMethod stateChanger={setActiveStep}/>;
        case 3:
            return <PlaceOrderPage history={history}/>
      default:
        return 'Unknown stepIndex';
    }
  }
  

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <Stepper activeStep={activeStep} alternativeLabel >
        {steps.map((label) => (
          <Step key={label} style={{marginTop:"40px"}}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <Grid container  direction='column' alignContent='center' >
        {activeStep === steps.length ? (    
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>

          </div>
        )}
              </Grid>
      </div>
    </Paper>
          
    </div>
  );
}