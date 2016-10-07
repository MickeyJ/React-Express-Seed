import React, { Component } from 'react'
import { connect } from 'react-redux'
import {testRequest} from '../redux/actions'

class Main extends Component {

  componentWillMount(){
    this.props.testRequest();
    console.log('authenticated: ', this.props.authenticated);
  }

  render(){
    return(
      <div id="all-wrapper">
        <h1>React Express Seed</h1>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, {
  testRequest
})(Main)
