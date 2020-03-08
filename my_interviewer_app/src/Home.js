import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import './Home.css'; // make this later
import { render } from '@testing-library/react';
import { withRouter } from "react-router";

import UserInfo from './UserInfo'
import Constants from './Constants'


export class Home extends React.Component {
  
  /*useEffect(() => {
    console.log("page has rerendered");
    // make request from API and get list/array of questions
  }, []); */

  // get random subset of questions from array of size 3-5 (declare this as a constant)
  // this would be an array of custom objects
  // of class that has text and mp3 

    navToQuestions() {
        console.log("why call")
    }


    render() {
      Constants.user = new UserInfo("John", 0, 0);
        
      /*  const getNameFromField = event => {
            event.preventDefault
            Constants.user._name = event.target.value
            console.log("text field has been changed")
        }; */

        return (
        <div className="Home">
            <h1>Title</h1>
            <h2>{"Quisque eget felis sodales risus volutpat \
                faucibus non ac libero. Pellentesque eleifend fringilla porta. \
                Duis eu vestibulum turpis, nec fringilla tortor. Proin posuere"}</h2>
            <form>
            <label htmlFor="name">Enter your name to continue</label>
            <input 
                name="name"
                onChange = {(event) => {
                    Constants.user._name = event.target.value;
                    console.log(Constants.user._name);}}>
            </input>
            <button
            title = "start-interview"
            type = "button"
            className = "action-button"
            onClick = {
                () => {this.props.history.push("/question/1");
                console.log("nav to qs")}}>
                Start Interview!
            </button>
            </form>
        </div>
      );
    }
}

// on submit, create new UserInfo instance and figure out how to access that from all parts of the app
// possibly using nested paths

export default Home;


/*
<button 
            type="button"
            title="start"
            onClick={() => console.log("gggg")}>
           Start Interview 
         </button> 
*/

/* link
<a
         type = "button"
         href = "https://google.com"
         title = "google"
         target = "_self"
         >
           Link
         </a>

*/

/*
JSON.stringify(Constants.user)}
Constants.user._score = Constants.user._score + 5
Constants.user._name = "Jake"
Constants.user._numOfQsAnswered = Constants.user._numOfQsAnswered + 1
*/