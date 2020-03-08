import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // possibly not needed
//import './Feedback.css'; // make this later
//import { render } from '@testing-library/react';
import { withRouter } from "react-router";

export class Feedback extends React.Component {
    render() {
        var feedbackId = this.props.match.params.feedbackNum
        var linkToNextQuestion= '/question/'+ (parseInt(feedbackId,10)+1)
        return (
            <div className="Feedback">
            <h1>Feedback page {feedbackId}</h1>
            <h2>I will be giving you feedback</h2>
            <button
            title = "next-question"
            type = "button"
            className = "action-button"
            onClick = {() => {this.props.history.push(linkToNextQuestion);}} >
                Next Interview Question
            </button>
            </div>
        );
    }
}

export default Feedback;