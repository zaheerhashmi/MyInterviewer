import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // possibly not needed
//import './Question.css'; // make this later
//import { render } from '@testing-library/react';

const Question = ({match}) => {
  
  /*useEffect(() => {
    console.log("page has rerendered");
    // make request from API
  }, []); */

  //var path = `${match.path}/:hey`

    return (
        <div className="Question">
         <Switch>
            <Route
                path={`${match.path}/:questionNumber`}
                render={props => 
                    (<div>
                      <h1>Question page {props.match.params.questionNumber}</h1>
                     </div>
                )
                    }/>
         </Switch>
         <h2>I will be reading the question</h2>
        </div>
      );
    }

export default Question;