import React, { useState } from "react";
import API from "../../adapters/API";
import { 
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
   Link,
   useHistory 
 } from "react-router-dom";

 
 
 const Signup = props => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [errors, setErrors] = useState([]);
   const history = useHistory();
 
   const handleSubmit = e => {
     e.preventDefault();
     API.signup({ username, password })
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
           <h1 align="center">  Welcome to MapStar!</h1>
             <div className="header">
               {!errors ? 'Signup failed!' : null}
             </div>
             <p>{errors ? 'Please choose your login credentials.' : null}</p>
           </div>
         </div>
       <div className="ui fluid card">
         <div className="content">
           <form onSubmit={handleSubmit} className="ui form">
             <div className="field">
             {errors.join()}
             <input
               type="text"
               placeholder="Username"
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
             <input type="submit" value="Sign up"/>
             </div>
           </form>
         </div>
         <Link to="/auth/login">Already Signed-up? Login Here.</Link>
       </div>
     </div>
   </div>
 </div>
   );
 };

 export default Signup;
 
