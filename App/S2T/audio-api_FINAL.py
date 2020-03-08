from google.cloud import speech_v1p1beta1
from google.cloud.speech_v1p1beta1 import enums
from google.cloud import storage
import json
from google.oauth2 import service_account

def upload_blob(bucket_name, path, destination_blob_name):
    """Uploads a file to the bucket."""
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)

    blob.upload_from_filename(path)



def delete_blob(bucket_name, blob_name):
    """Deletes a blob from the bucket."""
    storage_client = storage.Client()
    bucket = storage_client.get_bucket('newhacks2020')
    blob = bucket.blob('Files')

    blob.delete()



def sample_recognize(path):
    """
    Performs synchronous speech recognition on an audio file

    Args:
      storage_uri URI for audio file in Cloud Storage, e.g. gs://[BUCKET]/[FILE]
    """
    bucket_name = 'newhacks2020'

    credentials = service_account.Credentials.from_service_account_file(
        './why.json')

    upload_blob(bucket_name, path, 'Files')
    storage_uri = 'gs://' + bucket_name + '/' + 'Files'

    # storage_uri = 'gs://cloud-samples-data/speech/brooklyn_bridge.mp3'

    # The language of the supplied audio
    language_code = "en-US"

    # Sample rate in Hertz of the audio data sent
    sample_rate_hertz = 16000

    client = speech_v1p1beta1.SpeechClient()
    # audio = types.RecognitionAudio(uri=gcs_uri)


    # Encoding of audio data sent. This sample sets this explicitly.
    # This field is optional for FLAC and WAV audio formats.
    encoding = enums.RecognitionConfig.AudioEncoding.MP3
    config = {
        "language_code": language_code,
        "sample_rate_hertz": sample_rate_hertz,
        "encoding": encoding,
    }
    audio = {"uri": storage_uri}

    response = client.recognize(config, audio)

    delete_blob(bucket_name, 'Files')

    for result in response.results:
        # First alternative is the most probable result
        alternative = result.alternatives[0]
        print(u"Transcript: {}".format(alternative.transcript))

sample_recognize('C:/Users/Sebestien/Documents/new/audio_files/um.mp3')