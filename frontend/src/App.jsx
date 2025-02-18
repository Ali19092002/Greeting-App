import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [greet, setGreet] = useState("");

  const greeting = async () => {
    if (!name) {
      setGreet("Name is required.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8000/api/greet?name=${name}`
      );
      setGreet(response.data.message || response.data.error);
    } catch (error) {
      setGreet("Failed to fetch greeting.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold mb-4">Greeting App</h1>
        <input
          type="text"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-lg mb-4"
        />
        <button
          onClick={greeting}
          className="text-[15px] tracking-[3px] uppercase transition-all px-4 bg-[#0a0a0a] text-white py-2 rounded-full hover:bg-[#a37d4c]"
        >
          Get Greeting
        </button>
        {greet && <p className="text-[20px] mt-4 text-lg font-semibold">{greet}</p>}
      </div>
    </div>
  );
}

export default App;
