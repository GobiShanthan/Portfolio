import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:'center',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

const  HalfRating =({rating})=> {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
      
    </div>
  );
}

export default HalfRating