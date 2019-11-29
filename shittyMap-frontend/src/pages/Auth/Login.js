import React, { useState } from "react";
import API from "../../adapters/API";
import { useHistory } from "react-router-dom";

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    API.login({ username, password })
      .then(user => {
        console.log(user);
        props.setUser(user);
        history.push("/posts/new");
      })
      .catch(errors => {
        console.error(errors);
        setErrors(errors);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      {errors.join()}
      <input
        type="text"
        placeholder="UserName"
        name="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default Login;
