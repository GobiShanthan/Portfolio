import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import {CgMenuGridR} from 'react-icons/cg';
import {Link as ScrollLink} from 'react-scroll'





const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      paper: {
        marginRight: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
        color:'white'
      }
}));



export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <CgMenuGridR style={{color:'white',fontSize:'25px'}}/>
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                <MenuItem style={{height:'35px'}}><ScrollLink to='portfolio' smooth={true} duration={2000} onClick={handleClose}><h3>Portfolio</h3></ScrollLink></MenuItem>
                <MenuItem style={{height:'35px'}}><ScrollLink to='about' smooth={true} duration={2000} onClick={handleClose}><h3>About me</h3></ScrollLink></MenuItem>                   
                <MenuItem style={{height:'35px'}}><ScrollLink to='contact' smooth={true} duration={2000} onClick={handleClose}><h3>Contact me</h3></ScrollLink></MenuItem>
                </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}




