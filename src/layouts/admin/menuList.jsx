import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'

import {adminRouterConfig} from 'routes/adminRouterConfig'


export const mainListItems = (
  <div>
    {adminRouterConfig.map(item=>{
      return (
        <Link key={item.name} to={item.path}>
          <ListItem button>
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        </Link>
      )
    })}
  </div>
);

