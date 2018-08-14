import React, { Component } from 'react';

class Invitation extends Component {
  render () {
    <div>
      <h1>'You'be been invited!'</h1>
      {this.props.children}
    </div>


  }
}



module.exports = Invitation;
