import React from 'react';
import { render } from '@testing-library/react';

import Auth from '../Auth.js';

test('Render <Auth /> when loggedIn', () => {
  const { container } = render(
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
      currentUser="riza"
    />
  );
  const auth = container.querySelector('a');
  expect(auth.textContent).toMatch('Logout');
});

test('Render <Auth /> when LoggedOut', () => {
  const { container } = render(
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
  );
  const auth = container.querySelector('a');
  expect(auth.textContent).toMatch('Login');
});
