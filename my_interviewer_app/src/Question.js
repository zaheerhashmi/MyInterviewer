import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // possibly not needed
//import './Question.css'; // make this later
//import { render } from '@testing-library/react';
import { withRouter } from "react-router";

import { ReactMic } from 'react-mic';


import Constants from './Constants'


export class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          record: false
        }
     
      }


      startRecording = () => {
        this.setState({
          record: true
        });
      }
     
      stopRecording = () => {
        this.setState({
          record: false
        });
      }
     
      onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
      }
     
      onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
        Constants.recordAudioAnswer = recordedBlob.blobURL;
        // have option to play this URL
       // console.log('in constants: ', Constants.recordAudioAnswer);
      }


    render(){

        var questionId = this.props.match.params.questionNum
        var linkToFeedback= '/feedback/'+ questionId

    return (
        <div className="Question">
            <h1>Question {questionId} </h1>
            <p>Press button to hear the question:</p>
            <button 
                title = "play sound"
                type = "button"
                className = "action-button"
                onClick = {() => 
                    {var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
                    audio.play();
                    console.log("play audio");}}>
                    Hear Interview Question
             </button>

<br></br>
<br></br>

            <div>
             <ReactMic
                record={this.state.record}
                className="sound-wave"
                onStop={this.onStop}
                onData={this.onData}
                strokeColor="#000000"
                backgroundColor= "#FF5858" />
                <button onClick={this.startRecording} 
                type="button"
                className = "action-button">
                    Start recording
                </button>
                <button onClick={this.stopRecording} 
                type="button"
                className = "action-button">
                    Stop recording
                </button>
            </div>

<br></br>
       <button
            title = "next-question"
            type = "button"
            className = "action-button"
            onClick = {
                () => {Constants.user._numOfQsAnswered = Constants.user._numOfQsAnswered + 1;
                    this.props.history.push(linkToFeedback);}} >
            See Feedback
        </button> 
            </div>
      );
    }
}

export default Question;