from flask import Flask
from flask import request

from main import *

app = Flask(__name__)

@app.route("/getQuestions", methods=['GET'])
def getQuestions():
    print("HI")
    return questionsID()

@app.route("/qID/<id>", methods=['GET'])
def questionID(id):
    return question(id)

@app.route("/audio", methods=['POST'])
def postAudio():
    response = request.get_json()
    score = audio(response)
    return score
    
if __name__ == "__main__":
    app.run(debug=True)