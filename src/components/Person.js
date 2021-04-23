import React, { Component } from 'react'

class Person extends Component {


  render() {
    let obj = new Component();
    console.log(obj);
    return (
      <div>

        <h5>{this.props.name}</h5>
        <h6>{this.props.address}</h6>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default Person
