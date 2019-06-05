import React, { Component } from 'react';
import axios from 'axios';
import LogIn from './LogIn.jsx';
import LogOut from './LogOut.jsx';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
      userId: '',
      name: '',
    };
    this.setPassword = this.setPassword.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.getUser = this.getUser.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  // get email/password from the input boxes and stores it in the state
  setEmail(email) {
    this.setState({ email });
  }
  setPassword(password) {
    this.setState({ password });
  }

  // use email and password to retrieve a users information
  getUser() {
    const email = this.state.email;
    const password = this.state.password;
    if (!email || !password) {
      return;
    }
    axios
      .post('/users/login', { email, password })
      .then(response => {
        console.log(response.data);
        this.setState(
          {
            loggedIn: true,
            password: '',
            name: response.data.name,
            userId: response.data.id,
          },
          () => {
            // set the userId in <Main /> after state is updated
            this.props.setUserId(this.state.userId);
          }
        );
      })
      .catch(e => {
        // 400 status triggers catch block
        console.log('login error');
        // reset password field if password is incorrect
        this.setPassword('');
        console.error(e);
      });
  }

  // clear the state on logout
  logOut() {
    this.setState({
      loggedIn: false,
      name: '',
      userId: '',
      email: '',
      password: '',
    });
    // clear the userId in <Main />
    this.props.setUserId('');
  }

  render() {
    return (
      <nav>
        <p style={{ marginRight: '2em' }}>My Budget App</p>
        {this.state.loggedIn ? (
          <LogOut name={this.state.name} logOut={this.logOut} />
        ) : (
          <LogIn
            setEmail={this.setEmail}
            setPassword={this.setPassword}
            email={this.state.email}
            password={this.state.password}
            getUser={this.getUser}
          />
        )}
      </nav>
    );
  }
}

export default NavBar;
