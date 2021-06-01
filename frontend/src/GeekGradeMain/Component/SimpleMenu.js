import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom'

const SimpleMenu =({userLogin}) =>{
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{fontWeight:'bolder',marginTop:'-45px'}}>
        {userLogin?userLogin.firstName:null}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        color='#EBEBEB'
      >
        {userLogin  && userLogin.isAdmin?
        <div >
        <Link to='/geekgrade/profile' style={{color:'black',fontWeight:'bolder',textDecoration:'none'}}><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
        <Link to='/geekgrade/userslist' style={{color:'black',fontWeight:'bolder',textDecoration:'none'}}><MenuItem onClick={handleClose}>Users</MenuItem></Link>
        <Link to='/geekgrade/productslist' style={{color:'black',fontWeight:'bolder',textDecoration:'none'}}><MenuItem onClick={handleClose}>Products</MenuItem></Link>
        <Link to='/geekgrade/orderlist' style={{color:'black',fontWeight:'bolder',textDecoration:'none'}}><MenuItem onClick={handleClose}>Orders</MenuItem></Link>
        <Link to={`/geekgrade/cart/${userLogin._id}`} style={{color:'black',fontWeight:'bolder',textDecoration:'none'}}><MenuItem onClick={handleClose}>Cart</MenuItem></Link>
         </div>:
         <div>
        <Link to='/geekgrade/profile'><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
        <Link to={`/geekgrade/cart/${userLogin._id}`}><MenuItem onClick={handleClose}>Cart</MenuItem></Link>
         </div>
        }
      </Menu>
    </div>
  );
}

export default SimpleMenu