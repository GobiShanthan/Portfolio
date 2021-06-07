import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {MdArrowDropDown } from 'react-icons/md';


import {    
  //SORT OPTIONS 
  SET_BY_BRAND,
  SET_BY_NAME,
  SET_BY_PRICE_LOW_TO_HIGH,
  SET_BY_PRICE_HIGH_TO_LOW,
  SET_BY_AVG_CUSTOMER_REIVEW,
  SET_BY_NEW_ARRIVAL} 
  from '../../constant/productConstant'


const SortMenu =() =>{
  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch = useDispatch()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  
  const allProductsReducer = useSelector((state)=>state.allProductsReducer)
  const {allProductsInfo} = allProductsReducer
  const newProductsVal = allProductsInfo?allProductsInfo.slice(0):null



  const handleClose = (val) => {
    setAnchorEl(null);
    if(val){
      dispatch({type:val,payload:newProductsVal})
    }
  };



  if(allProductsInfo){

    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{color:'white'}}>
          SortBy<MdArrowDropDown style={{fontSize:'30px'}}/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={()=>handleClose(SET_BY_BRAND)} >By Brand</MenuItem>
          <MenuItem onClick={()=>handleClose(SET_BY_NAME)} >By Name</MenuItem>
          <MenuItem onClick={()=>handleClose(SET_BY_PRICE_LOW_TO_HIGH)} >Price: Low to High</MenuItem>
          <MenuItem onClick={()=>handleClose(SET_BY_PRICE_HIGH_TO_LOW)} >Price: High to Low</MenuItem>
          <MenuItem onClick={()=>handleClose(SET_BY_AVG_CUSTOMER_REIVEW)} >Avg.Customer Review</MenuItem>
          <MenuItem onClick={()=>handleClose(SET_BY_NEW_ARRIVAL)} >Newest Arrivals</MenuItem>
  
        </Menu>
      </div>
    );
  }else{
    return(
      <div>
        loading....
      </div>
    )
  }
  
}

export default SortMenu