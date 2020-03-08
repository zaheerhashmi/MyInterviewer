import os

print("Make sure to install CLOUD SDK")

print("Make sure to make a venv and activate it!")
# py -m venv venv
# .\venv\Scripts\activate

os.system("set GOOGLE_APPLICATION_CREDENTIALS=./APIs/why.json")

os.system("pip install -r requirements.txt")

os.system("pip install --upgrade google-cloud-storage")

