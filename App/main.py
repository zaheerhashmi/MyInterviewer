from os import path
import json
import pandas as pd
import random
from base64 import b64encode
from json import dumps

import sys
sys.path.insert(0, './APIs')

from parralelDots import *

table = pd.read_csv(path.join(path.dirname(__file__), "QuestionData.csv"))

def question(qID):
    return table["Question"][int(qID)]
    # return encodeJson(qID)

def questionsID():
    count_row = table.shape[0]
    indexes = random.sample(range(1, count_row), 3)
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

def decodeJson(json):
    base64_string = json["Audio"]

    base64_bytes = base64.b64encode(base64_string)


def encodeJson(qID):
    # https://stackoverflow.com/questions/37225035/serialize-in-json-a-base64-encoded-data
    ENCODING = 'utf-8'
    AUDIO_NAME = './APIs/audio_files/Longer.mp3'
    JSON_NAME = 'output.json'

    # first: reading the binary stuff
    # note the 'rb' flag
    # result: bytes
    with open(AUDIO_NAME, 'rb') as open_file:
        byte_content = open_file.read()

    # second: base64 encode read data
    # result: bytes (again)
    base64_bytes = b64encode(byte_content)

    # third: decode these bytes to text
    # result: string (in utf-8)
    base64_string = base64_bytes.decode(ENCODING)

    # optional: doing stuff with the data
    # result here: some dict
    raw_data = {"Audio": base64_string}

    # now: encoding the data to json
    # result: string
    json_data = dumps(raw_data, indent=2)
    return json_data
    # finally: writing the json string to disk
    # note the 'w' flag, no 'b' needed as we deal with text here
    # with open(JSON_NAME, 'w') as another_open_file:
    #     another_open_file.write(json_data)