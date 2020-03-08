import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // possibly not needed
//import './Question.css'; // make this later
//import { render } from '@testing-library/react';
import { withRouter } from "react-router";


export class Question extends React.Component {

    render(){

        var questionId = this.props.match.params.questionNum
        var linkToFeedback= '/feedback/'+ questionId
       // var linkToFeedback= '/question/'+ (parseInt(questionId,10)+1)
    return (
        <div className="Question">
            <h1>Question page {questionId} </h1>
            <h2>I will be reading the question</h2>
            <button 
                title = "play sound"
                type = "button"
                className = "action-button"
                onClick = {() => 
                    {var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
                    audio.play();
                    console.log("play audio")}} >
                Play Audio
             </button>
             <br></br>
            <button
                title = "next-question"
                type = "button"
                className = "action-button"
                onClick = {
                    () => {this.props.history.push(linkToFeedback);}} >
                See Feedback
            </button>
            </div>
      );
    }
}

export default Question;