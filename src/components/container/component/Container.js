import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import RouterView from '../../../routes'

export default class MyContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline/>
        <Container>
          <RouterView/>
        </Container>
      </React.Fragment>
    )
  }
}
