import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import {Link} from 'react-router-dom'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

export const mainListItems = (
  <div style={{backgroundColor:"#4c8c40",height:530}}>
  
    <ListItem button>


      <ListItemIcon style={{color:'white'}}>
        <DashboardIcon  />
      </ListItemIcon>
      <Link to="/agent" style={{color:'white'}}>

      <ListItemText primary="Dashboard" />
      </Link>    
    </ListItem>
    <ListItem button> 
      <ListItemIcon style={{color:'white'}}>
        <PeopleIcon />
      </ListItemIcon>
      <Link to='/allpatients' style={{color:'white'}}>
      <ListItemText primary="Patients" />
      </Link>
    </ListItem>  

    <ListItem button> 
    <ListItemIcon style={{color:'white'}}>
      <BusinessCenterIcon />
    </ListItemIcon>
    <Link to='/mytests' style={{color:'white'}}>
    <ListItemText primary="Tests" />
    </Link>
  </ListItem> 
    <ListItem button>
      <ListItemIcon style={{color:'white'}}>
        <BusinessCenterIcon />
      </ListItemIcon>
      <Link to='/allkits' style={{color:'white'}}>
      <ListItemText primary="Kits" />
      </Link>
    </ListItem>
  </div>
);
