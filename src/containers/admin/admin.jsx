import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Layout'
import {adminRouterConfig} from '@/routes/adminRouterConfig'
// 按路由拆分代码



/**
 * (路由根目录组件，显示当前符合条件的组件)
 * 
 * @class Roots
 * @extends {Component}
 */


export default class Admin extends Component {

  render() {
    
      return (
        <>
          <Dashboard>
            <Switch>
              {adminRouterConfig.map(route=>{
                return (
                  <Route
                    exact={route.exact}
                    path={route.path}
                    name={route.name}
                    key={route.name}
                    render={props => (
                      <route.component {...props} routes={route.routes}/>
                    )}
                  />
                )
              })}
            </Switch>
          </Dashboard>
        </>
      )
    
  }

}
