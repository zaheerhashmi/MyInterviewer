import paralleldots

paralleldots.set_api_key("wTO9J16ghDlJG50bDFYqV0AJNDZBaYTAelVDfokSHAM")

# paralleldots.get_api_key()
# text = "I am very excited for this new oppurtunity!"

# print(paralleldots.abuse(text))

# print(paralleldots.emotion( text ))

# print(paralleldots.sarcasm( text))

# print(paralleldots.intent( text ))

# print(paralleldots.sentiment( text ))

# print(paralleldots.taxonomy( text ))

def scoreAPI(text):
    abuse = paralleldots.abuse(text)
    if abuse['neither'] < 0.95:
        print("Your text may be seen as abuse or hate speech")
    
    emotion = paralleldots.emotion( text )['emotion']
    print(emotion)
    if emotion['Sad'] > 0.3:
        print("Your text may be seen as sad: ", emotion['Sad'])
    if emotion['Bored'] > 0.2:
        print("Your text may be seen as boring: ", emotion['Bored'])
    if emotion['Excited'] < 0.1:
        print("Try to sound more excited!: ", emotion['Excited'])

    sarcastic = paralleldots.sarcasm( text)
    if sarcastic['Sarcastic'] > 0.5:
        print("You may sound sarcastic: ", sarcastic['Sarcastic'])
