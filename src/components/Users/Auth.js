import React from 'react';

const Auth = ({
  currentUser,
  handleLogout,
  handleLogin,
  renderLoggedIn,
  renderLoggedOut
}) =>
  currentUser
    ? renderLoggedIn(currentUser, handleLogout)
    : renderLoggedOut(handleLogin);

export default Auth;
