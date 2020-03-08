import React from 'react';

class UserInfo {
    constructor(name, score, numOfQsAnswered) {
        this._name = name;
        this._score = score;
        this._numOfQsAnswered = numOfQsAnswered;

      //  this.score = this.score.bind(this);
    }
    score (value) {
        this._score = value
    }

    name (name) {
        this._name = name
    }

    numOfQsAnswered (value) {
        this._numOfQsAnswered = value
    }

}

export default UserInfo;