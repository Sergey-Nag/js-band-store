import React from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function LoginForm({ handleSubmitForm, username, errorText }) {
  const user = useSelector((state) => state.user);

  return (
    <Form onSubmit={handleSubmitForm}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="David..."
          value={username[0]}
          onChange={({ target }) => username[1](target.value.trim())}
          isInvalid={errorText !== null}
        />
        <Form.Control.Feedback type="invalid">
          {errorText}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submin" block>
        {user.isLoading && (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            className="bttn-spin"
            role="status"
            aria-hidden="true"
          />
        )}
        Log in
      </Button>
    </Form>
  );
}
