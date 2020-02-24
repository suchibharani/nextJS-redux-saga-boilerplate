import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';

// Import actions
import * as mapActions from '../actions';


class Counter extends Component {
  increment = () => {
    this.props.actions.increment();
  }

  decrement = () => {
    this.props.actions.decrement();
  }

  reset = () => {
    this.props.actions.reset();
  }

  render() {
    const { count } = this.props
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
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

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
