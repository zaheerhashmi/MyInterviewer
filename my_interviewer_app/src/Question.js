import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // possibly not needed
//import './Question.css'; // make this later
//import { render } from '@testing-library/react';
import { withRouter } from "react-router";

import Constants from './Constants'


export class Question extends React.Component {

    render(){

        var questionId = this.props.match.params.questionNum
        var linkToFeedback= '/feedback/'+ questionId

    return (
        <div className="Question">
            <h1>Question page {questionId} </h1>
            <h2>What are your strengths?</h2>
            <button 
                title = "play sound"
                type = "button"
                className = "action-button"
                onClick = {async () => 
                    {
                        // var url = window.URL.createObjectURL(Constants.blob)
                        // window.audio = new Audio();
                        // window.audio.crossOrigin = 'anonymous';

                        // window.audio.src = url;
                        // window.audio.play();
                        // var playPromise = document.querySelector('window.audio').play();
                        // var playPromise = document.querySelector('#audio').src = Constants.blob
                        // await document.querySelector('#audio').play()

                    //     var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
                    // audio.play();
                    console.log("play audio");}}>
                    Play Audio
             </button>
             <br></br>
            <button
                title = "next-question"
                type = "button"
                className = "action-button"
                onClick = {
                    () => {Constants.user._numOfQsAnswered = Constants.user._numOfQsAnswered + 1;
                        console.log(Constants.blob);
                            this.props.history.push(linkToFeedback);}} >
                See Feedback
            </button>
            </div>
      );
    }
}

export default Question;