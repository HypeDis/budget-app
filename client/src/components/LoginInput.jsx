import React from 'react';

const LoginInput = props => {
  return (
    <div>
      <input
        type="text"
        name="email"
        value={props.email}
        onChange={e => {
          props.setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        name="password"
        value={props.password}
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

export default LoginInput;
