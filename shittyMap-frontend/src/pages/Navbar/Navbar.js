import React from 'react';
import API from "../../adapters/API";
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
    padding: '12px',
    margin: '0 6px 6px',
    background: 'white',
    textdecoration: 'none',
    color: 'black'
 }

 const Navbar = () => {
    return(
    <div>
       <NavLink
         to='/dashboard'
         exact
         style={dashStyle}
         activeStyle={{background: 'lightblue'}}
         >User Dashboard</NavLink>
         <NavLink
         to='/journeys/new'
         exact
         style={dashStyle}
         activeStyle={{background: 'lightblue'}}
         >Plan a New Journey</NavLink>

    </div>
    )
 }

 export default Navbar