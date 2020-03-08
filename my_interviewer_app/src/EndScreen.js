import React, { Component } from 'react';
//import { BrowserRouter, Route, Switch } from 'react-router-dom'; // possibly not needed
//import './EndScreen.css'; // make this later
//import { render } from '@testing-library/react';

import Constants from './Constants'

export class EndScreen extends React.Component {
    render () {
        return (
            <div className="EndScreen">
            <h1>Thank you for using our app!</h1>
            <h2>We hope you feel more confident in interviewing now.</h2>
            </div>
        );
    }
}


export default EndScreen;