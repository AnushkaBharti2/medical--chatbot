import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();
      setResponse(data.reply);
    } catch (err) {
      console.error("Error:", err);
      setResponse("Error contacting backend");
    }
  };

  return (
    <div className="App">
      <h1>Medical Chatbot</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows="4"
        cols="50"
        placeholder="Ask me a medical question..."
      />
      <br />
      <button onClick={handleSend}>Ask</button>
      <div className="response">
        <strong>Chatbot says:</strong> {response}
      </div>
    </div>
  );
}

export default App;

