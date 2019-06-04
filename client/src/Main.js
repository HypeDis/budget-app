import React, { Component } from 'react';

// import NavBar from './components/NavBar.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      loggedIn: false,
      email: '',
      password: '',
    };
  }

  setEmail(email) {
    this.setState({ email });
  }
  setPassword(password) {
    this.setState({ password });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="email"
          onChange={e => {
            this.setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          name="password"
          onChange={e => {
            this.setPassword(e.target.value);
          }}
        />

        <input
          type="submit"
          value="Submit"
          onClick={e => {
            e.preventDefault();
          }}
        />
      </div>
    );
  }
}

export default Main;
