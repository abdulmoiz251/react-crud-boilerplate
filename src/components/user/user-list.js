import React, { Component } from 'react';
// import './App.css';

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      color: 'red', 
      name: '', 
      desc: '', 
      error_msg: '', 
      gender: '' 
    }
  }


  /*
    EVENTS
  */
  func1(param1, param2, event) { //event is passed as last argument
    console.log(param1, param2);
    console.log(event.type);
  }


  /*
    CUSTOM FUNCTIONS
  */


  render() {
    return (
      <p></p>
    );
  }
}

export default UserList;
