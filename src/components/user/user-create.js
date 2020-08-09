import React, { Component } from 'react';
import UserService from "../../services/user.service";

// import './App.css';

class UserCreate extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      name: '', 
      bio: '', 
      gender: '',
      email: '',
      error_msg: '', 
    }
  }


  /*
    EVENTS
  */
  onChange(event) {
    let input = {}
    input[event.target.name] = event.target.value
    this.setState(input)
  }

  save(event) {
    event.preventDefault()
    let error = this.validate()
    if (error) return

    let data = {
      name: this.state.name, 
      bio: this.state.bio, 
      gender: this.state.gender,
      email: this.state.email,
    }

    UserService.create(data)
      .then(response => {
        console.log('response.data ---');
        console.log(response.data);
        // redirect to users list
      })
      .catch(e => {
        console.log(e);
      });
  }


  /*
    CUSTOM FUNCTIONS
  */
  validate() {
    let error = ''
    if (!this.state.name) {
      error = "Name is required"
    }
    else if (!this.state.email) {
      error = "Email is required"
    }
    
    this.generateError(error)

    if (error != '') return true
    else return false
  }

  generateError(msg) {
    this.setState({ 
      error_msg: 
      <p className="alert-danger">
        {msg}
      </p>
    })
  }


  render() {
    let header = <h2>Create new user</h2>;

    return (
      <div className="submit-form">
        {header}
        
        <form onSubmit={this.save.bind(this)}>
          <div className="form-group">
            <label htmlFor="name">Enter your name</label>
            <input
              type='text'
              name="name"
              className="form-control"
              required
              onChange={this.onChange.bind(this)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Enter your email</label>
            <input
              type='text'
              name="email"
              className="form-control"
              required
              onChange={this.onChange.bind(this)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="bio">Enter your bio</label>
            <input
              type='text'
              name="bio"
              className="form-control"
              onChange={this.onChange.bind(this)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Enter your gender</label>
            <select 
              value={this.state.gender} 
              name="gender" 
              className="form-control"
              onChange={this.onChange.bind(this)}
            >
              <option value="0">- Select -</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          
          {this.state.error_msg}

          <input type='submit' className="btn btn-primary" value="Save" />
        </form>
      </div>
    );
  }
}

export default UserCreate;
