import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// 按路由拆分代码
import Loadable from 'react-loadable';
import LoadingComponent from '@/components/LoadingComponent'


const atricleManage = Loadable({
  loader: () => import('@/views/atricleManage'),
  loading: LoadingComponent
});



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
          <Switch>
            <Route  path={'/admin'} component={atricleManage} />
          </Switch>
        </>
      )
    
  }

}
