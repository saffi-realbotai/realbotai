import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import axios from "axios";
import "./Button.css";
import micIcon from "./assets/images/mic_white.svg"; // Ensure mic icon is in the correct folder

const Button = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const handleSpeechStart = () => {
    if (!browserSupportsSpeechRecognition) {
      alert("Your browser does not support speech recognition.");
      return;
    }
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleSpeechStop = async () => {
    SpeechRecognition.stopListening();
    if (!transcript) {
      alert("No speech detected.");
      return;
    }
    setIsProcessing(true);
    try {
      const response = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: transcript }],
      }, {
        headers: {
          Authorization: `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`, // Replace with your actual OpenAI API key
          "Content-Type": "application/json",
        },
      });
      const chatGptResponse = response.data.choices[0].message.content;
      alert(chatGptResponse);
    } catch (error) {
      console.error("Error communicating with ChatGPT:", error);
      alert("Failed to process speech input.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="button-container">
      <button
        id="realbotai-btn"
        className={`realbotai-btn ${listening ? "realbotai-btn-listening" : "realbotai-btn-idle"}`}
        onMouseDown={handleSpeechStart}
        onMouseUp={handleSpeechStop}
      >
        <img src={micIcon} alt="Microphone Icon" />
      </button>
      {listening && <p>Listening...</p>}
      {transcript && !isProcessing && <p className="transcript-display">Transcript: {transcript}</p>}
      {isProcessing && <p>Processing your request...</p>}
    </div>
  );
};

export default Button;
