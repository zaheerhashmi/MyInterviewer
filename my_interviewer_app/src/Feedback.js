import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // possibly not needed
//import './Feedback.css'; // make this later
//import { render } from '@testing-library/react';

export class Feedback extends React.Component {
    render() {
        return (
            <div className="Feedback">
            <h1>Feedback page {this.props.match.params.feedbackNum}</h1>
            <h2>I will be giving you feedback</h2>
            </div>
        );
    }
}

export default Feedback;