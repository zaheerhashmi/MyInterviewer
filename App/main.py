from os import path
import json
import pandas as pd

table = pd.read_csv(path.join(path.dirname(__file__), "QuestionData.csv"))

def question(qID):
    # This function returns an audio file!
    return "What are your weaknesses?"

def questionsID():
    # Randomly picks 5 questions?
    return {"qId": ["1", "4"]}

def audio(body):
    with open(path.join(path.dirname(__file__), "SampleText.json"), 'r') as json_file:
        data = json.load(json_file)
        assessText(data["Questions"][0])
    return "Hello World!"


# Given a question object which inclues:
# Question
# Answer
# Keywords
# Time
def assessText(json):
    # print(json)
    question = json["Question"]
    keywords = map(lambda keyword: keyword.lower(), json["Keywords"].split(","))
    time = json["Time"]
    answer = json["Answer"].lower()

    umCount = answer.count("um")
    likeCount = answer.count("like")

    print("Ums:", umCount)
    print("likes:", likeCount)


