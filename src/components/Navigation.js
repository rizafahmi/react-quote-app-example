import React from 'react';

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

export default Navigation;
