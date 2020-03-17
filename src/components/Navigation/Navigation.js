import React from 'react';

import { doLogin, doLogout } from '../actions/auth.js';
import Auth from './Auth.js';
import './Navigation.css';

const Navigation = ({ currentUser, handleLogout, handleLogin, favCount }) => {
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
          <FavMenuitem />
        </div>
        <div className="auth">
          <Auth
            renderLoggedOut={(login) => (
              <a href="#" onClick={login}>
                Login
              </a>
            )}
            renderLoggedIn={(user, logout) => (
              <a href="#" onClick={logout}>
                Logout
              </a>
            )}
          />
        </div>
      </div>
    </header>
  );
};

const mapState = (state) => ({
  currentUser: state.currentUser,
  favCount: state.favorites.length
});
const mapDispatch = {
  handleLogin: () => dispatch(doLogin()),
  handleLogout: () => dispatch(doLogout())
};
connect(mapState, mapDispatch);

export default connect(mapState, mapDispatch)(Navigation);
