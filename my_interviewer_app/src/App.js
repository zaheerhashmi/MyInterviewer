import React, { useEffect, useState, Component } from 'react';
//import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { render } from '@testing-library/react';

// components
import Home from './Home';
import Question from './Question';
import Feedback from './Feedback';
import EndScreen from './EndScreen';
import Error from './Error';
import { match } from 'assert';


function App() {

  return(
    <main>
      <Switch>
        <Route path="/" component = {Home} exact/>
        <Route path='/question' component = {Question}/>
        <Route path='/feedback' component = {Feedback}/>
        <Route path='/thankyou' component = {EndScreen}/>
        <Route component = {Error} />
      </Switch>
    </main>
  )

/* 
<Route path="/" component = {Home} exact/>
        <Route path='/question' component = {Question}/>
        <Route path='/feedback' component = {Feedback}/>
        <Route path='/thankyou' component = {EndScreen}/>
        <Route component = {Error}/>
        */


  /*
  
  useEffect(() => {
    console.log("page has rerendered");
    // make request from API
  }, []); */
}

export default App;
