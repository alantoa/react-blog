import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ArticleManage from '../../views/atricleManage'
import NotFound from '../../components/notFound/NotFound'
import ControlPanel from '../../components/demo/index'
import Login from '../../components/login/Login'

export default class Admin extends Component {

  render() {
    if (true) {
      return (
        <>
          {false ? (
            <Switch>
              <Route exact path={'/admin'} component={ArticleManage} />
            </Switch>
          ) : (
            <>
            <ControlPanel></ControlPanel>
            <Login></Login>
            </>
          )}
        </>
      )
    } else {
      return (
        <>
          <NotFound />
        </>
      )
    }
  }

  componentDidMount() {}
}
