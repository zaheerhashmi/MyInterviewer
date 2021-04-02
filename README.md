# MyInterviewer

## Inspiration

Practice makes perfect. That's what we've all been told since we were children. Interviews can be stressful and practice is very important. For individuals who's first language is not English, they may especially struggle with this, having no experience interviewing for jobs in English or no idea what kinds of questions can be expected. This online web application is built specifically to improve all the minor kinks and details in your interview skills, ranging from technical questions to more broad, general questions. Quick and resourceful feedback leaves you confident for that next interview.

## What it does

This web application initially greets you and prompts you to enter your name for a personalized experience. The link on the page will lead you to a page that will now prompt you to listen to a hard-coded interview question. Recording your response will allow the app to run a series of criteria that will provide feedback to you on how to improve your response (theoretically). Two more interview questions are asked and provide feedback, and then a thank you page is displayed.

## How I built it

Work was divided between front-end and back-end. On the back-end we developed a server using Flask, processed user voice input using google-speech-to-text-API from google-cloud as well as converting the interview question dataset to speech using google-text-to-speech-API. At this moment only three questions are asked, but this can be easily increased and is simplified for demonstration.

## Challenges I ran into

* Learning how relevant tools like React work in a short period of time
* Integrating the feedback module into the back-end
* Learning how it all comes together

## Accomplishments that I'm proud of

Sebestien & Muhammad
* Activating Google Cloud APIs

Maria
* UI and Framework

Naz
* Integrating front-end with back-end

## What I learned

Sebestien & Muhammad Zaheer Hashmi
* google cloud and apis
* node.js basics
* file directory system
* git version control
* python and javascript

Maria
* html and css
* React
* javascript

Naz
* React
* google-cloud-api

## What's next for MyInterviewer
* Implementing a video based input that will detect eye-contact to influence the feedback.
* UI improvements
* Additional questions with multiple language integration
* Replacing dataset of questions with AI created with neural network

## Built With
* css
* flask
* google-web-speech-api
* html
* json
* node.js
* python
* react
