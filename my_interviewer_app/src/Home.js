import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // possibly not needed
//import './Home.css'; // make this later
import { render } from '@testing-library/react';

import UserInfo from './UserInfo'


const Home = () => {

    const title = "Mock Interviewer"

    const introduction = "Quisque eget felis sodales risus volutpat \
    faucibus non ac libero. Pellentesque eleifend fringilla porta. \
    Duis eu vestibulum turpis, nec fringilla tortor. Proin posuere \
    placerat tellus eget dapibus. Donec vel urna luctus, mattis nibh \
    ut, mattis dolor. Curabitur luctus nisi porta, pulvinar neque et, \
    pharetra urna. Sed congue ipsum a dictum mollis. Proin vel purus"
  
  /*useEffect(() => {
    console.log("page has rerendered");
    // make request from API and get list/array of questions
  }, []); */

  // get random subset of questions from array of size 3-5 (declare this as a constant)
  // this would be an array of custom objects
  // of class that has text and mp3 

    return (
        <div className="Home">
         <h1>{title}</h1>
         <h2>{introduction}</h2>
         <form>
         <label htmlFor="name">Enter your name to continue</label>
         <input 
            name="name"
            onChange = {() => 

                console.log("text field has edited")
            }>
         </input> 
         <a
            type="button"
            href = "/question/1"
            title="start"
            target = "_self">
           Start Interview 
         </a> 
         
         </form>
        </div>
      );
}

// change action thing back to button of type submit
// on submit, create new UserInfo instance and figure out how to access that from all parts of the app
// figure out how to navigate to needed webpage
// possibly using nested paths


// use link out here instead of this <a> bullshit 
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