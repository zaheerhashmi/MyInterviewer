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

const thing = 5

function App() {

  return(
    <main>
      <Switch>
        <Route path="/" component = {Home} exact/>
        <Route path='/question/:questionNum' component = {Question}/>
        <Route path='/feedback/:feedbackNum' component = {Feedback}/>
        <Route path='/thankyou' component = {EndScreen}/>
        <Route component = {Error} />
      </Switch>
    </main>
  )
}

export default App;


/*
 TO DO:
 - back end calls
 - figure out Google API stuff (read from files in directory?)
 - getting user audio
 - finish UI
 - limit num of Qs to some constant
 - figure out how to store user data
*/