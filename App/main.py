from os import path
import json
import pandas as pd
import random

import sys
sys.path.insert(0, './APIs')

from parralelDots import *

table = pd.read_csv(path.join(path.dirname(__file__), "QuestionData.csv"))

def question(qID):
    return table["Question"][int(qID)]

def questionsID():
    count_row = table.shape[0]
    indexes = random.sample(range(1, count_row + 1), 3)
    return {"qId": indexes}

def audio(body):

    answerScore = scoreAPI(body["Answer"])

    qID = body["qID"]
    row = table.loc[table['qID'] == qID]
    body["Question"] = row["Question"][0]
    body["Keywords"] = row["Keywords"][0]
    return "JHI"
    # return assessText(body)

# Given a question object which inclues:
# Question
# Answer
# Keywords
# Time
def assessText(json):
    print(json)
    question = json["Question"]
    keywords = map(lambda keyword: keyword.lower(), json["Keywords"].split(","))
    time = json["Time"]
    answer = json["Answer"].lower()

    umCount = answer.count("um")
    likeCount = answer.count("like")

    print("Ums:", umCount)
    print("likes:", likeCount)

    # Asses them based 


