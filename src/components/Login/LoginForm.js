import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner';

export default function LoginForm({ handleSubmitForm, username, errorText }) {
  const user = useSelector((state) => state.user);

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="form-group">
        <label htmlFor="username-input" className="w-100">
          Name
        </label>
        <input
          id="username-input"
          type="text"
          className={`form-control ${errorText ? 'is-invalid' : ''}`}
          placeholder="David..."
          value={username[0]}
          onChange={({ target }) => username[1](target.value.trim())}
        />
        <div className="invalid-feedback ">{errorText}</div>
      </div>
      <button className="btn btn-primary btn-block" type="submit">
        {user.isLoading && <Spinner />}
        Log in
      </button>
    </form>
  );
}
