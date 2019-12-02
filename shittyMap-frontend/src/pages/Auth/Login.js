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
        history.push("/journeys/new");
      })
      .catch(errors => {
        setErrors(errors);
        console.error(errors);

      });
  };
  return (
    <div className="page-login">
  <div className="ui centered grid container">
    <div className="nine wide column">
      <div className="ui icon warning message">
          <i className="lock icon"></i>
          <div className="content">
            <div className="header">
              {!errors ? 'Login failed!' : null}
            </div>
            <p>{errors ? 'Enter your username and password to login.' : null}</p>
          </div>
        </div>
      <div className="ui fluid card">
        <div className="content">
          <form onSubmit={handleSubmit} className="ui form">
            <div className="field">
            {errors.join()}
            <input
              type="text"
              placeholder="UserName"
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          <div className="field">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
        </div>
            <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Login;