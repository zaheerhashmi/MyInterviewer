import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // possibly not needed
//import './Question.css'; // make this later
//import { render } from '@testing-library/react';
import { withRouter } from "react-router";
import MicRecorder from 'mic-recorder-to-mp3';

import { ReactMic } from 'react-mic';


import Constants from './Constants'

const Mp3Recorder = new MicRecorder({ bitRate: 128 });


export class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          record: false,
          isRecording: false,
          blobURL: '',
          isBlocked: false,
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

    start = () => {
      if (this.state.isBlocked) {
        console.log('Permission Denied');
        } else {
          Mp3Recorder
            .start()
            .then(() => {
              this.setState({ isRecording: true });
            }).catch((e) => console.error(e));
        }
      };

    stop = () => {
        Mp3Recorder
          .stop()
          .getMp3()
          .then(([buffer, blob]) => {
            const blobURL = URL.createObjectURL(blob)
            this.setState({ blobURL, isRecording: false });
          }).catch((e) => console.log(e));
      };

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
                    var audio = new Audio("http://storage.googleapis.com/" + Constants.bucket["url"]);
                    audio.play();
                    console.log("play audio");}}>
                    Hear Interview Question
             </button>
<audio src={this.state.blobURL} controls="controls" />

<br></br>
<br></br>

            <div>
                <button onClick={this.start} disabled={this.state.isRecording}
                type="button"
                className = "action-button">
                    Start recording
                </button>
                <button onClick={this.stop} disabled={!this.state.isRecording}
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