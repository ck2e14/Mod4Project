import React, { useState } from "react";
import API from "../../adapters/API";
import { useHistory, Link } from "react-router-dom";

export default class Signup extends React.Component{
   render() {
      return (
         <div>test<Link to='/auth/login'>LOGIN</Link></div>
      );
   }
}