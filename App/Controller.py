from flask import Flask
from flask import request
from flask import send_file
from flask_cors import CORS
from main import *

app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/getQuestions", methods=['GET'])
def getQuestions():
    return questionsID()

@app.route("/qID/<id>", methods=['GET'])
def questionID(id):
    return question(id)

@app.route("/audio", methods=['POST'])
def postAudio():
    response = request.get_json()
    score = audio(response)
    return score
    
@app.route("/qid/<qID>")
def DownloadLogFile (qID):
    path = "Longer.mp3"# question(idd)
    return send_file(path, as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)