import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // possibly not needed
//import './Question.css'; // make this later
//import { render } from '@testing-library/react';

const Question = ({match}) => {
    return (
        <div className="Question">
         <Switch>
            <Route
                path={`${match.path}/:questionNumber`}
                render={props => 
                    (<div>
                      <h1>Question page {props.match.params.questionNumber}</h1>
                      <h2>I will be reading the question</h2>
                        <a
                            type="button"
                            href = '/question/2'
                            title="start"
                            target = "_self">
                            Next question
                        </a> 
                     </div>)
                }/>
         </Switch>
        </div>
      );
    }

export default Question;