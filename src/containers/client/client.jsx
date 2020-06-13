import React from 'react';
import Layout from './Layout'
import RouterView from '@/routes'
export default class Client extends React.Component {
  componentDidMount() {
    fetch(process.env.REACT_APP_BASE_URL + `client_api/info`).then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <>
      <Layout>
        <RouterView/>
      </Layout>
      </>
    )
  }
}
