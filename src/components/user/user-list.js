import React, { Component } from 'react';
import UserService from "../../services/user.service";
import { Link } from "react-router-dom";

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      users: [],
      currentObj: null,
      currentIndex: -1,
    }
  }


  /*
    EVENTS & HOOKS
  */
  componentDidMount() {
    this.getData();
  }


  /*
    CUSTOM FUNCTIONS
  */
  getData() {
    UserService.getAll()
      .then(response => {
        this.setState({
          users: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  render() {
    const { users } = this.state;

    return (
      <div className="list row">
        <div className="col-md-12">
          <h4>Users List</h4>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Bio</th>
                <th scope="col"></th>
                {/* <th scope="col"></th> */}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.bio}</td>
                  <td> 
                    <Link
                      to={"/users/edit/" + user.id}
                      className="badge badge-warning"
                    >
                      Edit
                    </Link>
                  </td>
                  {/* <td> 
                    <Link
                      to={"/users/delete/" + user.id}
                      className="badge badge-danger"
                    >
                      Delete
                    </Link>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    );
  }
}

export default UserList;
