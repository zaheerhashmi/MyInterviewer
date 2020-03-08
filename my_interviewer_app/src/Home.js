import React, { useEffect, useState } from 'react';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // possibly not needed
//import './Home.css'; // make this later
import { render } from '@testing-library/react';

const Home = () => {
    return (
        <div className="Home">
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

export default Home;