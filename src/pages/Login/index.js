import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../actions/auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const isLogged = useSelector(state => state.auth.isLogged);
  let history = useHistory();

  useEffect(() => {
    if (isLogged) {
      // check if isLogged is true => it means user is logged in
      history.push("/"); // if user is logged => redirect to home page
    }
  }, [isLogged]);

  const submit = () => {
    dispatch(loginAction({ email, password })); // compomnent call => action call => action call api
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
