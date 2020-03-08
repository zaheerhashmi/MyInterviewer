import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // possibly not needed
//import './Feedback.css'; // make this later
//import { render } from '@testing-library/react';

const Feedback = ({match}) => {
  
  /*useEffect(() => {
    console.log("page has rerendered");
    // make request from API
  }, []); */

    return (
        <div className="Feedback">
         <Switch>
            <Route
                path={`${match.path}/:feedbackPageNumber`}
                render={props => 
                    (<div>
                      <h1>Feedback page {props.match.params.feedbackPageNumber}</h1>
                     </div>)
            }/>
         </Switch>
         <h2>I will be giving you feedback</h2>
        </div>
    );
}

export default Feedback;