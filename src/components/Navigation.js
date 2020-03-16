import React from 'react';

import { doLogin, doLogout } from '../actions/auth.js';
import './Navigation.css';

const Navigation = ({ currentUser, handleLogout, handleLogin }) => {
  const loggedIn = !!currentUser;

  return (
    <header className="sticky">
      <div className="container">
        <div className="nav-brand">
          <a href="/">
            <h1>
              <i className="snes-jp-logo brand-logo" /> Quote.app
            </h1>
          </a>
        </div>
        <div className="menu">
          <a href="/">Favoirite(3)</a>
        </div>
        <div className="auth">
          {!loggedIn && (
            <a href="/" onClick={handleLogin}>
              Login
            </a>
          )}
          {loggedIn && (
            <a href="/" onClick={handleLogout}>
              Logout
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

const mapState = (state) => ({
  currentUser: state.currentUser
});
const mapDispatch = {
  handleLogin: () => dispatch(doLogin()),
  handleLogout: () => dispatch(doLogout())
};
connect(mapState, mapDispatch);

export default connect(mapState, mapDispatch)(Navigation);
