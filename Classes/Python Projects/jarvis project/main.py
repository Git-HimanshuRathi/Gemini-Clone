import speech_recognition as sr # type: ignore
import webbrowser 
import pyttsx3  # type: ignore
import musicLib

recogniser = sr.Recognizer()
engine = pyttsx3.init()

def speak(text):
    engine.say(text)
    engine.runAndWait()

def processCommand(c):
    if "open youtube" in c.lower():
        speak("Opening youtube")
        webbrowser.open("https://www.youtube.com/")
    elif "open google" in c.lower():        
        speak("Opening google")
        webbrowser.open("https://www.google.com/")  
    elif "open instagram" in c.lower():
        speak("Opening instagram")
        webbrowser.open("https://www.instagram.com/")
    elif "open linkedin" in c.lower():
        speak("Opening linkedin")
        webbrowser.open("https://www.linkedin.com/")
    elif "open github" in c.lower():
        speak("Opening github")
        webbrowser.open("https://www.github.com/")
    elif c.lower().startdswith("play"):
        song = c.lower().split(" ")
        link = musicLib.music[song]
        webbrowser.open(link)
        
    

if __name__ == "__main__":
    speak("I am jarvis")
    while True:
        r = sr.Recognizer()
        with sr.Microphone() as source:
            print("Listening...")
            audio = r.listen(source , timeout = 2)
        command = r.recognize_google(audio)
        
        try:
            command = r.recognize_google(audio)
            if(command.lower() == "jarvis"):
                speak("Yes Sir")
                
                with sr.Microphone() as source:
                    print("Listening...")
                    audio = r.listen(source , timeout = 2)
                    command = r.recognize_google(audio)
                    
                    processCommand(command)
               
           
            
            
            
        except Exception as e:
            print("Error; {0}".format(e))