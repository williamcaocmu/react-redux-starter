import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { loginAPI } from "../../api/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(loginAPI({ email, password }));
  };

  return (
    <Form onSubmit={submit}>
      <Form.Input
        value={email}
        onChange={e => {
          setEmail(e.target.value);
        }}
        label='Email'
      />
      <Form.Input
        value={password}
        onChange={e => {
          setPassword(e.target.value);
        }}
        label='Password'
        type='password'
      />
      <Button>Submit</Button>
    </Form>
  );
};

export default Login;
