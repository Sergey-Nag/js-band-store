import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import { AUTH_USER } from './store/types/userTypes';

afterEach(cleanup);

const renderWithRedux = (component) => ({
  ...render(<Provider store={store}>{component}</Provider>),
});

describe('"App" component test', () => {
  test('"App" render "login" component if token is null', () => {
    const app = renderWithRedux(<App />);
    const reduxStore = store.getState();

    expect(reduxStore.user.token).toBe(null);
    expect(app.getAllByTestId('Login').length).toBe(1);
  });

  test('"App" render "Catalog" component if token is\'nt null', () => {
    store.dispatch({
      type: AUTH_USER,
      payload: {
        username: 'Test',
        token: 'test',
        avatar: 'test',
      },
    });
    const reduxStore = store.getState();
    console.log(reduxStore);
    expect(reduxStore.user.token).not.toBe(null);
  });
});
