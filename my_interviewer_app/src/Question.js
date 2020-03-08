import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // possibly not needed
//import './Question.css'; // make this later
//import { render } from '@testing-library/react';
import { withRouter } from "react-router";


export class Question extends React.Component {

   /* function play() {
        var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
        audio.play();
    } */


    render(){
        var questionId = this.props.match.params.questionNum
        var nextQuestionLink= '/question/'+ (parseInt(questionId,10)+1)
    return (
        <div className="Question">
        <div>
            <h1>Question page {questionId} </h1>
            <h2>I will be reading the question</h2>
            <button
            title = "next-question"
            type = "button"
            className = "action-button"
            onClick = {
                () => {this.props.history.push(nextQuestionLink);
                console.log("nav to next q")}} >
                Next Question
            </button>
        </div>
         <button 
            title = "play sound"
            type = "button"
            onClick = {
                () => console.log("play audio")} >
             Play Audio but only once user has interacted
         </button>
        </div>
      );
    }
}

export default Question;