import React, { useState, useEffect } from "react";
import "./App";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
// import Navbar from "./pages/Navbar/Navbar";
import UserDash from "./pages/Dashboard/UserDash";
import { Route, Redirect, Switch, useHistory, Link } from "react-router-dom";
// import Auth from "./pages/Auth";
import paths from "./paths";
import API from "./adapters/API";
import NewJourney from "./pages/Journeys/New";


function App() {
  const [user, setUser] = useState(null);
  const history = useHistory()

  useEffect(() => {
    API.validate()
      .then(user => {
        setUser(user);
        history.push(paths.NEW_JOURNEY);
      })
      .catch(() => {
        history.push(paths.LOGIN);
      });
  }, []);

  const logout = () => {
    API.logout();
    setUser(null);
    history.push(paths.LOGIN);
  };

  return (
    <div className="app-container">

      <div className="App">

        <Switch>
        
          <Route exact path='/' component={props => <Login {...props} setUser={setUser}/>} />
        
          <Route path="/auth/login" component={props => <Login {...props} setUser={setUser} />} />
        
          <Route path="/auth/signup" component={props => <Signup {...props} setUser={setUser}/>} />
        
          <Route path="/journeys/new" render={routerProps => <NewJourney logout={logout} user={user}/>} />
        
          <Route exact path="/dashboard" component={props => {
            return user
            ? <UserDash user={user} logout={logout}/>
            : null
          }} />

          {/* {user && <button onClick={logout}>log out</button>} */}

        </Switch>

      </div>

    </div>
  );
}

export default App;
