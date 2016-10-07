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
      <section id="all-wrapper">

        <h1>React Express Seed</h1>

        <main>
          {this.props.children}
        </main>

        <a href="https://github.com/MickeyJ/React-Express-Seed" target="_blank" >GitHub</a>
      </section>
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
