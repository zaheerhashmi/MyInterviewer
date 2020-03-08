import wave
import audioop

with wave.open('intput.wav') as fd:
    params = fd.getparams()
    frames = fd.readframes(1000000) # 1 million frames max

print(params)

frames = audioop.reverse(frames, params.sampwidth)

with wave.open('output.wav', 'wb') as fd:
    fd.setparams(params)
    fd.writeframes(frames)