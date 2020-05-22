import React from 'react';
import API from "../../adapters/API";
import Logo from "../../Media/Pictures/StarLogo.png"
import {
   BrowserRouter as Router,
   Switch,
   Route,      
   Redirect,
   Link,
   useHistory,
   NavLink
 } from "react-router-dom";

 const dashStyle = {
    width: '100px',
    padding: '0px',
    margin: '0 25px 25px',
    textdecoration: 'none',
    color: 'black'
 }

 const Navbar = (props) => {
    return(
   <div>
         <NavLink
         to='/journeys/new'
         exact
         style={dashStyle}
         >Plan a New Journey</NavLink>
         <NavLink
         to='/dashboard'
         exact
         style={dashStyle}
         >My Saved Journeys</NavLink>
         <img src={Logo} height="120" width="150" align="left"/>
        {props.user.id ? <button onClick={props.logout}>Log Out</button> : null}

   </div>

    )
 }

 export default Navbar