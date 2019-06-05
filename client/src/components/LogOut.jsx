import React from 'react';

const LogOut = props => {
  return (
    <div style={{ display: 'contents' }}>
      <p>{`Logged In As: ${props.name}`}</p>
      <button type="submit" onClick={props.logOut}>
        LogOut
      </button>
    </div>
  );
};

export default LogOut;
