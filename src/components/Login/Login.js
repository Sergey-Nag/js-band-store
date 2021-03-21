import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Login.scss';
import {
  Card, Button, Form, Spinner,
} from 'react-bootstrap';
import userImg from '../../img/unknown-guy.svg';
import signin from '../../store/actions/userActions';

export default function LoginCard() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (username === '') return;

    dispatch(signin(username));

    setTimeout(() => {
      console.log(user);
    }, 1000);
  };

  return (
    <Card className="login-card">
      <Card.Header>Login</Card.Header>
      <Card.Img variant="top" src={userImg} className="px-5 pt-4" />
      <Card.Body>
        <Form onSubmit={handleSubmitForm}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="David..."
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
            <Form.Text className="text-muted" />
          </Form.Group>
          <Button variant="primary" type="submin" block>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              className="bttn-spin"
              role="status"
              aria-hidden="true"
            />
            Log in
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
