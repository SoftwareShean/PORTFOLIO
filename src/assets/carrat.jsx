import React, { Component } from 'react'
import '../components/Landing/Landing.css'

export default class carrat extends Component {
  render() {
    const divStyle = {
      filter: 'invert(100%)',
      color: 'yellow',
      // backgroundClip: 'text',
      // backgroundImage: 'url(' + './background.png' + ')'
    };
    return (
      <svg style={divStyle} width="50" height="50" viewBox="0 0 2048 2048" xmlns="http://www.w3.org/2000/svg"><path d="M1523 992q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23zm0-384q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>
    )
  }
}
