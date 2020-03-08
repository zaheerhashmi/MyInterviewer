import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import './Home.css'; // make this later
import { render } from '@testing-library/react';
import { withRouter } from "react-router";

import Constants from './Constants'
import UserInfo from './UserInfo'
import App from './App';

import {PythonShell} from 'python-shell';


export class Home extends React.Component {
  
  componentDidMount() {
    // Fetch all articles before the page loads up
    this.getQuestions();
  }

  async getQuestions() {
     let response = await fetch('http://127.0.0.1:5000/getQuestions')
     .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      Constants.idList = data["qId"]
      console.log(Constants.idList)

    });
  }

  async getId() {
    console.log(Constants.user._numOfQsAnswered)
    fetch('http://127.0.0.1:5000/qID/' + Constants.idList[Constants.user._numOfQsAnswered])
    .then(async (response) => {
      console.log("HI")
      return await response.text();
    })
    .then((data) => {
      // console.log(data)
      Constants.blob = data
    })
  }

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
                console.log("nav to qs")
                this.getId()}}>
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