import React, { Component } from 'react';
import UserService from "../../services/user.service";

class UserEdit extends Component {
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
    EVENTS & HOOKS
  */
  onChange(event) {
    let input = {}
    input[event.target.name] = event.target.value
    this.setState(input)
  }

  componentDidMount() {
    this.getData(this.props.match.params.id);
  }

  save(event) {
    event.preventDefault()

    let data = {
      name: this.state.name, 
      bio: this.state.bio, 
      gender: this.state.gender,
      email: this.state.email,
    }

    UserService.update(this.props.match.params.id, data)
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
  getData(id) {
    UserService.get(id)
      .then(response => {
        if (response.data) {
          this.setState({
            name: response.data.name, 
            bio: response.data.bio, 
            gender: response.data.gender,
            email: response.data.email
          });
        }
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  render() {
    return (
      <div className="submit-form">
        <form onSubmit={this.save.bind(this)}>
          <div className="form-group">
            <label htmlFor="name">Enter your name</label>
            <input
              type='text'
              name="name"
              className="form-control"
              required
              value={this.state.name} 
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
              value={this.state.email} 
              onChange={this.onChange.bind(this)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="bio">Enter your bio</label>
            <input
              type='text'
              name="bio"
              className="form-control"
              value={this.state.bio} 
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
          
          <input type='submit' className="btn btn-primary" value="Save" />
        </form>
      </div>
    );
  }
}

export default UserEdit;
