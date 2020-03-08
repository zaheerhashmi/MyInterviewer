import React from 'react';

class UserInfo {
    constructor(name, score) {
        this._name = name;
        this._score = score;
    }

    addScore(points) {
        // increase score by points points
    }

    getScore() {
        return this._score
    }

    getName() {
        return this._name
    }

}