import React from 'react';
import API from "../../adapters/API";
import Logo from "../../Media/Pictures/StarLogo.png"
import { NavLink } from "react-router-dom";

 const Navbar = (props) => {
    return(
   <div>
         
      <NavLink className='navlink submit-or-select'
         to='/journeys/new'
         exact
         >
            Plan a New Journey
      </NavLink>

      <NavLink className='navlink submit-or-select'
         to='/dashboard'
         exact
         >
            My Saved Journeys
      </NavLink>

      {props.user.id ? <button className='submit-or-select btn' onClick={props.logout}>Log Out</button> : null}

   </div>

    )
 }

 export default Navbar
