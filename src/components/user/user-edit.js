import React, { Component } from 'react';
// import './App.css';

class UserEdit extends Component {
  constructor(props) {
    super(props)
    this.state = { color: 'red', name: '', desc: '', error_msg: '', gender: '' }
  }


  /*
    EVENTS
  */
  func1(param1, param2, event) { //event is passed as last argument
    console.log(param1, param2);
    console.log(event.type);
  }

  onChange(event) {
    let input = {}
    input[event.target.name] = event.target.value
    this.setState(input)
  }

  onSubmit(event) {
    event.preventDefault();
    this.validate()

    console.log(this.state);
  }


  /*
    CUSTOM FUNCTIONS
  */
  validate() {
    let error = ''
    if (!this.state.name) {
      error = "Name is required"
    }
    else if (!this.state.gender) {
      error = "Gender is required"
    }
    
    this.generateError(error)
    console.log('validated');
  }

  generateError(msg) {
    this.setState({ error_msg: <b>{msg}</b> })
  }


  render() {
    let header = '';
    if (this.state.name) {
      header = <h1>Hello {this.state.name}</h1>;
    } else {
      header = '';
    }

    return (
      <div className="App">
        <h1>Here we go, state: {this.state.color} and the prop: {this.props.attr1}</h1>
        {header}
        
        <form onSubmit={this.onSubmit.bind(this)}>
          <p>Enter your name:</p>
          <input
            type='text'
            name="name"
            onChange={this.onChange.bind(this)}
          />

          <input
            type='text'
            name="desc"
            onChange={this.onChange.bind(this)}
          />

          <select 
            value={this.state.gender} 
            name="gender" 
            onChange={this.onChange.bind(this)}
          >
            <option value="0">- Select -</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          
          {this.state.error_msg}

          <input
            type='submit'
          />
        </form>

        <button onClick={this.func1.bind(this, "Goal", "param2")}>Take the shot!</button>
      </div>
    );
  }
}

export default UserEdit;
