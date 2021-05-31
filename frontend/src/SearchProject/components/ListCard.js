import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import wikiLogo from '../searchPics/wikiLogo.png'
import '../search.css'


const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    color:'white',
  },
  inline: {
    color:'white'
  }
}));




const  ListCard =({wikiList})=>{
  const classes = useStyles();

  const getWikiList = wikiList.map((wiki)=>(
        <List className={classes.root} key={wiki.pageid}>
    <a href={`https://en.wikipedia.org?curid=${wiki.pageid}`} className='linkTitle' style={{textDecoration:'none'}}>    
      <ListItem alignItems="flex-start" key={wiki.pageid} >
        <ListItemText
          primary={wiki.title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className = 'wikiSearchApi'
                color="primary"
              >
                <span dangerouslySetInnerHTML={{ __html: wiki.snippet }} ></span>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      </a>
      <Divider variant="inset" component="li" />
    </List>

))


      if(wikiList.length !== 0){
        return (
          <div>
              <img src={wikiLogo} style={{width:'10vw',paddingTop:'5vh'}} className='wikiImage' alt='wikiLogo'/>
              {getWikiList}
          </div>
      );
      }else return null

}


export default ListCard