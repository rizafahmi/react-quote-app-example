import React from 'react';

import Auth from '../Users/Auth.js';
import FavMenuItem from './FavMenuItem.js';
import './Navigation.css';

const Navigation = ({ favorites }) => {
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
          <FavMenuItem totalFavorite={favorites.length} />
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

export default Navigation;
