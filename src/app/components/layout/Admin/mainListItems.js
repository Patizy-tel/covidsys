import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import {Link} from 'react-router-dom'


export const mainListItems = (
  <div style={{backgroundColor:"#4c8c40",height:530}}>
  
  <ListItem button>


<ListItemIcon style={{color:'white'}}>
  <DashboardIcon  />
</ListItemIcon>
<Link to="/dashboard" style={{color:'white'}}>

<ListItemText primary="Dashboard" />
</Link>    
</ListItem>
<ListItem button> 
<ListItemIcon style={{color:'white'}}>
  <PeopleIcon />
</ListItemIcon>
<Link to='/allusers' style={{color:'white'}}>
<ListItemText primary="Users" />
</Link>
</ListItem>  
  </div>
);
