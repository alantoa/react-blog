import React, { Component } from 'react'
// import PureRenderMixiin from 'react-addons-pure-render-mixin'
import {
  BrowserRouter as Router,
  Route,
  Switch

} from 'react-router-dom'
import NotFound from "../components/notFound/NotFound";
// import {Loading} from "./components/loading/Loading"
// import {notification} from 'antd';
// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
// import {actions} from '../reducers'
import Admin from "./admin/admin";
import Client from './client/client'
// const {clear_msg, user_auth} = actions;

export default class AppIndex extends Component {


  // openNotification(type, message) {
  //     let that = this;
  //     notification[type]({
  //         message: message,
  //         onClose: () => {
  //             that.props.clear_msg();
  //         }
  //     });
  //     that.props.clear_msg();
  // };

  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route path='/404' component={NotFound} />
            <Route path='/admin' component={Admin} />
            <Route component={Client} />
          </Switch>
        </>
      </Router>
    )
  }

  componentDidMount() {
    // this.props.user_auth();
  }

}


// function mapStateToProps(state) {
//     return {
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {

//     }
// }


// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(AppIndex)