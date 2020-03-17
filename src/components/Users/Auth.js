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

const mapState = (state) => ({
  currentUser: state.currentUser
});
const mapDispatch = {
  handleLogin: () => dispatch(doLogin()),
  handleLogout: () => dispatch(doLogout())
};
connect(mapState, mapDispatch);

export default connect(mapState, mapDispatch)(Auth);
