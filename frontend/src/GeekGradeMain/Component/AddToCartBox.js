import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper'
import { Divider, Button } from '@material-ui/core';
import { FormControl } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    margin:'5%',
    flexGrow: 1,
    minWidth:'250px',
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));



const AddToCartBox =({product}) =>{
  const classes = useStyles();
  const [qty,setQty] = useState(1)

  const addDecimals =(num)=>{
    return ((num*100)/100).toFixed(2)
  }

  return (
    <div className={classes.root}>
          <div className={classes.demo}>
            <Paper elevation={5}>
            <List dense >
                <ListItem>
                  <ListItemText>
                    Price:
                  </ListItemText>
                  <ListItemText
                    primary={`$ ${addDecimals(product.price * qty)}`}
                  />
                </ListItem>
            <Divider/>

                <ListItem>
                  <ListItemText>
                    Status:
                  </ListItemText>
                  <ListItemText
                    primary={product.countInStock?'In Stock':'Out Of Stock'}
                  />
                </ListItem>

            <hr/>
                <ListItem>
                  <ListItemText>
                    Qty
                  </ListItemText>
                  <ListItemText>
                  <FormControl
                  as='select'
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  >
                    <select name="Qty" id='stock' >
                    {[...Array(product.countInStock).keys()].map(
                      (x)=>(
                        <option value={x+1} key={x+1}>
                          {x+1}
                        </option>
                      )
                    )}
                    </select>
                    </FormControl>
                  </ListItemText>
                </ListItem>

            <hr/>
            <Link to={`/geekgrade/cart/${product._id}?qty=${qty}`}>
            <Button variant="contained" color='secondary'>ADD TO CART</Button>
            </Link>

            </List>
            </Paper>
          
          </div>

    </div>
  );
}

export default AddToCartBox