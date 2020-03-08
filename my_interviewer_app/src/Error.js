import React, { useEffect, useState } from 'react';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // possibly not needed
//import './Home.css'; // make this later
import { render } from '@testing-library/react';

const Error = () => {
    return (
        <div className="Error">
         <h1>Error</h1>
         <h2>uh oh u messed up</h2>
        </div>
      );
}

export default Error;