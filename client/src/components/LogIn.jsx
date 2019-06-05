import React from 'react';

const LogIn = props => {
  return (
    <div>
      <input
        type="text"
        name="email"
        value={props.email}
        placeholder="email"
        // update the email state in <NavBar /> on change
        onChange={e => {
          props.setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        name="password"
        value={props.password}
        placeholder="password"
        // update the password state in <NavBar /> on change
        onChange={e => {
          props.setPassword(e.target.value);
        }}
      />

      <input
        type="submit"
        value="LogIn"
        onClick={e => {
          e.preventDefault();
          props.getUser();
        }}
      />
    </div>
  );
};

export default LogIn;
