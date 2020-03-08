"""Synthesizes speech from the input string of text or ssml.

Note: ssml must be well-formed according to:
    https://www.w3.org/TR/speech-synthesis/
"""
from google.cloud import texttospeech
from google.cloud import storage

import os
import pandas
import sys

credential_path = "./APIs/why.json"
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = credential_path

# Instantiates a client
client = texttospeech.TextToSpeechClient()

def delete_blob(bucket_name, blob_name):
    """Deletes a blob from the bucket."""
    storage_client = storage.Client()
    bucket = storage_client.get_bucket('newhacks2020')
    blob = bucket.blob('Files')

    blob.delete()

def upload_blob(bucket_name, path, destination_blob_name):
    """Uploads a file to the bucket."""
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)

    blob.upload_from_filename(path)

def text2speech(text):

    bucket_name = 'newhacks2020'

    try:
        delete_blob(bucket_name, 'Files')
    except:
        print("Bucket does not exist")
    
    # Set the text input to be synthesized
    synthesis_input = texttospeech.types.SynthesisInput(text=text)

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
    with open('./APIs/questionmp3/output.mp3', 'wb') as out:
        # Write the response to the output file.
        out.write(response.audio_content)
        print('Audio content written to file output.mp3')


    storage_uri = 'gs://' + bucket_name + '/' + 'Files'

    upload_blob(bucket_name, './APIs/questionmp3/output.mp3', 'Files')
    os.remove("./APIs/questionmp3/output.mp3")

    return bucket_name + '/' + 'Files'