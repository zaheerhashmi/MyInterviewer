import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // possibly not needed
//import './Feedback.css'; // make this later
//import { render } from '@testing-library/react';
import { withRouter } from "react-router";

import Constants from './Constants'

export class Feedback extends React.Component {
    render() {
        var feedbackId = this.props.match.params.feedbackNum
        var linkToNextQuestion= '/question/'+ (parseInt(feedbackId,10)+1)
        return (
            <div className="Feedback">
            <h1> Feedback for question {feedbackId}</h1>
            <h2>I am here to judge your response and help you improve, {Constants.user._name}.</h2>


             <audio controls="controls" src={Constants.recordedAudioAnswer} type="audio/mp3" />
             <button 
                title = "play back interview answer"
                type = "button"
                className = "action-button"
                onClick = {() => 
                    {var audio = new Audio(Constants.recordedAudioAnswer);
                    audio.play();
                    console.log("playing my responce");}}>
                    Play back my answer
             </button>

            <button
            title = "next-question"
            type = "button"
            className = "action-button"
            onClick = {() => {
                if (Constants.user._numOfQsAnswered >= 3) {
                    this.props.history.push('/thankyou');
                } else {
                    this.props.history.push(linkToNextQuestion);
                }}} >
                Awesome! Let's move on
            </button>
            </div>
        );
    }
}

export default Feedback;