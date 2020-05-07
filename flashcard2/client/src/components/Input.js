import React, { Component } from 'react';

//input field to add a new card to database

class Input extends Component {

  state = {
    action: ""
  }

  handleChange = (e) => {
    this.setState({
      action: e.target.value
    })
  }

  render() {
  
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.action} />
       
      </div>
    )
  }
}

export default Input