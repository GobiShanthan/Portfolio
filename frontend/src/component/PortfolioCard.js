import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../index.css'

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius:'15px',

  },
  media: {
  width:'100%',
  paddingTop: '56.25%', // 16:9
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'primary',
  }
}));

const ProjectCard =({Title,Content,image,link,projectInfo})=>{
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='portfolioCard'>
    <Card className={classes.root} elevation={10} >
      <Link style={{textDecoration:'none',color:'black'}} to={link} >
        {image?(
          <CardMedia
        className={classes.media}
        elevation='20px'
        image={image}
        src={image}
        title="gsearch"
      />
        ):(<h3>loading...</h3>)}
      
      <h3 >{Title}</h3>
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="h1">
          {Content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="github" >
          <GitHubIcon color='primary'style={{width:'20px'}}/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            {projectInfo}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}


export default ProjectCard