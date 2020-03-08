import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

function App() {

  var [counter, setCounter] = useState(0)
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
  );
}

export default App;
