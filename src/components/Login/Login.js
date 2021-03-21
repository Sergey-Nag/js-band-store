import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Login.scss';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import userImg from '../../img/unknown-guy.svg';
import signin from '../../store/actions/userActions';
import LoginForm from './LoginForm';

export default function LoginCard() {
  const [username, setUsername] = useState('');
  const [errorText, setErrorText] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (username.length < 4 || username.length > 16) {
      setErrorText('Username is not valid');
      return;
    }

    setErrorText(null);

    dispatch(signin(username));
  };

  return (
    <Card className="login-card">
      <Card.Header>Login</Card.Header>
      <Card.Img
        variant="top"
        src={user.authUser?.avatar ?? userImg}
        className="px-5 pt-4"
      />
      {user.authUser === null && (
        <Card.Body>
          <LoginForm
            handleSubmitForm={handleSubmitForm}
            username={[username, setUsername]}
            errorText={errorText}
          />
        </Card.Body>
      )}
      {user.authUser !== null && (
        <Card.Body>
          <h3 className="text-center">
            Welcome,
            {' '}
            {user.authUser.username}
          </h3>
          <hr />
          <Link to="/catalog" className="bttn primary solid mb-2">Go to the catalog</Link>
          <Button size="sm" variant="outline-secondary" block>Log out</Button>
        </Card.Body>
      )}
    </Card>
  );
}
