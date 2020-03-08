"""Synthesizes speech from the input string of text or ssml.

Note: ssml must be well-formed according to:
    https://www.w3.org/TR/speech-synthesis/
"""
from google.cloud import texttospeech
import os
import pandas
csv_data = pandas.read_csv('QuestionData.csv')

lst = []

def qtolst(L):
    for index, row in csv_data.iterrows():
        L.append(row['Question'])
    return

qtolst(lst)




credential_path = "C:/Users/Sebestien/Documents/new/why.json"
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credential_path

# Instantiates a client
client = texttospeech.TextToSpeechClient()

length_of_list = len(lst)

for i in range(0, length_of_list):

    # Set the text input to be synthesized
    synthesis_input = texttospeech.types.SynthesisInput(text=lst[i])

    # Build the voice request, select the language code ("en-US") and the ssml
    # voice gender ("neutral")
    voice = texttospeech.types.VoiceSelectionParams(
        language_code='en-US',
        ssml_gender=texttospeech.enums.SsmlVoiceGender.NEUTRAL)

    # Select the type of audio file you want returned
    audio_config = texttospeech.types.AudioConfig(
        audio_encoding=texttospeech.enums.AudioEncoding.MP3)

    # Perform the text-to-speech request on the text input with the selected
    # voice parameters and audio file type
    response = client.synthesize_speech(synthesis_input, voice, audio_config)

    # The response's audio_content is binary.
    with open('./questionmp3/output' + str(i)+ '.mp3', 'wb') as out:
        # Write the response to the output file.
        out.write(response.audio_content)
        print('Audio content written to file output' + str(i) + ".mp3")
