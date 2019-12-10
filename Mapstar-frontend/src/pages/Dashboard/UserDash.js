import React from 'react';
import API from "../../adapters/API";
import Navbar from "../Navbar/Navbar"
import JourneyDisplay from "./JourneyDisplay"
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
   Link,
   useHistory
 } from "react-router-dom";

 export default class UserDash extends React.Component {

   constructor(){
      super()
      this.state ={
         journeys: []
      }
   }


    componentDidMount(){
      const user_id = this.props.user.id
      fetch(`http://localhost:3000/api/v1/users/${user_id}`)
      .then(resp => resp.json())
      .then(data => this.setState({ 
         journeys: data.journeys
       })
   )}

   renderJourneys = () => {
      return this.state.journeys.map(journey => {
         return <JourneyDisplay key={journey.id} journey={journey} />
   })}


    render(){      
       return(
         <div>
            <Navbar user={this.props.user} logout={this.props.logout}/>  
            <h2><strong>This Component Remains in Beta ;)</strong></h2>
            <div id="saved-journeys"> 
               {this.renderJourneys()} 
            </div>
         </div>
       )
    }
 }