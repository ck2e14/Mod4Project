import React from 'react';
import API from "../../adapters/API";
import Logo from "../../Media/Pictures/Logo.png"
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

 const Navbar = () => {
    return(
   <div>
         <NavLink
         to='/journeys/new'
         exact
         style={dashStyle}
         activeStyle={{background: 'grey'}}
         >Plan a New Journey</NavLink>
         <NavLink
         to='/dashboard'
         exact
         style={dashStyle}
         activeStyle={{background: 'grey'}}
         >User Dashboard</NavLink>
         <img src={Logo} height="120" width="120" align="left"/>
   </div>
    )
 }

 export default Navbar
