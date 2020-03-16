import React from 'react';

const LoginLogoutMenuItem = ({ currentUser, handleLogout, handleLogin }) =>
  currentUser ? (
    <a href="#" onClick={handleLogout}>
      Logout
    </a>
  ) : (
    <a href="#" onClick={handleLogin}>
      Login
    </a>
  );

const mapState = (state) => ({
  currentUser: state.currentUser
});
const mapDispatch = {
  handleLogin: () => dispatch(doLogin()),
  handleLogout: () => dispatch(doLogout())
};
connect(mapState, mapDispatch);

export default connect(mapState, mapDispatch)(LoginLogoutMenuItem);
