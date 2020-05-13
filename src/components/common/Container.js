import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import RouterView from '../../routes/index'
export default class MyContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <Container>
        <RouterView/>
      </Container>
    </React.Fragment>
    )
  }
}
