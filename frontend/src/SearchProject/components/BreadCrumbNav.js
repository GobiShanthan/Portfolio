import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ImageIcon from '@material-ui/icons/Image';
import LanguageIcon from '@material-ui/icons/Language';
import '../search.css'
import SearchResults from './SearchResults'

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  icon: {
    marginRight: theme.spacing(0.5),
    cursor: 'pointer'
  },
}));



const BreadcrumbsNav=()=>{
  const classes = useStyles();
  const [resultScreen,setResultScreen] = useState('')

  return (
    <div>
      <div className='breadCrumb'>
          <Breadcrumbs aria-label="breadcrumb" justify='center' color='primary'>
      <Link color="primary"  onClick={(e)=>setResultScreen('wiki')} className={classes.link}>
        <LanguageIcon  className={classes.icon}  />
        Wiki
      </Link>
      <Link
        color="primary"
        onClick={(e)=>setResultScreen('image')}
        className={classes.link}>
        <ImageIcon  className={classes.icon} />
        Images
      </Link>
      <Link
        color="primary"
        onClick={(e)=>setResultScreen('youtube')}
        className={classes.link}>
        <YouTubeIcon className={classes.icon} />
        YouTube
      </Link>
    </Breadcrumbs>
      </div>
        <SearchResults resultScreen={resultScreen}/>
      </div>
    
  );
}

export default BreadcrumbsNav