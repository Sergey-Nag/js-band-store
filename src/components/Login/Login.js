import React, { useState } from 'react';
import './Login.scss';
import { Card, Button, Form } from 'react-bootstrap';
import userImg from '../../img/unknown-guy.svg';

export default function LoginCard() {
  const [randomName] = useState('David');

  return (
    <Card className="login-card">
      <Card.Header>Login</Card.Header>
      <Card.Img variant="top" src={userImg} className="px-5 pt-4" />
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder={`${randomName}...`} />
            <Form.Text className="text-muted" />
          </Form.Group>
          <Button variant="primary" type="submin" className="w-100">
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
