import React from 'react';
import Layout from './Layout'
import RouterView from 'routes/clientRouterView'

export default class Client extends React.Component {
  // componentDidMount() {
  //   fetch('/api/list').then(res => {
  //     console.log(res)
  //   })
  // }

  render() {
    return (
      <>
      <Layout >
        <RouterView/>
      </Layout>
      </>
    )
  }
}
