import React, { useEffect, useState, Component } from 'react';
//import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { render } from '@testing-library/react';

// components
//import Home from './components/Home';
//import Question from './components/Question';
//import Feedback from './components/Feedback';
//import EndScreen from './components/EndScreen';
//import Error from './components/Error';


function App() {

  return(
    <main>
      <Switch>
        <Route path="/" render = {() => (<div>we home</div>)} exact/>
        <Route path='/question' render = {() => (<div>question screen</div>)}/>
        <Route path='/feedback' render = {() => (<div>feedback screen</div>)}/>
        <Route path='/thankyou' render = {() => (<div>bye bye</div>)}/>
        <Route render = {() => (<div>uh ho </div>)}/>
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


  /*var [counter, setCounter] = useState(0)
  const title = "Mock Interviewer"

  const introduction = "Quisque eget felis sodales risus volutpat \
    faucibus non ac libero. Pellentesque eleifend fringilla porta. \
    Duis eu vestibulum turpis, nec fringilla tortor. Proin posuere \
    placerat tellus eget dapibus. Donec vel urna luctus, mattis nibh \
    ut, mattis dolor. Curabitur luctus nisi porta, pulvinar neque et, \
    pharetra urna. Sed congue ipsum a dictum mollis. Proin vel purus"
  
  useEffect(() => {
    console.log("page has rerendered");
    // make request from API
  }, []);

  return (
    <div className="App">
     <h1>{title}</h1>
     <h2>{introduction}</h2>
     <form>
     <label htmlFor="name">Enter your name to continue</label>
     <input name="name"></input> 
     <button type="submit">
       Start 
     </button> 
     <a
     type = "button"
     href = "https://google.com"
     title = "google"
     target = "_self"
     >
       Link
     </a>
     </form>
    </div>
  );*/
}

export default App;
