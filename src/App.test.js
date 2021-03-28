import { fireEvent, getByTestId } from '@testing-library/react';
import React from 'react';
import App from './App';
import store from './store';
import { AUTH_USER } from './store/types/userTypes';
import renderWithRedux from './tests-helpers/renderWithRedux';

describe('"App" component test', () => {
  let app;

  beforeEach(() => {
    app = renderWithRedux(<App />);
  });

  test('"App" render "login" component if token is null', () => {
    const reduxStore = store.getState();
    expect(reduxStore.user.token).toBe(null);
    expect(app.getAllByTestId('Login').length).toBe(1);
    expect(app.getByTestId('username-input')).toBeDefined();
  });

  test('Username input value', () => {
    app.getByTestId('username-input').value = 'Test';
    expect(app.getByTestId('username-input').value).not.toBe('');
    expect(app.getByTestId('username-input').value).toBe('Test');
  });

  test('Login form is invalid if username undefined', () => {
    const loginForm = getByTestId(app.container, 'login-form');
    const usernameInput = getByTestId(app.container, 'username-input');

    fireEvent.submit(loginForm);
    const data = new FormData(loginForm);

    expect(data.get('username-input')).toBeNull();
    expect(usernameInput.className).toBe('form-control is-invalid');
  });

  test('"App" redirecting if user with token in "Login" page', () => {
    store.dispatch({
      type: AUTH_USER,
      payload: {
        username: 'Test',
        token: 'test',
        avatar: 'test',
      },
    });
    const reduxStore = store.getState();

    expect(typeof reduxStore.user.token).toBe('string');
    expect(typeof reduxStore.user.username).toBe('string');
    expect(typeof reduxStore.user.avatar).toBe('string');
    expect(app.getByText(/Redirecting.../g)).toBeDefined();
  });
});
