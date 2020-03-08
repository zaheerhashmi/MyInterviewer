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
    answer = ""
    if abuse['neither'] < 0.95:
        print("Your text may be seen as abuse or hate speech: ", abuse['neither'])
        answer = answer + "Your text may be seen as abuse or hate speech: " + str(abuse['neither']) + "\n"
    emotion = paralleldots.emotion( text )['emotion']
    if emotion['Sad'] > 0.3:
        print("Your text may be seen as sad: ", emotion['Sad'])
        answer = answer + "Your text may be seen as sad: " + str(emotion['Sad']) + "\n"
    if emotion['Bored'] > 0.2:
        print("Your text may be seen as boring: ", emotion['Bored'])
        answer = answer + "Your text may be seen as boring: " + str(emotion['Bored']) + "\n"
    if emotion['Excited'] < 0.1:
        print("Try to sound more excited!: ", emotion['Excited'])
        answer = answer + "Try to sound more excited!: " + str(emotion['Excited']) + "\n"

    sarcastic = paralleldots.sarcasm( text)
    if sarcastic['Sarcastic'] > 0.5:
        print("You may sound sarcastic: ", sarcastic['Sarcastic'])
        answer = answer + "You may sound sarcastic: " + str(sarcastic['Sarcastic']) + "\n"

    return answer
