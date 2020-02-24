import React from 'react'
import { connect } from 'react-redux'

import { startClock, tickClock } from '../actions'
import Page from '../components/page'

class Other extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx
    return { isServer }
  }

  componentDidMount() {
  }

  render() {
    return <Page title="Other Page" linkTo="/" NavigateTo="Index Page" />
  }
}

export default connect()(Other)
