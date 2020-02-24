import React from 'react'
import { connect } from 'react-redux'

import { loadData } from '../actions/index'
import Page from '../components/page'
import {bindActionCreators} from 'redux';

// Import actions
import * as mapActions from '../actions';
class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx

    if (!store.getState().placeholderData.length > 0) {
      store.dispatch(loadData())
    }

    return { isServer }
  }

  componentDidMount() {
      // this.props.actions.loadData();
  }

  render() {
    return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />
  }
}



function mapStateToProps(state) {
  return {
    count : state.count,
  }
}


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(
    mapActions, dispatch)}
}



export default connect(mapStateToProps,mapDispatchToProps)(Index)
