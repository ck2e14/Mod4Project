import React from 'react';
import API from "../../adapters/API";
import Logo from "../../Media/Pictures/StarLogo.png"
import { NavLink } from "react-router-dom";

 const Navbar = (props) => {
    return(
   <div>
         
      <NavLink className='navlink'
         to='/journeys/new'
         exact
         >
            Plan a New Journey
      </NavLink>

      <NavLink className='navlink'
         to='/dashboard'
         exact
         >
            My Saved Journeys
      </NavLink>
      
      <img src={Logo} height="120" width="150" align="left"/>
   {props.user.id ? <button onClick={props.logout}>Log Out</button> : null}

   </div>

    )
 }

 export default Navbar
